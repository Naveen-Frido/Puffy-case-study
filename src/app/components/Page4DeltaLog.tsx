const DELTA_CARDS = [
  {
    number: "01",
    title: "Baseline Assessment",
    body: "The baseline AI output solved the functional requirements clearly, but leaned heavily on conventional ecommerce bundle patterns. The experience over-emphasized “FREE” framing, duplicated products for visual symmetry, and relied on retail-style value signaling that weakened Puffy’s premium positioning. While structurally coherent, the flow felt system-generated rather than intentionally curated for a luxury mattress purchase. The modal also prioritized promotional reveal mechanics over emotional restraint, making the experience feel closer to a conversion tactic than a thoughtful premium inclusion.",
    accent: false,
  },
  {
    number: "02",
    title: "Points of Disagreement",
    body: "I disagreed with the baseline’s instinct to treat the bundle like a promotional upsell module. The original direction used duplicated pillow cards purely to complete a 4-item grid, which introduced unnecessary repetition and risked users perceiving the bundle as four separate product types instead of three curated additions. I also moved away from aggressive value framing such as “FREE,” “SAVE $249,” and upgrade-style messaging, replacing it with quieter product-first hierarchy and hospitality-inspired language that better aligned with Puffy’s luxury positioning.",
    accent: true,
  },
  {
    number: "03",
    title: "Strategic Additions",
    body: "Introduced a value-first interaction structure where users understand the products before interacting with selection controls, preventing premature opt-out behavior. Reduced promotional UI patterns and simplified the bundle into three clear product categories to improve cognitive clarity while still communicating the inclusion of two pillows. Reworked the reveal modal to focus on premium generosity rather than gamified reward mechanics, using calmer hierarchy, restrained copy, and curated product presentation to create a more believable surprise-and-delight experience.",
    accent: false,
  },
  {
    number: "04",
    title: "AI Tools & Workflow",
    body: "ChatGPT was used for UX strategy refinement, hierarchy critique, copy iteration, and behavioral flow validation throughout the case study. Google Nano Banana 2 was used to generate multiple luxury bedroom scene explorations for the Monarch hero image while preserving the original Puffy mattress asset during compositing. Figma AI / Figma Make were used for structural exploration, layout acceleration, and presentation scaffolding. All AI-generated outputs were manually reviewed, challenged, and refined against Puffy’s luxury brand positioning before inclusion in the final deliverable.",
    accent: false,
  },
];

export function Page4DeltaLog() {
  return (
    <section
      id="page4"
      className="min-h-screen flex flex-col justify-center py-24 px-6"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <div className="max-w-5xl mx-auto w-full">

        {/* Page label */}
        <div className="flex items-center gap-3 mb-8">
          <div className="px-3 py-1 rounded-full" style={{ backgroundColor: "rgba(11,31,58,0.06)" }}>
            <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em", color: "#0B1F3A" }}>PAGE 4</span>
          </div>
          <div style={{ width: "24px", height: "1px", backgroundColor: "#0B1F3A", opacity: 0.2 }} />
          <span style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.1em", color: "rgba(11,31,58,0.45)" }}>AI-DELTA LOG</span>
        </div>

        <h2
          className="mb-3"
          style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 300, color: "#0B1F3A", lineHeight: 1.15, letterSpacing: "-0.025em" }}
        >
          AI-Delta{" "}
          <span style={{ fontWeight: 600 }}>Log</span>
        </h2>
        <div className="mb-6" style={{ width: "40px", height: "3px", borderRadius: "2px", backgroundColor: "#C9A96E" }} />

        {/* Subheading note */}
        <p
          className="mb-12"
          style={{ fontSize: "14px", fontWeight: 400, lineHeight: 1.7, color: "#9CA3AF", maxWidth: "540px" }}
        >
          The goal was not to replicate baseline AI output, but to apply stronger brand judgment, compositional restraint, and luxury-focused UX thinking.
        </p>

        {/* Delta cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {DELTA_CARDS.map((card) => (
            <div
              key={card.number}
              className="rounded-2xl p-7 flex flex-col"
              style={{
                backgroundColor: card.accent ? "#0B1F3A" : "#FFFFFF",
                border: card.accent ? "none" : "1px solid rgba(11,31,58,0.08)",
                boxShadow: card.accent
                  ? "0 6px 32px rgba(11,31,58,0.18)"
                  : "0 2px 16px rgba(11,31,58,0.05)",
              }}
            >
              {/* Card header */}
              <div className="flex items-start justify-between mb-5">
                <div>
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      color: card.accent ? "#C9A96E" : "rgba(11,31,58,0.35)",
                      display: "block",
                      marginBottom: "6px",
                    }}
                  >
                    {card.number}
                  </span>
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: 600,
                      color: card.accent ? "#FFFFFF" : "#0B1F3A",
                      lineHeight: 1.2,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {card.title}
                  </h3>
                </div>
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 ml-3"
                  style={{
                    backgroundColor: card.accent ? "rgba(201,169,110,0.15)" : "rgba(11,31,58,0.05)",
                    border: `1px solid ${card.accent ? "rgba(201,169,110,0.25)" : "rgba(11,31,58,0.1)"}`,
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={card.accent ? "#C9A96E" : "#0B1F3A"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {card.number === "01" && <><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></>}
                    {card.number === "02" && <><path d="M18 6L6 18" /><path d="M6 6l12 12" /></>}
                    {card.number === "03" && <><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></>}
                    {card.number === "04" && <><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></>}
                  </svg>
                </div>
              </div>

              {/* Divider */}
              <div
                className="mb-5"
                style={{ height: "1px", backgroundColor: card.accent ? "rgba(255,255,255,0.08)" : "rgba(11,31,58,0.07)" }}
              />

              {/* Body */}
              <p
                className="flex-1"
                style={{
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: 1.8,
                  color: card.accent ? "rgba(255,255,255,0.78)" : "#374151",
                }}
              >
                {card.body}
              </p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-8 gap-4"
          style={{ borderTop: "1px solid rgba(11,31,58,0.08)" }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "#C9A96E" }}
            >
              <span style={{ fontSize: "10px", fontWeight: 700, color: "#0B1F3A" }}>P</span>
            </div>
            <div>
              <div style={{ fontSize: "13px", fontWeight: 600, color: "#0B1F3A" }}>Naveen Rajendran</div>
              <div style={{ fontSize: "11px", fontWeight: 400, color: "#9CA3AF", marginTop: "1px" }}>Puffy UI/UX Design Challenge</div>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-right">
              <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", color: "#9CA3AF" }}>PAGES</div>
              <div style={{ fontSize: "13px", fontWeight: 600, color: "#0B1F3A", marginTop: "2px" }}>4 of 4</div>
            </div>
            <div style={{ width: "1px", height: "28px", backgroundColor: "rgba(11,31,58,0.1)" }} />
            <div className="text-right">
              <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", color: "#9CA3AF" }}>SUBMISSION</div>
              <div style={{ fontSize: "13px", fontWeight: 600, color: "#0B1F3A", marginTop: "2px" }}>Complete</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
