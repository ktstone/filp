"use client";

import { useEffect, useState } from "react";
import { Clock, ArrowRight, Music } from "lucide-react";
import { Button } from "@/components/ui/button";

/* -------------------------------------------------------------------------- */
/*  Types & helpers                                                            */
/* -------------------------------------------------------------------------- */

interface ScheduleEntry {
  Date: string;
  "Date Time": string;
  "Time Label": string;
  Name: string;
  Venue: string;
}

interface ShowSlot {
  timeLabel: string;
  dateTime: Date;
  artists: { name: string; venue: string }[];
}

function parseDate(dateTimeStr: string): Date {
  const [datePart, timePart] = dateTimeStr.split(" ");
  const [month, day, year] = datePart.split("/").map(Number);
  const [hours, minutes] = (timePart || "0:0").split(":").map(Number);
  return new Date(year, month - 1, day, hours, minutes);
}

function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function isShowLive(slot: ShowSlot, now: Date): boolean {
  const parts = slot.timeLabel.toLowerCase().split("-").map((s) => s.trim());
  if (parts.length !== 2) return false;

  const startDt = slot.dateTime;
  const endMatch = parts[1].match(/(\d+)(?::(\d+))?\s*(am|pm)/i);
  if (!endMatch) return false;
  let endHour = parseInt(endMatch[1]);
  const endMin = endMatch[2] ? parseInt(endMatch[2]) : 0;
  const endAmPm = endMatch[3].toLowerCase();
  if (endAmPm === "pm" && endHour !== 12) endHour += 12;
  if (endAmPm === "am" && endHour === 12) endHour = 0;

  const endDt = new Date(startDt);
  endDt.setHours(endHour, endMin, 0, 0);
  if (endDt <= startDt) endDt.setDate(endDt.getDate() + 1);

  return now >= startDt && now < endDt;
}

type VenueFilter = "all" | "Honky Tonk" | "Oasis";

/* -------------------------------------------------------------------------- */
/*  Process raw entries into slots for a single day                            */
/* -------------------------------------------------------------------------- */

function getSlotsForDay(entries: ScheduleEntry[], targetDate: Date): ShowSlot[] {
  const slotMap = new Map<string, ShowSlot>();

  for (const entry of entries) {
    const dt = parseDate(entry["Date Time"]);
    if (!isSameDay(dt, targetDate)) continue;

    const key = entry["Time Label"];
    if (!slotMap.has(key)) {
      slotMap.set(key, { timeLabel: key, dateTime: dt, artists: [] });
    }
    slotMap.get(key)!.artists.push({ name: entry.Name, venue: entry.Venue });
  }

  return Array.from(slotMap.values()).sort(
    (a, b) => a.dateTime.getTime() - b.dateTime.getTime(),
  );
}

/** Find the nearest day with shows (today or next available) */
function findNearestDay(entries: ScheduleEntry[]): Date | null {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const dates = new Set<string>();
  const dateMap = new Map<string, Date>();

  for (const entry of entries) {
    const dt = parseDate(entry["Date Time"]);
    const key = `${dt.getFullYear()}-${dt.getMonth()}-${dt.getDate()}`;
    if (!dates.has(key)) {
      dates.add(key);
      dateMap.set(key, new Date(dt.getFullYear(), dt.getMonth(), dt.getDate()));
    }
  }

  const sortedDates = Array.from(dateMap.values()).sort(
    (a, b) => a.getTime() - b.getTime(),
  );

  // Today or nearest future date
  for (const d of sortedDates) {
    if (d >= today) return d;
  }
  // Fallback to the latest date if all are past
  return sortedDates[sortedDates.length - 1] ?? null;
}

/* -------------------------------------------------------------------------- */
/*  Component                                                                  */
/* -------------------------------------------------------------------------- */

