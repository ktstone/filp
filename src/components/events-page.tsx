"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Music, Clock, MapPin, ChevronLeft, ChevronRight, CalendarDays } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

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

interface DaySchedule {
  dateKey: string;
  date: Date;
  slots: ShowSlot[];
}

type VenueFilter = "all" | "Honky Tonk" | "Oasis";

function parseDate(dateTimeStr: string): Date {
  // "3/1/2026 14:00:00" → Date
  const [datePart, timePart] = dateTimeStr.split(" ");
  const [month, day, year] = datePart.split("/").map(Number);
  const [hours, minutes] = (timePart || "0:0").split(":").map(Number);
  return new Date(year, month - 1, day, hours, minutes);
}

function formatDayOfWeek(date: Date): string {
  return date.toLocaleDateString("en-US", { weekday: "short" }).toUpperCase();
}

function formatMonthDay(date: Date): string {
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

function getDayNumber(date: Date): number {
  return date.getDate();
}

function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

/** Check if a show is currently live */
function isShowLive(slot: ShowSlot, now: Date): boolean {
  const timeLabel = slot.timeLabel.toLowerCase();
  // Parse end time from time label like "2 pm - 6 pm"
  const parts = timeLabel.split("-").map((s) => s.trim());
  if (parts.length !== 2) return false;

  const startDt = slot.dateTime;

  // Parse end time
  const endMatch = parts[1].match(/(\d+)(?::(\d+))?\s*(am|pm)/i);
  if (!endMatch) return false;
  let endHour = parseInt(endMatch[1]);
  const endMin = endMatch[2] ? parseInt(endMatch[2]) : 0;
  const endAmPm = endMatch[3].toLowerCase();

  if (endAmPm === "pm" && endHour !== 12) endHour += 12;
  if (endAmPm === "am" && endHour === 12) endHour = 0;

  // Build end date — if end hour < start hour, it's next day
  const endDt = new Date(startDt);
  endDt.setHours(endHour, endMin, 0, 0);
  if (endDt <= startDt) {
    endDt.setDate(endDt.getDate() + 1);
  }

  return now >= startDt && now < endDt;
}

/* -------------------------------------------------------------------------- */
/*  Data processing                                                            */
/* -------------------------------------------------------------------------- */

function processSchedule(entries: ScheduleEntry[]): DaySchedule[] {
  // Group by date string → then by time slot
  const dayMap = new Map<string, Map<string, { dateTime: Date; artists: { name: string; venue: string }[] }>>();

  for (const entry of entries) {
    const dt = parseDate(entry["Date Time"]);
    const dateKey = `${dt.getFullYear()}-${dt.getMonth()}-${dt.getDate()}`;

    if (!dayMap.has(dateKey)) {
      dayMap.set(dateKey, new Map());
    }
    const slotMap = dayMap.get(dateKey)!;
    const slotKey = entry["Time Label"];

    if (!slotMap.has(slotKey)) {
      slotMap.set(slotKey, { dateTime: dt, artists: [] });
    }
    slotMap.get(slotKey)!.artists.push({
      name: entry.Name,
      venue: entry.Venue,
    });
  }

  // Convert to sorted array
  const days: DaySchedule[] = [];
  for (const [dateKey, slotMap] of dayMap) {
    const slots: ShowSlot[] = [];
    for (const [timeLabel, data] of slotMap) {
      slots.push({ timeLabel, dateTime: data.dateTime, artists: data.artists });
    }
    // Sort slots by time
    slots.sort((a, b) => a.dateTime.getTime() - b.dateTime.getTime());

    const firstSlot = slots[0];
    days.push({
      dateKey,
      date: new Date(firstSlot.dateTime.getFullYear(), firstSlot.dateTime.getMonth(), firstSlot.dateTime.getDate()),
      slots,
    });
  }

  // Sort days chronologically
  days.sort((a, b) => a.date.getTime() - b.date.getTime());
  return days;
}

/* -------------------------------------------------------------------------- */
/*  Date picker                                                                */
/* -------------------------------------------------------------------------- */

function DatePicker({
  days,
  selectedDate,
  onSelect,
}: {
  days: DaySchedule[];
  selectedDate: Date;
  onSelect: (date: Date) => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = useCallback((direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 200;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  }, []);

  // Scroll selected date into view on mount
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const selected = container.querySelector("[data-selected=true]");
    if (selected) {
      selected.scrollIntoView({ inline: "center", behavior: "auto", block: "nearest" });
    }
  }, []);

  return (
    <div className="relative">
      {/* Arrow buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute top-1/2 left-0 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-honky-bg/90 text-white/60 backdrop-blur-sm transition-colors hover:border-white/20 hover:text-white"
        aria-label="Scroll dates left"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute top-1/2 right-0 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-honky-bg/90 text-white/60 backdrop-blur-sm transition-colors hover:border-white/20 hover:text-white"
        aria-label="Scroll dates right"
      >
        <ChevronRight className="h-4 w-4" />
      </button>

      {/* Scrollable date strip */}
      <div
        ref={scrollRef}
        className="scrollbar-none mx-10 flex gap-2 overflow-x-auto py-1"
        style={{ scrollbarWidth: "none" }}
      >
        {days.map((day) => {
          const isSelected = isSameDay(day.date, selectedDate);
          const isToday = isSameDay(day.date, new Date());

          return (
            <button
              key={day.dateKey}
              data-selected={isSelected}
              onClick={() => onSelect(day.date)}
              aria-label={day.date.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}
              aria-pressed={isSelected}
              className={`group/date relative flex shrink-0 flex-col items-center gap-0.5 rounded-xl px-4 py-3 transition-all ${
                isSelected
                  ? "border border-honky-red/50 bg-honky-red/10 shadow-[0_0_20px_rgba(239,72,80,0.1)]"
                  : "border border-transparent hover:border-white/10 hover:bg-white/5"
              }`}
            >
              {/* Weekday */}
              <span
                className={`text-[10px] font-bold tracking-[1.5px] ${
                  isSelected ? "text-honky-red" : "text-white/30"
                }`}
              >
                {formatDayOfWeek(day.date)}
              </span>
              {/* Day number */}
              <span
                className={`font-heading text-2xl font-black ${
                  isSelected ? "text-white" : "text-white/60"
                }`}
              >
                {getDayNumber(day.date)}
              </span>
              {/* Month */}
              <span
                className={`text-[10px] font-medium tracking-wider ${
                  isSelected ? "text-white/70" : "text-white/25"
                }`}
              >
                {day.date.toLocaleDateString("en-US", { month: "short" }).toUpperCase()}
              </span>
              {/* Today indicator */}
              {isToday && (
                <span className="absolute -bottom-0.5 h-1 w-1 rounded-full bg-honky-teal" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Timeline show entry                                                        */
/* -------------------------------------------------------------------------- */

function TimelineSlot({
  slot,
  isLive,
  venueFilter,
  index,
}: {
  slot: ShowSlot;
  isLive: boolean;
  venueFilter: VenueFilter;
  index: number;
}) {
  const { ref, visible } = useReveal();
  const filteredArtists =
    venueFilter === "all"
      ? slot.artists
      : slot.artists.filter((a) => a.venue === venueFilter);

  if (filteredArtists.length === 0) return null;

  return (
    <div
      ref={ref}
      className={`group relative flex gap-6 md:gap-10 transition-all duration-700 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Timeline dot + line */}
      <div className="relative flex w-2 shrink-0 flex-col items-center">
        {/* Dot */}
        <div className="relative z-10 mt-2">
          {isLive ? (
            <div className="relative">
              <span className="absolute -inset-2 animate-ping rounded-full bg-honky-red/40" />
              <span className="relative block h-3 w-3 rounded-full bg-honky-red shadow-[0_0_10px_rgba(239,72,80,0.6)]" />
            </div>
          ) : (
            <span className="block h-2.5 w-2.5 rounded-full border-2 border-white/20 bg-honky-bg transition-colors group-hover:border-white/40" />
          )}
        </div>
        {/* Vertical line */}
        <div className="w-px flex-1 bg-gradient-to-b from-white/10 to-transparent" />
      </div>

      {/* Content */}
      <div
        className={`mb-8 flex-1 rounded-xl border p-5 transition-all md:p-6 ${
          isLive
            ? "border-honky-red/30 bg-honky-red/[0.06] shadow-[0_0_30px_rgba(239,72,80,0.08)]"
            : "border-white/[0.06] bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04]"
        }`}
      >
        {/* Time + live badge */}
        <div className="mb-3 flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2">
            <Clock className={`h-3.5 w-3.5 ${isLive ? "text-honky-red" : "text-white/30"}`} />
            <span
              className={`text-sm font-bold tracking-wide ${
                isLive ? "text-honky-red" : "text-white/50"
              }`}
            >
              {slot.timeLabel}
            </span>
          </div>
          {isLive && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-honky-red px-3 py-1">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
              <span className="text-[10px] font-bold tracking-[1.5px] text-white uppercase">
                Live Now
              </span>
            </span>
          )}
        </div>

        {/* Artists */}
        <div className="flex flex-col gap-3">
          {filteredArtists.map((artist) => (
            <div key={`${artist.name}-${artist.venue}`} className="flex items-start justify-between gap-4">
              <h3 className="font-heading text-xl font-black text-white uppercase md:text-2xl">
                {artist.name}
              </h3>
              <span
                className={`mt-1 shrink-0 rounded-full border px-3 py-1 text-[10px] font-bold tracking-[1px] uppercase backdrop-blur-sm ${
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
}

/* -------------------------------------------------------------------------- */
/*  Page component                                                             */
/* -------------------------------------------------------------------------- */

export function EventsPage() {
  const [schedule, setSchedule] = useState<DaySchedule[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [venueFilter, setVenueFilter] = useState<VenueFilter>("all");
  const [loading, setLoading] = useState(true);
  const [now, setNow] = useState(() => new Date());

  // Fetch schedule data
  useEffect(() => {
    fetch("/schedule.json")
      .then((res) => res.json())
      .then((data: ScheduleEntry[]) => {
        const processed = processSchedule(data);
        setSchedule(processed);

        // Select today if available, otherwise first date
        const today = new Date();
        const todayMatch = processed.find((d) => isSameDay(d.date, today));
        setSelectedDate(todayMatch ? todayMatch.date : processed[0]?.date ?? today);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Update "now" every minute for live status
  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 60_000);
    return () => clearInterval(interval);
  }, []);

  const selectedDay = schedule.find((d) => selectedDate && isSameDay(d.date, selectedDate));

  // Filter slots based on venue, keeping slots that have at least one matching artist
  const visibleSlots =
    selectedDay?.slots.filter((slot) => {
      if (venueFilter === "all") return true;
      return slot.artists.some((a) => a.venue === venueFilter);
    }) ?? [];

  // Count shows per venue for the selected day
  const honkyTonkCount =
    selectedDay?.slots.reduce(
      (acc, slot) => acc + slot.artists.filter((a) => a.venue === "Honky Tonk").length,
      0,
    ) ?? 0;
  const oasisCount =
    selectedDay?.slots.reduce(
      (acc, slot) => acc + slot.artists.filter((a) => a.venue === "Oasis").length,
      0,
    ) ?? 0;

  return (
    <div className="min-h-screen bg-honky-bg">
      {/* ------------------------------------------------------------------ */}
      {/*  Hero                                                               */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative flex min-h-[440px] items-end overflow-hidden px-6 pt-28 pb-12 md:min-h-[500px] md:pb-16">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2c1a1a] via-honky-bg to-honky-bg" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,rgba(239,70,79,0.15),transparent_60%)]" />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 mx-auto w-full max-w-[1280px]">
          {/* Label */}
          <div className="mb-6 inline-flex animate-[fadeInUp_0.6s_ease-out_both] items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
            <Music className="h-3.5 w-3.5 text-honky-teal" />
            <span className="text-xs font-semibold tracking-[1.2px] text-honky-teal uppercase">
              Live Music Schedule
            </span>
          </div>

          {/* Heading */}
          <h1 className="animate-[fadeInUp_0.7s_ease-out_0.1s_both] font-heading text-5xl font-black text-white uppercase md:text-6xl lg:text-7xl">
            Who&apos;s{" "}
            <span className="neon-text font-heading" data-neon="Playing">
              Playing
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-[560px] animate-[fadeInUp_0.7s_ease-out_0.2s_both] text-lg leading-8 text-white/60 md:text-xl">
            Live music every day across two stages. Check the schedule and
            plan your night on Broadway.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  Schedule                                                            */}
      {/* ------------------------------------------------------------------ */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-[1280px]">
          {loading ? (
            /* Loading skeleton */
            <div className="flex flex-col items-center gap-4 py-20">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/10 border-t-honky-red" />
              <p className="text-sm text-white/40">Loading schedule...</p>
            </div>
          ) : schedule.length === 0 ? (
            /* Empty state */
            <div className="flex flex-col items-center gap-4 py-20 text-center">
              <CalendarDays className="h-12 w-12 text-white/10" />
              <p className="text-lg font-medium text-white/40">No schedule available yet.</p>
            </div>
          ) : (
            <>
              {/* Date picker */}
              <div className="mb-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
                <DatePicker
                  days={schedule}
                  selectedDate={selectedDate!}
                  onSelect={setSelectedDate}
                />
              </div>

              {/* Selected date label + venue filters */}
              <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                {/* Date display */}
                <div className="flex items-center gap-3">
                  <CalendarDays className="h-5 w-5 text-honky-red" />
                  <h2 className="font-heading text-2xl font-black text-white uppercase md:text-3xl">
                    {selectedDate?.toLocaleDateString("en-US", {
                      weekday: "long",
                      month: "long",
                      day: "numeric",
                    })}
                  </h2>
                </div>

                {/* Venue filter tabs */}
                <div className="flex gap-1.5 rounded-lg border border-white/10 bg-white/5 p-1 backdrop-blur-sm">
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
                      aria-pressed={venueFilter === key}
                      className={`flex items-center gap-2 rounded-md px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-all ${
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
              {visibleSlots.length > 0 ? (
                <div className="ml-1 md:ml-4">
                  {visibleSlots.map((slot, i) => (
                    <TimelineSlot
                      key={`${slot.timeLabel}-${i}`}
                      slot={slot}
                      isLive={isShowLive(slot, now)}
                      venueFilter={venueFilter}
                      index={i}
                    />
                  ))}
                  {/* Timeline end dot */}
                  <div className="relative flex w-2 items-center md:ml-0">
                    <span className="block h-2 w-2 rounded-full bg-white/10" />
                  </div>
                </div>
              ) : (
                /* No shows for this filter */
                <div className="flex flex-col items-center gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] py-16 text-center">
                  <MapPin className="h-8 w-8 text-white/10" />
                  <p className="text-base text-white/40">
                    No shows scheduled for{" "}
                    <span className="font-semibold text-white/60">
                      {venueFilter === "Honky Tonk" ? "Honky Tonk" : "The Oasis"}
                    </span>{" "}
                    on this day.
                  </p>
                  <button
                    onClick={() => setVenueFilter("all")}
                    className="text-sm font-semibold tracking-wider text-honky-red uppercase transition-colors hover:text-white"
                  >
                    View All Venues
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
}
