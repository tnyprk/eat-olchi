import { useState } from "react";
import { cateringConfig } from "../data/cateringData";
import ProgressBar from "../components/catering/ProgressBar";
import EventDetailsStep from "../components/catering/EventDetailsStep";
import MenuSelectionStep from "../components/catering/MenuSelectionStep";
import FulfillmentStep from "../components/catering/FulfillmentStep";
import ReviewStep from "../components/catering/ReviewStep";
import ConfirmationView from "../components/catering/ConfirmationView";
import { MenuFooter } from "../components/MenuFooter";

const STEPS = ["details", "menu", "fulfillment", "review"];

function generateOrderId() {
  const date = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  const suffix = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `OLCHI-${date}-${suffix}`;
}

export default function Catering() {
  const [step, setStep] = useState(0);
  const [orderData, setOrderData] = useState({ event: {}, items: {}, fulfillment: {} });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [orderId] = useState(() => generateOrderId());

  const { branding } = cateringConfig;
  const guestRangeIndex = orderData.event?.guestRangeIndex;
  const estimatedCount =
    guestRangeIndex !== "" && guestRangeIndex != null
      ? cateringConfig.policies.guestCountRanges[guestRangeIndex]?.estimatedCount ?? 0
      : 0;

  function updateEvent(data) {
    setOrderData((prev) => ({ ...prev, event: data }));
  }

  function updateItems(data) {
    setOrderData((prev) => ({ ...prev, items: data }));
  }

  function updateFulfillment(data) {
    setOrderData((prev) => ({ ...prev, fulfillment: data }));
  }

  async function handleSubmit() {
    setSubmitting(true);
    // Stub: log order data (Cloudflare Worker deferred to next session)
    console.log("[Catering] Order submitted:", { orderId, orderData });
    // Simulate network delay
    await new Promise((r) => setTimeout(r, 800));
    setSubmitting(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#F8EEDA] flex flex-col">
        <div className="flex-1 px-4 md:px-12 py-10 max-w-2xl mx-auto w-full">
          <ConfirmationView orderId={orderId} />
        </div>
        <div className="px-4 md:px-12 pb-8">
          <MenuFooter />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8EEDA] flex flex-col">
      <div className="flex-1 px-4 md:px-12 py-6 md:py-10">
        {/* Hero */}
        <div className="text-center mb-10">
          <h1 className="text-[#B13613] tracking-[0.3em] mb-2">CATERING</h1>
          {branding?.headline && (
            <p className="text-xl font-semibold text-olchi-text">{branding.headline}</p>
          )}
          {branding?.subheadline && (
            <p className="text-olchi-muted mt-1 max-w-lg mx-auto">{branding.subheadline}</p>
          )}
        </div>

        {/* Form card */}
        <div className="max-w-2xl mx-auto">
          <ProgressBar currentStep={step} />

          <div className="bg-white/40 border border-olchi-rule rounded-xl p-6 md:p-8">
            {step === 0 && (
              <EventDetailsStep data={orderData.event} onChange={updateEvent} />
            )}
            {step === 1 && (
              <MenuSelectionStep
                data={orderData.items}
                onChange={updateItems}
                estimatedCount={estimatedCount}
              />
            )}
            {step === 2 && (
              <FulfillmentStep data={orderData.fulfillment} onChange={updateFulfillment} />
            )}
            {step === 3 && (
              <ReviewStep
                orderData={orderData}
                onSubmit={handleSubmit}
                submitting={submitting}
              />
            )}

            {/* Navigation */}
            {step < 3 && (
              <div className="flex justify-between mt-8">
                <button
                  onClick={() => setStep((s) => Math.max(0, s - 1))}
                  disabled={step === 0}
                  className="px-5 py-2 border border-olchi-rule rounded-lg text-sm text-olchi-text hover:border-olchi-muted transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep((s) => Math.min(STEPS.length - 1, s + 1))}
                  className="px-6 py-2 bg-olchi-red text-white rounded-lg text-sm font-medium hover:bg-[#8a2a0f] transition-colors"
                >
                  Continue
                </button>
              </div>
            )}

            {step === 3 && (
              <div className="flex justify-start mt-4">
                <button
                  onClick={() => setStep(2)}
                  className="px-5 py-2 border border-olchi-rule rounded-lg text-sm text-olchi-text hover:border-olchi-muted transition-colors"
                >
                  Back
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="px-4 md:px-12 pb-8">
        <MenuFooter />
      </div>
    </div>
  );
}