export function LineupSection() {
  const [entries, setEntries] = useState<ScheduleEntry[]>([]);
  const [targetDate, setTargetDate] = useState<Date | null>(null);
  const [venueFilter, setVenueFilter] = useState<VenueFilter>("all");
  const [now, setNow] = useState(() => new Date());
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch("/schedule.json")
      .then((r) => r.json())
      .then((data: ScheduleEntry[]) => {
        setEntries(data);
        setTargetDate(findNearestDay(data));
        setLoaded(true);
      })
      .catch(() => setLoaded(true));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 60_000);
    return () => clearInterval(interval);
  }, []);

  if (!loaded) return null;

  const slots = targetDate ? getSlotsForDay(entries, targetDate) : [];
  const filteredSlots =
    venueFilter === "all"
      ? slots
      : slots.filter((s) => s.artists.some((a) => a.venue === venueFilter));

  const isToday = targetDate ? isSameDay(targetDate, new Date()) : false;
  const dateLabel = targetDate
    ? targetDate.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
      })
    : "";

  const honkyTonkCount = slots.reduce(
    (n, s) => n + s.artists.filter((a) => a.venue === "Honky Tonk").length,
    0,
  );
  const oasisCount = slots.reduce(
    (n, s) => n + s.artists.filter((a) => a.venue === "Oasis").length,
    0,
  );

  return (
    <section className="mx-auto max-w-[1280px] px-6 py-20 sm:px-8">
      {/* Header row */}
      <div className="flex flex-col gap-6 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex flex-col gap-2">
          <h3 className="font-heading text-lg font-bold tracking-[1.8px] text-honky-teal uppercase">
            {isToday ? "Today\u2019s Lineup" : "Upcoming Shows"}
          </h3>
          <h2 className="font-heading text-5xl font-black tracking-tight uppercase">
            <span className="text-white">Who&apos;s </span>
            <span className="neon-text font-heading" data-neon="Playing">
              Playing
            </span>
          </h2>
          {dateLabel && (
            <p className="mt-1 text-sm font-medium text-white/40">{dateLabel}</p>
          )}
        </div>

        {/* Venue filter */}
        <div className="flex gap-1.5 self-start rounded-lg border border-white/10 bg-white/5 p-1 backdrop-blur-sm sm:self-auto">
          {(
            [
              { key: "all", label: "All", count: honkyTonkCount + oasisCount },
              { key: "Honky Tonk", label: "Honky Tonk", count: honkyTonkCount },
              { key: "Oasis", label: "The Oasis", count: oasisCount },
            ] as const
          ).map(({ key, label, count }) => (
            <button
              key={key}
              onClick={() => setVenueFilter(key)}
              className={`flex items-center gap-2 rounded-md px-4 py-2.5 text-xs font-semibold tracking-wider uppercase transition-all ${
                venueFilter === key
                  ? "bg-honky-red text-white shadow-lg"
                  : "text-white/50 hover:text-white/80"
              }`}
            >
              {label}
              <span
                className={`flex h-4 min-w-4 items-center justify-center rounded-full px-1 text-[9px] font-bold ${
                  venueFilter === key
                    ? "bg-white/20 text-white"
                    : "bg-white/10 text-white/40"
                }`}
              >
                {count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Timeline */}
      {filteredSlots.length > 0 ? (
        <div className="mt-10 ml-1">
          {filteredSlots.map((slot, i) => {
            const live = isShowLive(slot, now);
            const artists =
              venueFilter === "all"
                ? slot.artists
                : slot.artists.filter((a) => a.venue === venueFilter);

            return (
              <div key={`${slot.timeLabel}-${i}`} className="group relative flex gap-5 md:gap-8">
                {/* Timeline spine */}
                <div className="relative flex w-2 shrink-0 flex-col items-center">
                  <div className="relative z-10 mt-2">
                    {live ? (
                      <div className="relative">
                        <span className="absolute -inset-2 animate-ping rounded-full bg-honky-red/40" />
                        <span className="relative block h-3 w-3 rounded-full bg-honky-red shadow-[0_0_10px_rgba(239,72,80,0.6)]" />
                      </div>
                    ) : (
                      <span className="block h-2.5 w-2.5 rounded-full border-2 border-white/20 bg-honky-bg transition-colors group-hover:border-white/40" />
                    )}
                  </div>
                  <div className="w-px flex-1 bg-gradient-to-b from-white/10 to-transparent" />
                </div>

                {/* Card */}
                <div
                  className={`mb-6 flex-1 rounded-xl border p-5 transition-all ${
                    live
                      ? "border-honky-red/30 bg-honky-red/[0.06] shadow-[0_0_30px_rgba(239,72,80,0.08)]"
                      : "border-white/[0.06] bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04]"
                  }`}
                >
                  {/* Time row */}
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <div className="flex items-center gap-2">
                      <Clock className={`h-3.5 w-3.5 ${live ? "text-honky-red" : "text-white/30"}`} />
                      <span className={`text-sm font-bold tracking-wide ${live ? "text-honky-red" : "text-white/50"}`}>
                        {slot.timeLabel}
                      </span>
                    </div>
                    {live && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-honky-red px-3 py-1">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                        <span className="text-[10px] font-bold tracking-[1.5px] text-white uppercase">
                          Live Now
                        </span>
                      </span>
                    )}
                  </div>

                  {/* Artists */}
                  <div className="flex flex-col gap-2">
                    {artists.map((artist) => (
                      <div
                        key={`${artist.name}-${artist.venue}`}
                        className="flex items-start justify-between gap-4"
                      >
                        <h4 className="font-heading text-xl font-black text-white uppercase md:text-2xl">
                          {artist.name}
                        </h4>
                        <span
                          className={`mt-1 shrink-0 rounded-full border px-3 py-1 text-[10px] font-bold tracking-[1px] uppercase ${
                            artist.venue === "Honky Tonk"
                              ? "border-honky-red/30 bg-honky-red/10 text-honky-red"
                              : "border-honky-teal/30 bg-honky-teal/10 text-honky-teal"
                          }`}
                        >
                          {artist.venue === "Honky Tonk" ? "Honky Tonk" : "The Oasis"}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
          {/* End dot */}
          <div className="ml-[3px] h-2 w-2 rounded-full bg-white/10" />
        </div>
      ) : (
        <div className="mt-10 flex flex-col items-center gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] py-16 text-center">
          <Music className="h-8 w-8 text-white/10" />
          <p className="text-base text-white/40">
            No shows for{" "}
            <span className="font-semibold text-white/60">
              {venueFilter === "Honky Tonk" ? "Honky Tonk" : "The Oasis"}
            </span>{" "}
            today.
          </p>
          <button
            onClick={() => setVenueFilter("all")}
            className="text-sm font-semibold tracking-wider text-honky-red uppercase hover:text-white"
          >
            View All Venues
          </button>
        </div>
      )}

      {/* Full schedule CTA */}
      <div className="mt-10 flex justify-center">
        <Button
          asChild
          variant="outline"
          className="h-12 rounded-lg border-2 border-white/15 bg-transparent px-8 text-sm font-semibold tracking-wider text-white uppercase backdrop-blur-sm hover:bg-white/5 hover:text-white"
        >
          <a href="/events">
            View Full Schedule
            <ArrowRight className="h-4 w-4" />
          </a>
        </Button>
      </div>
    </section>
  );
}
