function formatPrice(item) {
  if (item.pricingUnit === "per_person") return `$${item.price}/person`;
  if (item.pricingUnit === "per_tray") return `$${item.price}/tray (serves up to ${item.servesUpTo})`;
  if (item.pricingUnit === "flat") return `$${item.price} flat`;
  return `$${item.price}`;
}

function FlagIcons({ flags }) {
  if (!flags) return null;
  return (
    <span className="flex gap-1 ml-1">
      {flags.isSpicy && <span title="Spicy">🌶️</span>}
      {flags.isVegetarian && <span title="Vegetarian">🌱</span>}
      {flags.isRecommended && <span title="Recommended">⭐</span>}
    </span>
  );
}

export default function CateringMenuItem({ item, selected, quantity, onToggle, onQuantity }) {
  return (
    <div
      className={`border rounded-lg p-4 transition-all cursor-pointer ${
        selected
          ? "border-olchi-red bg-olchi-red/5"
          : "border-olchi-rule bg-white/60 hover:border-olchi-muted"
      }`}
      onClick={() => onToggle(item.id)}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-start gap-3 min-w-0">
          <input
            type="checkbox"
            checked={selected}
            onChange={() => onToggle(item.id)}
            onClick={(e) => e.stopPropagation()}
            className="mt-1 w-4 h-4 accent-olchi-red flex-shrink-0"
          />
          <div className="min-w-0">
            <div className="flex items-center gap-1 flex-wrap">
              <span className="font-medium text-olchi-text">{item.name}</span>
              {item.nameLocalized && (
                <span className="text-olchi-muted text-sm">{item.nameLocalized}</span>
              )}
              <FlagIcons flags={item.flags} />
            </div>
            {item.description && (
              <p className="text-sm text-olchi-muted mt-0.5">{item.description}</p>
            )}
            <p className="text-sm font-semibold text-olchi-red mt-1">{formatPrice(item)}</p>
          </div>
        </div>

        {selected && item.pricingUnit === "per_tray" && (
          <div
            className="flex items-center gap-2 flex-shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => onQuantity(item.id, Math.max(1, quantity - 1))}
              className="w-7 h-7 rounded-full border border-olchi-rule flex items-center justify-center text-olchi-text hover:border-olchi-red hover:text-olchi-red"
            >
              −
            </button>
            <span className="text-sm font-medium w-4 text-center">{quantity}</span>
            <button
              onClick={() => onQuantity(item.id, quantity + 1)}
              className="w-7 h-7 rounded-full border border-olchi-rule flex items-center justify-center text-olchi-text hover:border-olchi-red hover:text-olchi-red"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
