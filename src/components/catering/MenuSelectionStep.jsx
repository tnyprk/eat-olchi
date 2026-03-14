import { cateringConfig } from "../../data/cateringData";
import CateringMenuItem from "./CateringMenuItem";

function calcItemSubtotal(item, quantity, estimatedCount) {
  if (item.pricingUnit === "per_person") return item.price * estimatedCount;
  if (item.pricingUnit === "per_tray")
    return item.price * Math.ceil(estimatedCount / item.servesUpTo) * quantity;
  if (item.pricingUnit === "flat") return item.price;
  return 0;
}

export default function MenuSelectionStep({ data, onChange, estimatedCount }) {
  const { sections } = cateringConfig.menu;

  function toggleItem(itemId) {
    const selected = { ...(data.selected ?? {}) };
    if (selected[itemId]) {
      delete selected[itemId];
    } else {
      selected[itemId] = 1;
    }
    onChange({ ...data, selected });
  }

  function setQuantity(itemId, qty) {
    const selected = { ...(data.selected ?? {}), [itemId]: qty };
    onChange({ ...data, selected });
  }

  const selected = data.selected ?? {};

  // Running subtotal
  let subtotal = 0;
  for (const section of sections) {
    for (const item of section.items) {
      if (selected[item.id]) {
        subtotal += calcItemSubtotal(item, selected[item.id], estimatedCount);
      }
    }
  }

  return (
    <div className="space-y-6">
      <h2 className="text-olchi-red tracking-wider font-semibold uppercase text-sm">
        Step 2 — Menu Selection
      </h2>

      {sections.map((section) => (
        <div key={section.id}>
          <div className="flex items-baseline gap-2 mb-3">
            <h3 className="font-semibold text-olchi-text">{section.name}</h3>
            {section.nameLocalized && (
              <span className="text-olchi-muted text-sm">{section.nameLocalized}</span>
            )}
          </div>
          <div className="space-y-2">
            {section.items.map((item) => (
              <CateringMenuItem
                key={item.id}
                item={item}
                selected={!!selected[item.id]}
                quantity={selected[item.id] ?? 1}
                onToggle={toggleItem}
                onQuantity={setQuantity}
              />
            ))}
          </div>
        </div>
      ))}

      {/* Running subtotal */}
      <div className="sticky bottom-0 bg-[#F8EEDA] border-t border-olchi-rule pt-4 pb-2">
        <div className="flex justify-between items-center">
          <span className="text-sm text-olchi-muted">
            Estimated subtotal
            {estimatedCount > 0 && (
              <span className="ml-1">({estimatedCount} guests)</span>
            )}
          </span>
          <span className="text-lg font-semibold text-olchi-red">
            ${subtotal.toFixed(2)}
          </span>
        </div>
        <p className="text-xs text-olchi-muted mt-1">
          Final pricing confirmed after order review
        </p>
      </div>
    </div>
  );
}
