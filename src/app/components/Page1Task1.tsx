export function Page1Task1() {
  return (
    <section
      id="page1"
      className="min-h-screen flex flex-col justify-center py-24 px-6"
      style={{ backgroundColor: "#F7F7F5" }}
    >
      <div className="max-w-5xl mx-auto w-full">

        {/* Page label */}
        <div className="flex items-center gap-3 mb-8">
          <div className="px-3 py-1 rounded-full" style={{ backgroundColor: "rgba(11,31,58,0.07)" }}>
            <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em", color: "#0B1F3A" }}>PAGE 1</span>
          </div>
          <div style={{ width: "24px", height: "1px", backgroundColor: "#0B1F3A", opacity: 0.2 }} />
          <span style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.1em", color: "rgba(11,31,58,0.45)" }}>TASK 1</span>
        </div>

        {/* Title */}
        <h2
          className="mb-3"
          style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 300, color: "#0B1F3A", lineHeight: 1.15, letterSpacing: "-0.025em" }}
        >
          Task 1 —{" "}
          <span style={{ fontWeight: 600 }}>Sleep Bundle UX</span>
        </h2>
        <div className="mb-14" style={{ width: "40px", height: "3px", borderRadius: "2px", backgroundColor: "#C9A96E" }} />

        {/* Context intro */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div
            className="md:col-span-3 rounded-2xl p-7"
            style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(11,31,58,0.07)", boxShadow: "0 2px 16px rgba(11,31,58,0.05)" }}
          >
            <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", color: "rgba(11,31,58,0.4)", marginBottom: "12px" }}>
              CURRENT EXPERIENCE
            </p>
            <p style={{ fontSize: "16px", fontWeight: 400, lineHeight: 1.7, color: "#374151", maxWidth: "640px" }}>
              The Sleep Essentials Bundle is automatically included for free at checkout. Because it arrives passively — without selection or anticipation — users fail to perceive its $249 monetary value and treat it as a standard inclusion rather than a premium gift.
            </p>
          </div>
        </div>

        {/* Research stats row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {[
            { stat: "64%", label: "of users did not recognise the bundle's value during checkout", accent: false },
            { stat: "71%", label: "said surprise gifting would increase perceived brand value", accent: true },
            { stat: "↑ Above", label: "cart abandonment sitting above industry benchmark", accent: false },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-2xl p-6"
              style={{
                backgroundColor: item.accent ? "#0B1F3A" : "#FFFFFF",
                border: `1px solid ${item.accent ? "transparent" : "rgba(11,31,58,0.07)"}`,
                boxShadow: "0 2px 12px rgba(11,31,58,0.05)",
              }}
            >
              <div
                style={{
                  fontSize: "40px",
                  fontWeight: 300,
                  lineHeight: 1,
                  color: item.accent ? "#C9A96E" : "#0B1F3A",
                  letterSpacing: "-0.03em",
                  marginBottom: "10px",
                }}
              >
                {item.stat}
              </div>
              <p style={{ fontSize: "13px", fontWeight: 400, lineHeight: 1.6, color: item.accent ? "rgba(255,255,255,0.7)" : "#6B7280" }}>
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Hypothesis card */}
        <div
          className="rounded-2xl p-7 mb-14"
          style={{
            background: "linear-gradient(135deg, rgba(11,31,58,0.04) 0%, rgba(201,169,110,0.06) 100%)",
            border: "1px solid rgba(201,169,110,0.25)",
          }}
        >
          <div className="flex items-start gap-4">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
              style={{ backgroundColor: "rgba(201,169,110,0.15)", border: "1px solid rgba(201,169,110,0.3)" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            </div>
            <div>
              <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", color: "#C9A96E", marginBottom: "8px" }}>
                EXPERIMENT HYPOTHESIS
              </p>
              <p style={{ fontSize: "15px", fontWeight: 400, lineHeight: 1.75, color: "#374151" }}>
                Transforming the bundle into a selectable premium add-on before revealing it as complimentary may increase perceived value, emotional reward, and luxury perception.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2 label */}
        <div className="flex items-center gap-3 mb-8">
          <div style={{ width: "24px", height: "1px", backgroundColor: "#0B1F3A", opacity: 0.2 }} />
          <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", color: "rgba(11,31,58,0.45)" }}>UX GOALS</span>
          <div style={{ flex: 1, height: "1px", backgroundColor: "#0B1F3A", opacity: 0.08 }} />
        </div>

        {/* Problem + Goal cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Problem Statement */}
          <div
            className="rounded-2xl p-7"
            style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(11,31,58,0.07)", boxShadow: "0 2px 16px rgba(11,31,58,0.05)" }}
          >
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: "rgba(11,31,58,0.06)" }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              </div>
              <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", color: "#0B1F3A" }}>PROBLEM STATEMENT</span>
            </div>
            <p style={{ fontSize: "15px", fontWeight: 400, lineHeight: 1.75, color: "#374151" }}>
              Users mentally process free automatic bundles as standard inclusions rather than premium gifts, reducing perceived generosity and undermining Puffy's luxury brand positioning at the most critical moment in the purchase journey.
            </p>
          </div>

          {/* UX Goal */}
          <div
            className="rounded-2xl p-7"
            style={{ backgroundColor: "#0B1F3A", boxShadow: "0 4px 24px rgba(11,31,58,0.15)" }}
          >
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: "rgba(201,169,110,0.15)" }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", color: "#C9A96E" }}>UX GOAL</span>
            </div>
            <p className="mb-5" style={{ fontSize: "14px", fontWeight: 400, lineHeight: 1.7, color: "rgba(255,255,255,0.75)" }}>
              Design a luxury-first bundle experience that:
            </p>
            <ul className="space-y-3">
              {[
                "Anchors perceived value before reveal",
                "Feels premium instead of promotional",
                "Creates emotional delight post-add-to-cart",
                "Reinforces Puffy's luxury positioning",
                "Avoids urgency or discount-heavy ecommerce patterns",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div
                    className="mt-1.5 w-3.5 h-3.5 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "rgba(201,169,110,0.2)", border: "1px solid rgba(201,169,110,0.35)" }}
                  >
                    <div className="w-1 h-1 rounded-full" style={{ backgroundColor: "#C9A96E" }} />
                  </div>
                  <span style={{ fontSize: "13px", fontWeight: 400, lineHeight: 1.6, color: "rgba(255,255,255,0.78)" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
