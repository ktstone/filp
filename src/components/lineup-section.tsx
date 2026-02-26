"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Clock } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface LineupShow {
  image: string;
  date: string;
  startHour: number; // 0-23
  startMinute: number;
  endHour: number; // 0-23, use next-day hours (e.g. 27 = 3AM next day)
  endMinute: number;
  displayTime: string;
  name: string;
  genre: string;
  upNext?: string;
}

const mainStageShows: LineupShow[] = [
  {
    image: "/images/band-tribute.jpg",
    date: "Tue, Feb 25",
    startHour: 16,
    startMinute: 0,
    endHour: 18,
    endMinute: 0,
    displayTime: "4:00 PM - 6:00 PM",
    name: "Garth Brooks Tribute",
    genre: "Classic Country",
  },
  {
    image: "/images/band-active.jpg",
    date: "Tue, Feb 25",
    startHour: 18,
    startMinute: 30,
    endHour: 20,
    endMinute: 30,
    displayTime: "6:30 PM - 8:30 PM",
    name: "Neon Moon Riders",
    genre: "90s Country & Honky Tonk",
    upNext: "Fiddle Solo",
  },
  {
    image: "/images/band-lowplace.jpg",
    date: "Tue, Feb 25",
    startHour: 21,
    startMinute: 0,
    endHour: 23,
    endMinute: 0,
    displayTime: "9:00 PM - 11:00 PM",
    name: "The Low Place Band",
    genre: "Modern Hits & Originals",
  },
  {
    image: "/images/band-heroes.jpg",
    date: "Tue, Feb 25",
    startHour: 23,
    startMinute: 30,
    endHour: 27,
    endMinute: 0,
    displayTime: "11:30 PM - Close",
    name: "Honky Tonk Heroes",
    genre: "Party Anthems",
  },
];

const rooftopShows: LineupShow[] = [
  {
    image: "/images/band-heroes.jpg",
    date: "Tue, Feb 25",
    startHour: 17,
    startMinute: 0,
    endHour: 19,
    endMinute: 0,
    displayTime: "5:00 PM - 7:00 PM",
    name: "Sunset Serenaders",
    genre: "Acoustic Country",
  },
  {
    image: "/images/band-tribute.jpg",
    date: "Tue, Feb 25",
    startHour: 19,
    startMinute: 30,
    endHour: 21,
    endMinute: 30,
    displayTime: "7:30 PM - 9:30 PM",
    name: "Whiskey River Duo",
    genre: "Outlaw Country",
    upNext: "Steel Guitar Jam",
  },
  {
    image: "/images/band-lowplace.jpg",
    date: "Tue, Feb 25",
    startHour: 22,
    startMinute: 0,
    endHour: 24,
    endMinute: 0,
    displayTime: "10:00 PM - 12:00 AM",
    name: "The Rooftop Ramblers",
    genre: "Americana & Folk",
  },
  {
    image: "/images/band-active.jpg",
    date: "Wed, Feb 26",
    startHour: 24,
    startMinute: 30,
    endHour: 27,
    endMinute: 0,
    displayTime: "12:30 AM - Close",
    name: "Late Night Lone Stars",
    genre: "Texas Country",
  },
];

function getShowStatus(show: LineupShow, now: Date) {
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();
  const currentTime = currentHour * 60 + currentMinute;

  const startTime = show.startHour * 60 + show.startMinute;
  const endTime = show.endHour * 60 + show.endMinute;

  if (currentTime >= startTime && currentTime < endTime) return "live";
  if (currentTime >= endTime) return "past";
  return "upcoming";
}

