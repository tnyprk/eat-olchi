import { cateringConfig } from "../../data/cateringData";

const DEFAULT_EVENT_TYPES = [
  "Corporate Lunch",
  "Team Meeting",
  "Office Party",
  "Wedding / Reception",
  "Birthday Party",
  "School / Nonprofit Event",
  "Other",
];

function getMinDate(leadTimeHours) {
  return new Date(Date.now() + leadTimeHours * 3600000).toISOString().split("T")[0];
}

export default function EventDetailsStep({ data, onChange }) {
  const { leadTimeHours, guestCountRanges } = cateringConfig.policies;
  const eventTypes = cateringConfig.policies.eventTypes ?? DEFAULT_EVENT_TYPES;
  const minDate = getMinDate(leadTimeHours);

  function update(field, value) {
    onChange({ ...data, [field]: value });
  }

  return (
    <div className="space-y-5">
      <h2 className="text-olchi-red tracking-wider font-semibold uppercase text-sm">
        Step 1 — Event Details
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-olchi-text mb-1">Name *</label>
          <input
            type="text"
            value={data.name ?? ""}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Your name"
            className="w-full border border-olchi-rule rounded-lg px-3 py-2 text-olchi-text bg-white/70 focus:outline-none focus:border-olchi-red"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-olchi-text mb-1">Email *</label>
          <input
            type="email"
            value={data.email ?? ""}
            onChange={(e) => update("email", e.target.value)}
            placeholder="you@example.com"
            className="w-full border border-olchi-rule rounded-lg px-3 py-2 text-olchi-text bg-white/70 focus:outline-none focus:border-olchi-red"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-olchi-text mb-1">Phone *</label>
          <input
            type="tel"
            value={data.phone ?? ""}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="(510) 555-1234"
            className="w-full border border-olchi-rule rounded-lg px-3 py-2 text-olchi-text bg-white/70 focus:outline-none focus:border-olchi-red"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-olchi-text mb-1">Event Type *</label>
          <select
            value={data.eventType ?? ""}
            onChange={(e) => update("eventType", e.target.value)}
            className="w-full border border-olchi-rule rounded-lg px-3 py-2 text-olchi-text bg-white/70 focus:outline-none focus:border-olchi-red"
          >
            <option value="">Select event type…</option>
            {eventTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-olchi-text mb-1">Event Date *</label>
          <input
            type="date"
            value={data.eventDate ?? ""}
            min={minDate}
            onChange={(e) => update("eventDate", e.target.value)}
            className="w-full border border-olchi-rule rounded-lg px-3 py-2 text-olchi-text bg-white/70 focus:outline-none focus:border-olchi-red"
          />
          <p className="text-xs text-olchi-muted mt-1">
            Orders require {leadTimeHours}h advance notice
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-olchi-text mb-1">Event Time *</label>
          <input
            type="time"
            value={data.eventTime ?? ""}
            onChange={(e) => update("eventTime", e.target.value)}
            className="w-full border border-olchi-rule rounded-lg px-3 py-2 text-olchi-text bg-white/70 focus:outline-none focus:border-olchi-red"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-olchi-text mb-1">Guest Count *</label>
          <select
            value={data.guestRangeIndex ?? ""}
            onChange={(e) => update("guestRangeIndex", e.target.value === "" ? "" : parseInt(e.target.value))}
            className="w-full border border-olchi-rule rounded-lg px-3 py-2 text-olchi-text bg-white/70 focus:outline-none focus:border-olchi-red"
          >
            <option value="">Select guest count…</option>
            {guestCountRanges.map((r, i) => (
              <option key={i} value={i}>{r.label}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
