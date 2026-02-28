export interface ScheduleEntry {
  Date: string;
  "Date Time": string;
  "Time Label": string;
  Name: string;
  Venue: string;
}

export interface ShowSlot {
  timeLabel: string;
  dateTime: Date;
  artists: { name: string; venue: string }[];
}

export interface DaySchedule {
  dateKey: string;
  date: Date;
  slots: ShowSlot[];
}

export type VenueFilter = "all" | "Honky Tonk" | "Oasis";

export function parseDate(dateTimeStr: string): Date {
  const [datePart, timePart] = dateTimeStr.split(" ");
  const [month, day, year] = datePart.split("/").map(Number);
  const [hours, minutes] = (timePart || "0:0").split(":").map(Number);
  return new Date(year, month - 1, day, hours, minutes);
}

export function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export function isShowLive(slot: ShowSlot, now: Date): boolean {
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

export function getSlotsForDay(entries: ScheduleEntry[], targetDate: Date): ShowSlot[] {
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

export function findNearestDay(entries: ScheduleEntry[]): Date | null {
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

  for (const d of sortedDates) {
    if (d >= today) return d;
  }
  return sortedDates[sortedDates.length - 1] ?? null;
}

export function processSchedule(entries: ScheduleEntry[]): DaySchedule[] {
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

  const days: DaySchedule[] = [];
  for (const [dateKey, slotMap] of dayMap) {
    const slots: ShowSlot[] = [];
    for (const [timeLabel, data] of slotMap) {
      slots.push({ timeLabel, dateTime: data.dateTime, artists: data.artists });
    }
    slots.sort((a, b) => a.dateTime.getTime() - b.dateTime.getTime());

    const firstSlot = slots[0];
    days.push({
      dateKey,
      date: new Date(firstSlot.dateTime.getFullYear(), firstSlot.dateTime.getMonth(), firstSlot.dateTime.getDate()),
      slots,
    });
  }

  days.sort((a, b) => a.date.getTime() - b.date.getTime());
  return days;
}

export function formatDayOfWeek(date: Date): string {
  return date.toLocaleDateString("en-US", { weekday: "short" }).toUpperCase();
}

export function formatMonthDay(date: Date): string {
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

export function getDayNumber(date: Date): number {
  return date.getDate();
}