function LineupCard({
  show,
  status,
}: {
  show: LineupShow;
  status: "live" | "past" | "upcoming";
}) {
  const { image, date, displayTime, name, genre, upNext } = show;
  const isLive = status === "live";
  const isPast = status === "past";

  if (isLive) {
    return (
      <div className="relative -my-4 flex flex-col overflow-hidden rounded-xl border-2 border-honky-red bg-[#2c2c2c] shadow-[0_0_20px_-10px_rgba(0,0,0,0.5)]">
        {/* Image */}
        <div className="relative h-56">
          <Image src={image} alt={name} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2c2c2c] to-transparent" />
        </div>

        {/* Live Now badge */}
        <div className="absolute top-4 right-4 flex items-center gap-1 rounded-full bg-honky-red px-3 py-1 shadow-lg">
          <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
          <span className="text-xs font-semibold tracking-wider text-white uppercase">
            Live Now
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-6">
          <div className="mb-3 flex items-center gap-2">
            <Clock className="h-3 w-3 shrink-0 text-honky-teal" />
            <span className="font-mono text-sm font-bold text-honky-teal">
              {date} &middot; {displayTime}
            </span>
          </div>
          <h4 className="mb-2 font-heading text-2xl font-black text-white">
            {name}
          </h4>
          <p className="text-sm text-white/60">{genre}</p>
          {upNext && (
            <div className="mt-4 border-t border-white/10 pt-4">
              <span className="text-xs tracking-[1.2px] text-white/40 uppercase">
                Up Next: <span className="text-white">{upNext}</span>
              </span>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`group/card relative flex flex-col overflow-hidden rounded-xl border border-honky-border-subtle bg-[#2c2c2c] shadow-[0_0_20px_-10px_rgba(0,0,0,0.5)] ${isPast ? "opacity-60" : "transition-all duration-300 hover:border-white/20"}`}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image src={image} alt={name} fill className="object-cover" />
        {isPast ? (
          <>
            <div className="absolute inset-0 bg-white mix-blend-saturation" />
            <div className="absolute inset-0 bg-black/40" />
          </>
        ) : (
          <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover/card:bg-black/10" />
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex items-center gap-2">
          <Clock className="h-3 w-3 shrink-0 text-white/60" />
          <span
            className={`font-mono text-sm ${
              isPast
                ? "font-normal text-white/60"
                : "font-bold text-honky-teal"
            }`}
          >
            {date} &middot; {displayTime}
          </span>
        </div>
        <h4 className="mb-1 font-heading text-xl font-bold text-white">
          {name}
        </h4>
        <p
          className={`text-sm ${isPast ? "text-white/40" : "text-white/50"}`}
        >
          {genre}
        </p>
      </div>
    </div>
  );
}

function ShowGrid({ shows }: { shows: LineupShow[] }) {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 60_000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1 items-center gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {shows.map((show) => (
        <LineupCard
          key={show.name}
          show={show}
          status={getShowStatus(show, now)}
        />
      ))}
    </div>
  );
}

export function LineupSection() {
  return (
    <section className="mx-auto max-w-[1280px] px-8 py-20">
      <Tabs defaultValue="main-stage" className="gap-0">
        {/* Section header */}
        <div className="flex items-end justify-between border-b border-white/10 pb-6">
          <div className="flex flex-col gap-2">
            <h3 className="font-heading text-lg font-bold tracking-[1.8px] text-honky-teal uppercase">
              Tonight&apos;s Lineup
            </h3>
            <h2 className="font-heading text-5xl font-black tracking-tight uppercase">
              <span className="text-white">Who&apos;s </span>
              <span className="neon-text font-heading" data-neon="Playing">Playing</span>
            </h2>
          </div>

          {/* Tabs */}
          <TabsList className="hidden h-auto rounded-lg border border-white/10 bg-white/5 p-[5px] backdrop-blur-sm sm:inline-flex">
            <TabsTrigger
              value="main-stage"
              className="min-w-[160px] rounded border-0 px-9 py-3 text-sm font-semibold tracking-wider uppercase transition-all data-[state=active]:bg-honky-red data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=inactive]:text-white/60 data-[state=inactive]:hover:text-white/80 dark:data-[state=active]:bg-honky-red dark:data-[state=active]:text-white dark:data-[state=active]:border-0"
            >
              Main Stage
            </TabsTrigger>
            <TabsTrigger
              value="rooftop"
              className="min-w-[160px] rounded border-0 px-9 py-3 text-sm font-semibold tracking-wider uppercase transition-all data-[state=active]:bg-honky-red data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=inactive]:text-white/60 data-[state=inactive]:hover:text-white/80 dark:data-[state=active]:bg-honky-red dark:data-[state=active]:text-white dark:data-[state=active]:border-0"
            >
              Rooftop
            </TabsTrigger>
          </TabsList>
        </div>

        {/* Main Stage content */}
        <TabsContent value="main-stage" className="mt-12">
          <ShowGrid shows={mainStageShows} />
        </TabsContent>

        {/* Rooftop content */}
        <TabsContent value="rooftop" className="mt-12">
          <ShowGrid shows={rooftopShows} />
        </TabsContent>
      </Tabs>
    </section>
  );
}
