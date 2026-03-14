import { Link } from "react-router-dom";
import { cateringConfig } from "../../data/cateringData";
import { storeData } from "../../data/storeData";

function generateOrderId() {
  const date = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  const suffix = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `OLCHI-${date}-${suffix}`;
}

export default function ConfirmationView({ orderId }) {
  const { confirmationMessage } = cateringConfig.notifications;

  return (
    <div className="text-center space-y-6 py-8">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-olchi-text mb-1">Order Request Received</h2>
        <p className="text-olchi-muted text-sm">Order ID: <span className="font-mono font-medium text-olchi-text">{orderId}</span></p>
      </div>

      {confirmationMessage && (
        <div className="bg-white/60 border border-olchi-rule rounded-lg p-5 text-olchi-text max-w-md mx-auto">
          <p>{confirmationMessage}</p>
        </div>
      )}

      <div className="text-sm text-olchi-muted space-y-1">
        <p>Questions? Reach us at:</p>
        <a href={`mailto:${storeData.email}`} className="block text-olchi-red hover:underline">
          {storeData.email}
        </a>
        <a href={`tel:${storeData.phone}`} className="block text-olchi-red hover:underline">
          ({storeData.phone.slice(0, 3)}) {storeData.phone.slice(3, 6)}-{storeData.phone.slice(6)}
        </a>
      </div>

      <Link
        to="/"
        className="inline-block mt-4 border border-olchi-rule rounded-lg px-6 py-2.5 text-sm font-medium text-olchi-text hover:border-olchi-red hover:text-olchi-red transition-colors"
      >
        ← Return to main site
      </Link>
    </div>
  );
}
