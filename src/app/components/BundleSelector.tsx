import { useState } from "react";

const BUNDLE_ITEMS = [
  {
    id: "pillow",
    title: "Signature\nCooling Pillow",
    subtitle: "Includes 2 pillows",
    img: "/product-pillow.png",
    icon: "/icon-cloud.png",
  },
  {
    id: "mask",
    title: "Mulberry Silk\nSleep Mask",
    subtitle: "Naturally soft silk",
    img: "/product-mask.png",
    icon: "/icon-moon.png",
  },
  {
    id: "mist",
    title: "Lavender Sleep\nMist",
    subtitle: "French lavender blend",
    img: "/product-mist.png",
    icon: "/icon-leaf.png",
  },
];

export function BundleSelector() {
  const [checked, setChecked] = useState(true);

  return (
    <section
      id="bundle-selector"
      className="flex flex-col justify-center py-16 px-6"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="px-3 py-1 rounded-full" style={{ backgroundColor: "rgba(11,31,58,0.06)" }}>
            <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", color: "#0B1F3A" }}>SCREEN A</span>
          </div>
          <div style={{ width: "24px", height: "1px", backgroundColor: "#0B1F3A", opacity: 0.3 }} />
          <span style={{ fontSize: "11px", fontWeight: 500, color: "rgba(11,31,58,0.5)", letterSpacing: "0.08em" }}>PDP BUNDLE SELECTOR</span>
        </div>

        <h2
          className="mb-2"
          style={{ fontSize: "clamp(20px, 2.5vw, 32px)", fontWeight: 300, color: "#0B1F3A", lineHeight: 1.2, letterSpacing: "-0.02em" }}
        >
          Screen A —{" "}
          <span style={{ fontWeight: 600 }}>PDP Bundle Selector</span>
        </h2>
        <div className="mb-8" style={{ width: "40px", height: "3px", borderRadius: "2px", backgroundColor: "#C9A96E" }} />

        <div className="flex flex-col lg:flex-row gap-6 items-stretch">
          {/* ===== CODED SCREEN A CARD ===== */}
          <div
            className="rounded-[16px] overflow-hidden w-full lg:max-w-[480px]"
            style={{
              backgroundColor: "#F0F2F5",
              boxShadow: "0 4px 40px rgba(11,31,58,0.08)",
              border: "1px solid rgba(11,31,58,0.06)",
            }}
          >
            {/* Inner white card */}
            <div
              className="m-4 rounded-[12px] p-6 pb-5"
              style={{ backgroundColor: "#FFFFFF" }}
            >
              {/* Header: INCLUDED badge + title + price */}
              <div className="flex items-start justify-between mb-1">
                <div>
                  {/* INCLUDED badge */}
                  <div
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md mb-3"
                    style={{ backgroundColor: "#EDF1F7", border: "1px solid #DDE3ED" }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 12 20 22 4 22 4 12" />
                      <rect x="2" y="7" width="20" height="5" />
                      <line x1="12" y1="22" x2="12" y2="7" />
                      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
                      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
                    </svg>
                    <span style={{ fontSize: "11px", fontWeight: 700, color: "#0B1F3A", letterSpacing: "0.08em" }}>INCLUDED</span>
                  </div>
                  <h3 style={{ fontSize: "22px", fontWeight: 800, color: "#0B1F3A", lineHeight: 1.15, marginBottom: "5px" }}>
                    Sleep Essential Bundle
                  </h3>
                  <p style={{ fontSize: "14px", fontWeight: 400, color: "#374151", lineHeight: 1.5, maxWidth: "340px", marginTop: "4px" }}>
                    A curated set of sleep essentials designed to complement your Puffy Monarch.
                  </p>
                </div>
                <div className="text-right shrink-0 ml-4 pt-8">
                  <div style={{ fontSize: "28px", fontWeight: 800, color: "#1047A9", lineHeight: 1 }}>$249</div>
                </div>
              </div>

              {/* Product grid */}
              <div
                className="grid grid-cols-3 mt-4 mb-4 rounded-[12px] overflow-hidden"
                style={{ border: "1px solid #E5E8ED" }}
              >
                {BUNDLE_ITEMS.map((item, idx) => (
                  <div
                    key={item.id}
                    className="flex flex-col items-center text-center px-3 py-4"
                    style={{
                      borderRight: idx < 2 ? "1px solid #E5E8ED" : "none",
                      backgroundColor: "#FFFFFF",
                    }}
                  >
                    {/* Product image */}
                    <div className="w-full h-[90px] flex items-center justify-center mb-3">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    {/* Icon */}
                    <div className="w-8 h-8 mb-2 flex items-center justify-center">
                      <img src={item.icon} alt="" className="w-8 h-8 object-contain" />
                    </div>
                    {/* Title */}
                    <h4
                      className="mb-1"
                      style={{ fontSize: "13px", fontWeight: 700, color: "#0B1F3A", lineHeight: 1.25, whiteSpace: "pre-line" }}
                    >
                      {item.title}
                    </h4>
                    {/* Subtitle */}
                    <p style={{ fontSize: "11px", fontWeight: 400, color: "#8891A0" }}>
                      {item.subtitle}
                    </p>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div style={{ height: "1px", backgroundColor: "#E5E8ED", margin: "0 -24px" }} />

              {/* Checkbox section */}
              <div
                className="flex items-center gap-3 mt-4 mb-4 rounded-[10px] px-4 py-3 cursor-pointer select-none transition-colors"
                style={{ backgroundColor: "#F0F2F5" }}
                onClick={() => setChecked(!checked)}
              >
                <div
                  className="w-6 h-6 rounded-md flex items-center justify-center shrink-0 transition-all duration-200"
                  style={{
                    backgroundColor: checked ? "#0B1F3A" : "#FFFFFF",
                    border: checked ? "2px solid #0B1F3A" : "2px solid #C0C7CF",
                  }}
                >
                  {checked && (
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8L6.5 11.5L13 4.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
                <div>
                  <div style={{ fontSize: "15px", fontWeight: 700, color: "#0B1F3A", marginBottom: "2px" }}>
                    Included with your Monarch
                  </div>
                  <div style={{ fontSize: "13px", fontWeight: 400, color: "#374151" }}>
                    Thoughtfully selected for your sleep setup
                  </div>
                </div>
              </div>

              {/* Trust badges */}
              <div className="flex items-center justify-center mb-4 whitespace-nowrap" style={{ gap: "0px" }}>
                <div className="flex items-center gap-1 px-2">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="1" y="3" width="15" height="13" rx="2" ry="2" />
                    <polyline points="16 8 20 8 23 11 23 16 1 16" />
                    <circle cx="5.5" cy="18.5" r="2.5" />
                    <circle cx="18.5" cy="18.5" r="2.5" />
                  </svg>
                  <span style={{ fontSize: "10px", fontWeight: 500, color: "#374151" }}>Complimentary shipping & returns</span>
                </div>
                <div style={{ width: "1px", height: "10px", backgroundColor: "#D1D5DB" }} />
                <div className="flex items-center gap-1 px-2">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <polyline points="9 11 12 14 22 4" />
                  </svg>
                  <span style={{ fontSize: "10px", fontWeight: 500, color: "#374151" }}>365-Night Sleep Trial</span>
                </div>
                <div style={{ width: "1px", height: "10px", backgroundColor: "#D1D5DB" }} />
                <div className="flex items-center gap-1 px-2">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="7" />
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                  </svg>
                  <span style={{ fontSize: "10px", fontWeight: 500, color: "#374151" }}>Lifetime Warranty</span>
                </div>
              </div>

              {/* CTA Button */}
              <button
                className="w-full rounded-[10px] py-3.5 flex items-center justify-center gap-2 transition-all hover:opacity-90 active:scale-[0.99]"
                style={{ backgroundColor: "#0B1F3A", color: "#FFFFFF" }}
                onClick={() => {
                  const el = document.getElementById("surprise-reveal");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                  }
                  window.dispatchEvent(new CustomEvent("trigger-confetti"));
                }}
              >
                <span style={{ fontSize: "15px", fontWeight: 600, letterSpacing: "0.01em" }}>
                  Add to Cart
                </span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          </div>

          {/* Rationale panel */}
          <div
            className="lg:w-80 rounded-2xl p-5"
            style={{ backgroundColor: "#F7F7F5", border: "1px solid rgba(11,31,58,0.08)" }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-5 h-5 rounded flex items-center justify-center"
                style={{ backgroundColor: "#0B1F3A" }}
              >
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              </div>
              <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", color: "#0B1F3A" }}>
                DESIGN RATIONALE
              </span>
            </div>

            <ul className="space-y-2.5">
              {[
                { bullet: "Premium visual hierarchy", desc: "reinforces bundle importance" },
                { bullet: "Selectable upgrade framing", desc: "increases perceived value" },
                { bullet: "Delayed reward psychology", desc: "creates stronger emotional impact" },
                { bullet: "Luxury-first interaction design", desc: "avoids discount-heavy patterns" },
                { bullet: "Reduced promotional language", desc: "maintains premium positioning" },
                { bullet: "Emotional value anchoring", desc: "strengthens generosity perception" },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <div
                    className="mt-1.5 w-2.5 h-2.5 rounded-full shrink-0"
                    style={{ backgroundColor: "#C9A96E", opacity: 0.8 }}
                  />
                  <span style={{ fontSize: "12px", fontWeight: 400, lineHeight: 1.55, color: "#374151" }}>
                    <span style={{ fontWeight: 600 }}>{item.bullet}</span> {item.desc}
                  </span>
                </li>
              ))}
            </ul>

            {/* Divider */}
            <div className="my-4" style={{ height: "1px", backgroundColor: "rgba(11,31,58,0.1)" }} />

            {/* Interaction Strategy */}
            <div
              className="p-3.5 rounded-lg"
              style={{ backgroundColor: "rgba(11,31,58,0.04)", border: "1px solid rgba(11,31,58,0.08)" }}
            >
              <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", color: "#0B1F3A", marginBottom: "6px" }}>
                Interaction Strategy
              </p>
              <p style={{ fontSize: "12px", fontWeight: 400, lineHeight: 1.55, color: "#6B7280" }}>
                Pre-selected by default while remaining removable for user control.
              </p>
            </div>

            {/* Divider */}
            <div className="my-3" style={{ height: "1px", backgroundColor: "rgba(11,31,58,0.1)" }} />

            {/* Brand Positioning */}
            <div
              className="p-3.5 rounded-lg"
              style={{ backgroundColor: "rgba(201,169,110,0.06)", border: "1px solid rgba(201,169,110,0.2)" }}
            >
              <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", color: "#0B1F3A", marginBottom: "6px" }}>
                Brand Positioning
              </p>
              <p style={{ fontSize: "12px", fontWeight: 400, lineHeight: 1.55, color: "#6B7280" }}>
                The experience intentionally avoids aggressive ecommerce urgency patterns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}