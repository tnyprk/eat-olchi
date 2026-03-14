import { useState } from "react";
import { cateringConfig } from "../../data/cateringData";
import { storeData } from "../../data/storeData";

const { pickup, delivery } = cateringConfig.fulfillment;

export default function FulfillmentStep({ data, onChange }) {
  const bothEnabled = pickup.enabled && delivery.enabled;

  // Default to pickup if both enabled and no choice yet
  const method = data.method ?? (pickup.enabled ? "pickup" : "delivery");

  function update(field, value) {
    onChange({ ...data, [field]: value });
  }

  function setMethod(m) {
    onChange({ ...data, method: m });
  }

  return (
    <div className="space-y-5">
      <h2 className="text-olchi-red tracking-wider font-semibold uppercase text-sm">
        Step 3 — Fulfillment
      </h2>

      {bothEnabled && (
        <div className="flex gap-2">
          <button
            onClick={() => setMethod("pickup")}
            className={`flex-1 py-2 rounded-lg border font-medium text-sm transition-colors ${
              method === "pickup"
                ? "border-olchi-red bg-olchi-red text-white"
                : "border-olchi-rule text-olchi-text hover:border-olchi-muted"
            }`}
          >
            Pickup
          </button>
          <button
            onClick={() => setMethod("delivery")}
            className={`flex-1 py-2 rounded-lg border font-medium text-sm transition-colors ${
              method === "delivery"
                ? "border-olchi-red bg-olchi-red text-white"
                : "border-olchi-rule text-olchi-text hover:border-olchi-muted"
            }`}
          >
            Delivery
          </button>
        </div>
      )}

      {method === "pickup" && (
        <div className="bg-white/60 border border-olchi-rule rounded-lg p-5 space-y-3">
          <h3 className="font-semibold text-olchi-text">Pickup Location</h3>
          <p className="text-olchi-text">
            {storeData.address.street}<br />
            {storeData.address.city}, {storeData.address.state} {storeData.address.zip}
          </p>
          {pickup.instructions && (
            <p className="text-sm text-olchi-muted">{pickup.instructions}</p>
          )}
        </div>
      )}

      {method === "delivery" && (
        <div className="bg-white/60 border border-olchi-rule rounded-lg p-5 space-y-4">
          <div>
            <h3 className="font-semibold text-olchi-text mb-1">Delivery Address</h3>
            <p className="text-xs text-olchi-muted mb-3">
              We deliver within {delivery.radiusMiles} miles of El Sobrante.{" "}
              {delivery.instructions}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3">
            <div>
              <label className="block text-sm font-medium text-olchi-text mb-1">Street *</label>
              <input
                type="text"
                value={data.street ?? ""}
                onChange={(e) => update("street", e.target.value)}
                placeholder="123 Main St"
                className="w-full border border-olchi-rule rounded-lg px-3 py-2 text-olchi-text bg-white focus:outline-none focus:border-olchi-red"
              />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-olchi-text mb-1">City *</label>
                <input
                  type="text"
                  value={data.city ?? ""}
                  onChange={(e) => update("city", e.target.value)}
                  placeholder="El Sobrante"
                  className="w-full border border-olchi-rule rounded-lg px-3 py-2 text-olchi-text bg-white focus:outline-none focus:border-olchi-red"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-olchi-text mb-1">State *</label>
                <input
                  type="text"
                  value={data.state ?? ""}
                  onChange={(e) => update("state", e.target.value)}
                  placeholder="CA"
                  maxLength={2}
                  className="w-full border border-olchi-rule rounded-lg px-3 py-2 text-olchi-text bg-white focus:outline-none focus:border-olchi-red"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-olchi-text mb-1">ZIP *</label>
                <input
                  type="text"
                  value={data.zip ?? ""}
                  onChange={(e) => update("zip", e.target.value)}
                  placeholder="94803"
                  className="w-full border border-olchi-rule rounded-lg px-3 py-2 text-olchi-text bg-white focus:outline-none focus:border-olchi-red"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm border-t border-olchi-rule pt-3">
            <span className="text-olchi-muted">Delivery fee</span>
            <span className="font-medium text-olchi-text">
              ${delivery.fee.amount}
              {delivery.fee.waiveAbove != null && (
                <span className="text-olchi-muted font-normal ml-1">
                  (waived on orders ${delivery.fee.waiveAbove}+)
                </span>
              )}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
