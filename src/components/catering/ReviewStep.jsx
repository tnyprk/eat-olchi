import { cateringConfig } from "../../data/cateringData";

function calcItemSubtotal(item, quantity, estimatedCount) {
  if (item.pricingUnit === "per_person") return item.price * estimatedCount;
  if (item.pricingUnit === "per_tray")
    return item.price * Math.ceil(estimatedCount / item.servesUpTo) * quantity;
  if (item.pricingUnit === "flat") return item.price;
  return 0;
}

function formatPriceLabel(item, quantity, estimatedCount) {
  if (item.pricingUnit === "per_person") return `$${item.price} × ${estimatedCount}`;
  if (item.pricingUnit === "per_tray") {
    const trays = Math.ceil(estimatedCount / item.servesUpTo) * quantity;
    return `$${item.price} × ${trays} tray${trays !== 1 ? "s" : ""}`;
  }
  if (item.pricingUnit === "flat") return "flat fee";
  return "";
}

export default function ReviewStep({ orderData, onSubmit, submitting }) {
  const { menu } = cateringConfig;
  const { fulfillment: fulfillConfig } = cateringConfig;
  const selectedItems = orderData.items?.selected ?? {};
  const guestRangeIndex = orderData.event?.guestRangeIndex;
  const range =
    guestRangeIndex !== "" && guestRangeIndex != null
      ? cateringConfig.policies.guestCountRanges[guestRangeIndex]
      : null;
  const estimatedCount = range?.estimatedCount ?? 0;

  const rows = [];
  for (const section of menu.sections) {
    for (const item of section.items) {
      if (selectedItems[item.id]) {
        const quantity = selectedItems[item.id];
        const subtotal = calcItemSubtotal(item, quantity, estimatedCount);
        rows.push({ item, quantity, subtotal });
      }
    }
  }

  const itemSubtotal = rows.reduce((s, r) => s + r.subtotal, 0);

  const method = orderData.fulfillment?.method ?? (fulfillConfig.pickup.enabled ? "pickup" : "delivery");
  const fee = fulfillConfig.delivery.fee;
  const deliveryFee =
    method === "delivery"
      ? fee.waiveAbove != null && itemSubtotal >= fee.waiveAbove
        ? 0
        : fee.amount
      : 0;
  const deliveryWaived = method === "delivery" && fee.waiveAbove != null && itemSubtotal >= fee.waiveAbove;

  const total = itemSubtotal + deliveryFee;

  const { event } = orderData;

  return (
    <div className="space-y-6">
      <h2 className="text-olchi-red tracking-wider font-semibold uppercase text-sm">
        Step 4 — Review & Submit
      </h2>

      {/* Event summary */}
      <div className="bg-white/60 border border-olchi-rule rounded-lg p-4 text-sm space-y-1">
        <p className="font-medium text-olchi-text">{event?.name}</p>
        <p className="text-olchi-muted">{event?.email} · {event?.phone}</p>
        <p className="text-olchi-muted">{event?.eventDate} at {event?.eventTime}</p>
        <p className="text-olchi-muted">{range?.label} · {event?.eventType}</p>
        <p className="text-olchi-muted capitalize">
          {method === "pickup"
            ? "Pickup"
            : `Delivery to ${orderData.fulfillment?.street}, ${orderData.fulfillment?.city}`}
        </p>
      </div>

      {/* Order table */}
      {rows.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-olchi-rule text-olchi-muted">
                <th className="text-left pb-2 font-medium">Item</th>
                <th className="text-right pb-2 font-medium">Unit</th>
                <th className="text-right pb-2 font-medium">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(({ item, quantity, subtotal }) => (
                <tr key={item.id} className="border-b border-olchi-rule/50">
                  <td className="py-2 text-olchi-text">
                    {item.name}
                    {item.nameLocalized && (
                      <span className="text-olchi-muted ml-1">{item.nameLocalized}</span>
                    )}
                  </td>
                  <td className="py-2 text-right text-olchi-muted whitespace-nowrap">
                    {formatPriceLabel(item, quantity, estimatedCount)}
                  </td>
                  <td className="py-2 text-right font-medium text-olchi-text whitespace-nowrap">
                    ${subtotal.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t border-olchi-rule">
                <td colSpan={2} className="pt-3 text-right text-olchi-muted text-sm">Subtotal</td>
                <td className="pt-3 text-right font-medium">${itemSubtotal.toFixed(2)}</td>
              </tr>
              {method === "delivery" && (
                <tr>
                  <td colSpan={2} className="py-1 text-right text-olchi-muted text-sm">Delivery</td>
                  <td className="py-1 text-right font-medium">
                    {deliveryWaived ? (
                      <span className="text-green-600">waived</span>
                    ) : (
                      `$${deliveryFee.toFixed(2)}`
                    )}
                  </td>
                </tr>
              )}
              <tr className="border-t-2 border-olchi-rule">
                <td colSpan={2} className="pt-3 text-right font-semibold text-olchi-text">TOTAL</td>
                <td className="pt-3 text-right font-bold text-olchi-red text-base">
                  ${total.toFixed(2)}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      ) : (
        <p className="text-olchi-muted text-sm">No items selected.</p>
      )}

      <p className="text-xs text-olchi-muted">
        Estimated total — final pricing confirmed after order review.
      </p>

      <button
        onClick={onSubmit}
        disabled={submitting || rows.length === 0}
        className="w-full bg-olchi-red text-white py-3 rounded-lg font-semibold hover:bg-[#8a2a0f] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {submitting ? "Submitting…" : "Submit Order Request"}
      </button>
    </div>
  );
}
