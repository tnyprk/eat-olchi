/**
 * Display helpers for storeData values.
 * All accept raw data formats (digits-only phone, 24h time, etc.)
 * and return human-readable strings.
 */

/** "(510) 283-5007" */
export function formatPhone(digits) {
  const d = digits.replace(/\D/g, "");
  if (d.length !== 10) return digits;
  return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
}

/** "11:30" → "11:30 AM", "21:00" → "9 PM", "15:00" → "3 PM" */
export function formatTime(time24) {
  const [h, m] = time24.split(":").map(Number);
  const period = h >= 12 ? "PM" : "AM";
  const h12 = h % 12 || 12;
  return m === 0 ? `${h12} ${period}` : `${h12}:${String(m).padStart(2, "0")} ${period}`;
}

/** dayObj → "11:30 AM - 3 PM, 4:30 PM - 9 PM" or "Closed" */
export function formatDayHours(dayObj) {
  if (!dayObj) return "Closed";
  if (dayObj.break) {
    return `${formatTime(dayObj.open)} - ${formatTime(dayObj.break.start)}, ${formatTime(dayObj.break.end)} - ${formatTime(dayObj.close)}`;
  }
  return `${formatTime(dayObj.open)} - ${formatTime(dayObj.close)}`;
}

const DAY_ORDER = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
const DAY_SHORT = { monday: "Mon", tuesday: "Tue", wednesday: "Wed", thursday: "Thu", friday: "Fri", saturday: "Sat", sunday: "Sun" };

/** Groups consecutive days with identical hours into labeled ranges. */
export function groupHours(hoursObj) {
  const groups = [];
  let current = null;

  for (const day of DAY_ORDER) {
    const dayHours = hoursObj[day];
    const formatted = formatDayHours(dayHours);

    if (current && current.formatted === formatted) {
      current.endDay = day;
    } else {
      if (current) groups.push(current);
      current = { startDay: day, endDay: day, formatted, hours: dayHours };
    }
  }
  if (current) groups.push(current);

  return groups.map((g) => {
    const label = g.startDay === g.endDay
      ? DAY_SHORT[g.startDay]
      : `${DAY_SHORT[g.startDay]} - ${DAY_SHORT[g.endDay]}`;
    return { label, formatted: g.formatted, hours: g.hours };
  });
}
