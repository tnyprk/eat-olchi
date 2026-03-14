const STEP_LABELS = ["Event Details", "Menu", "Fulfillment", "Review"];

export default function ProgressBar({ currentStep }) {
  return (
    <div className="flex items-center justify-center gap-0 mb-8">
      {STEP_LABELS.map((label, i) => {
        const isComplete = i < currentStep;
        const isActive = i === currentStep;
        return (
          <div key={i} className="flex items-center">
            <div className="flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${
                  isComplete
                    ? "bg-olchi-red text-white"
                    : isActive
                    ? "bg-olchi-red text-white ring-4 ring-olchi-red/20"
                    : "bg-olchi-rule text-olchi-muted"
                }`}
              >
                {isComplete ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  i + 1
                )}
              </div>
              <span
                className={`mt-1 text-xs font-medium hidden sm:block ${
                  isActive ? "text-olchi-red" : isComplete ? "text-olchi-text" : "text-olchi-muted"
                }`}
              >
                {label}
              </span>
            </div>
            {i < STEP_LABELS.length - 1 && (
              <div
                className={`h-0.5 w-12 sm:w-20 mx-1 transition-colors ${
                  i < currentStep ? "bg-olchi-red" : "bg-olchi-rule"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
