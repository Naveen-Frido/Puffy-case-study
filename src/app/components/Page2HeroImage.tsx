import { useState, useRef, useCallback } from "react";

const HERO_IMAGES = [
  "/hero-bedroom-1.jpg",
  "/hero-bedroom-2.jpg",
  "/Monarch Image -3.png",
  "/Monarch Image -4.png",
];

const INTEGRITY_ITEMS = [
  "Puffy logo preserved with sharp readability",
  "Original mattress textures retained exactly",
  "No AI repainting or pattern distortion",
  "Accurate anatomical mattress proportions",
  "Realistic lighting integration",
  "Seamless environmental grounding",
  "2400px+ export quality maintained",
];

const AI_WORKFLOW = [
  "AI-generated luxury environment composition",
  "Controlled environment refinement",
  "Product-preserving integration workflow",
  "Multi-angle iteration exploration",
  "High-resolution upscale refinement",
  "Localised clutter cleanup and composition polishing",
];

const AI_TECHNIQUES = [
  "Reference-guided generation",
  "Controlled localised edits",
  "Composition refinement",
  "Environment cleanup",
  "Perspective preservation",
  "High-resolution upscale workflow",
];

const SAMPLE_PROMPT = `Create a photorealistic ultra-luxury penthouse bedroom hero scene for a premium mattress product page using the uploaded Puffy Monarch mattress and bed asset exactly as provided. The uploaded product must remain completely unchanged — do not regenerate, repaint, redesign, distort, blur, smooth, or alter any part of the mattress, pillows, headboard, quilting, stitching, labels, or Puffy logo. Preserve all mattress textures, patterns, seams, proportions, and material details exactly as in the source image. The Puffy logo must remain perfectly sharp, centered, legible, and readable even at 50% zoom. Maintain the exact same camera angle, perspective, framing, and front-facing orientation from the provided asset. Do not rotate the bed, tilt the mattress, or convert the scene into a 3/4 perspective. The final room environment must be built naturally around the existing product angle so the mattress feels seamlessly integrated rather than composited. The bed should remain centered, symmetrical, anatomically correct in scale, and occupy approximately 70–80% of the frame width, with a similar zoom level to the reference image so the mattress dominates the composition like a luxury bedding advertisement.

Design the environment as a world-class luxury master bedroom inspired by Aman Resorts, Four Seasons penthouse suites, Ritz-Carlton interiors, and Architectural Digest editorial photography. Include elegant architectural wall paneling, large-scale room proportions, floor-to-ceiling windows, subtle luxury decor, premium walnut wood, brushed brass accents, marble surfaces, smoked glass, velvet textures, matte stone finishes, and sophisticated neutral-toned styling. Use a refined luxury color palette featuring charcoal gray, warm taupe, champagne beige, muted ivory, dark walnut, and soft shadow tones. Keep the room elegant and minimal with no clutter, no excessive props, and no bright distracting colors. The environment should feel expensive, calm, cinematic, and aspirational while keeping the mattress as the clear hero subject.

Use high-end editorial interior lighting with a balanced combination of soft natural dawn or dusk light entering through large windows and warm ambient architectural lighting from elegant bedside fixtures. Lighting should enhance the depth and realism of the mattress while preserving every quilting detail and texture sharply without overexposure or artificial HDR effects. Add realistic contact shadows, ambient occlusion, subtle reflections, and physically accurate grounding so the mattress feels naturally placed within the room. Use a luxury interior photography aesthetic with realistic lens compression, eye-level framing, subtle cinematic depth of field only in the distant background, and tack-sharp focus on the mattress itself. The final image must look like a premium commercial luxury mattress campaign photographed in a real ultra-high-end penthouse suite, with magazine-quality realism, ultra-detailed textures, clean edges, physically accurate materials, and no AI artifacts, warping, melting, painterly effects, or CGI appearance. `;

export function Page2HeroImage() {
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(SAMPLE_PROMPT).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const scrollToSlide = useCallback((index: number) => {
    if (!scrollRef.current) return;
    const slide = scrollRef.current.children[index] as HTMLElement;
    if (slide) {
      slide.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
      setActiveSlide(index);
    }
  }, []);

  const handleScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const slideWidth = scrollRef.current.offsetWidth;
    const newIndex = Math.round(scrollLeft / slideWidth);
    setActiveSlide(newIndex);
  }, []);

  return (
    <section
      id="page2"
      className="min-h-screen flex flex-col justify-center py-24 px-6"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <div className="max-w-5xl mx-auto w-full">

        {/* Page label */}
        <div className="flex items-center gap-3 mb-8">
          <div className="px-3 py-1 rounded-full" style={{ backgroundColor: "rgba(11,31,58,0.06)" }}>
            <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em", color: "#0B1F3A" }}>PAGE 2</span>
          </div>
          <div style={{ width: "24px", height: "1px", backgroundColor: "#0B1F3A", opacity: 0.2 }} />
          <span style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.1em", color: "rgba(11,31,58,0.45)" }}>TASK 2</span>
        </div>

        <h2
          className="mb-3"
          style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 300, color: "#0B1F3A", lineHeight: 1.15, letterSpacing: "-0.025em" }}
        >
          Task 2 —{" "}
          <span style={{ fontWeight: 600 }}>Puffy Monarch AI Hero Image</span>
        </h2>
        <div className="mb-12" style={{ width: "40px", height: "3px", borderRadius: "2px", backgroundColor: "#C9A96E" }} />

        {/* Hero image carousel */}
        <div className="relative w-full rounded-2xl overflow-hidden mb-10" style={{ boxShadow: "0 8px 48px rgba(11,31,58,0.1)" }}>
          {/* Scrollable container */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto"
            style={{
              scrollSnapType: "x mandatory",
              scrollBehavior: "smooth",
              WebkitOverflowScrolling: "touch",
              msOverflowStyle: "none",
              scrollbarWidth: "none",
            }}
          >
            {HERO_IMAGES.map((src, idx) => (
              <div
                key={idx}
                className="relative w-full shrink-0"
                style={{ scrollSnapAlign: "start", paddingTop: "48%" }}
              >
                <img
                  src={src}
                  alt={`Puffy Monarch luxury bedroom hero ${idx + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Badges */}
                <div
                  className="absolute top-5 left-5 px-3 py-1.5 rounded-full"
                  style={{ backgroundColor: "rgba(11,31,58,0.72)", backdropFilter: "blur(8px)" }}
                >
                  <span style={{ fontSize: "11px", fontWeight: 600, color: "#FFFFFF", letterSpacing: "0.1em" }}>PUFFY MONARCH</span>
                </div>
                <div
                  className="absolute bottom-5 right-5 px-3 py-1.5 rounded-full"
                  style={{ backgroundColor: "rgba(201,169,110,0.92)" }}
                >
                  <span style={{ fontSize: "11px", fontWeight: 600, color: "#0B1F3A", letterSpacing: "0.08em" }}>AI-Generated Hero</span>
                </div>
              </div>
            ))}
          </div>

          {/* Left arrow */}
          <button
            onClick={() => scrollToSlide(Math.max(0, activeSlide - 1))}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-opacity"
            style={{
              backgroundColor: "rgba(255,255,255,0.85)",
              backdropFilter: "blur(4px)",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              opacity: activeSlide === 0 ? 0.3 : 1,
              cursor: activeSlide === 0 ? "default" : "pointer",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Right arrow */}
          <button
            onClick={() => scrollToSlide(Math.min(HERO_IMAGES.length - 1, activeSlide + 1))}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-opacity"
            style={{
              backgroundColor: "rgba(255,255,255,0.85)",
              backdropFilter: "blur(4px)",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              opacity: activeSlide === HERO_IMAGES.length - 1 ? 0.3 : 1,
              cursor: activeSlide === HERO_IMAGES.length - 1 ? "default" : "pointer",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {HERO_IMAGES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToSlide(idx)}
                className="rounded-full transition-all"
                style={{
                  width: activeSlide === idx ? "24px" : "8px",
                  height: "8px",
                  backgroundColor: activeSlide === idx ? "#FFFFFF" : "rgba(255,255,255,0.5)",
                }}
              />
            ))}
          </div>

          {/* Slide counter */}
          <div
            className="absolute top-5 right-5 px-3 py-1.5 rounded-full"
            style={{ backgroundColor: "rgba(11,31,58,0.72)", backdropFilter: "blur(8px)" }}
          >
            <span style={{ fontSize: "11px", fontWeight: 600, color: "#FFFFFF", letterSpacing: "0.05em" }}>
              {activeSlide + 1} / {HERO_IMAGES.length}
            </span>
          </div>
        </div>

        {/* Objective + AI Workflow */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          {/* Objective */}
          <div
            className="rounded-2xl p-7"
            style={{ backgroundColor: "#F7F7F5", border: "1px solid rgba(11,31,58,0.07)", boxShadow: "0 2px 12px rgba(11,31,58,0.04)" }}
          >
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#0B1F3A" }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", color: "#0B1F3A" }}>OBJECTIVE</span>
            </div>
            <p style={{ fontSize: "15px", fontWeight: 400, lineHeight: 1.75, color: "#374151" }}>
              Create a photorealistic ultra-luxury bedroom hero image for Puffy's highest-tier mattress while preserving complete product integrity.
            </p>
            <div className="mt-6 space-y-2.5">
              {[
                { k: "Product", v: "Puffy Monarch Mattress" },
                { k: "Output Format", v: "Hero image, 2400px+" },
                { k: "Approach", v: "AI-assisted, product-preserved" },
              ].map((r) => (
                <div key={r.k} className="flex justify-between py-2" style={{ borderBottom: "1px solid rgba(11,31,58,0.07)" }}>
                  <span style={{ fontSize: "11px", fontWeight: 600, color: "#9CA3AF", letterSpacing: "0.06em" }}>{r.k.toUpperCase()}</span>
                  <span style={{ fontSize: "12px", fontWeight: 500, color: "#0B1F3A" }}>{r.v}</span>
                </div>
              ))}
            </div>
          </div>

          {/* AI Workflow */}
          <div
            className="rounded-2xl p-7"
            style={{ backgroundColor: "#0B1F3A", boxShadow: "0 4px 24px rgba(11,31,58,0.15)" }}
          >
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: "rgba(201,169,110,0.15)" }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", color: "#C9A96E" }}>AI-ASSISTED WORKFLOW</span>
            </div>
            <ul className="space-y-3">
              {AI_WORKFLOW.map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div
                    className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                    style={{ backgroundColor: "rgba(201,169,110,0.15)", border: "1px solid rgba(201,169,110,0.25)" }}
                  >
                    <span style={{ fontSize: "9px", fontWeight: 700, color: "#C9A96E" }}>{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <span style={{ fontSize: "13px", fontWeight: 400, lineHeight: 1.6, color: "rgba(255,255,255,0.78)" }}>{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Product Integrity */}
        <div
          className="rounded-2xl p-7 mb-6"
          style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(11,31,58,0.08)", boxShadow: "0 2px 16px rgba(11,31,58,0.05)" }}
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: "rgba(11,31,58,0.06)" }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", color: "#0B1F3A" }}>PRODUCT INTEGRITY REQUIREMENTS</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {INTEGRITY_ITEMS.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div
                  className="mt-0.5 w-4 h-4 rounded flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "rgba(11,31,58,0.06)", border: "1px solid rgba(11,31,58,0.1)" }}
                >
                  <svg width="8" height="8" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6L5 9L10 3" stroke="#0B1F3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span style={{ fontSize: "13px", fontWeight: 400, lineHeight: 1.55, color: "#374151" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Expandable Prompt Accordion */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{ border: "1px solid rgba(11,31,58,0.1)", boxShadow: "0 2px 12px rgba(11,31,58,0.04)" }}
        >
          <button
            onClick={() => setAccordionOpen(!accordionOpen)}
            className="w-full flex items-center justify-between p-6 transition-colors hover:bg-gray-50"
            style={{ backgroundColor: accordionOpen ? "#F7F7F5" : "#FFFFFF" }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "rgba(11,31,58,0.07)" }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
                </svg>
              </div>
              <span style={{ fontSize: "14px", fontWeight: 600, color: "#0B1F3A" }}>
                View Prompt Chain &amp; AI Workflow
              </span>
            </div>
            <svg
              width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2"
              style={{ transform: accordionOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s ease" }}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>

          {accordionOpen && (
            <div style={{ backgroundColor: "#FAFAFA", borderTop: "1px solid rgba(11,31,58,0.07)" }}>
              <div className="p-6">
                {/* Workflow explanation */}
                <div className="mb-6 space-y-3">
                  <p style={{ fontSize: "13px", fontWeight: 400, lineHeight: 1.7, color: "#6B7280" }}>
                    <span style={{ fontWeight: 600, color: "#374151" }}>Google Nano Banana 2</span> was used to generate the initial ultra-luxury environment while preserving the original Puffy mattress asset exactly as provided.
                  </p>
                  <p style={{ fontSize: "13px", fontWeight: 400, lineHeight: 1.7, color: "#6B7280" }}>
                    Subsequent iterations used controlled composition edits, localised cleanup, clutter removal, environmental refinement, and alternate-angle explorations while maintaining product integrity.
                  </p>
                </div>

                {/* Prompt block */}
                <div className="mb-5">
                  <div className="flex items-center justify-between mb-2">
                    <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", color: "rgba(11,31,58,0.4)" }}>MASTER PROMPT</span>
                    <button
                      onClick={handleCopy}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all"
                      style={{
                        backgroundColor: copied ? "rgba(11,31,58,0.08)" : "rgba(11,31,58,0.06)",
                        border: "1px solid rgba(11,31,58,0.1)",
                        fontSize: "11px",
                        fontWeight: 600,
                        color: copied ? "#0B1F3A" : "#6B7280",
                      }}
                    >
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        {copied
                          ? <path d="M20 6L9 17l-5-5" />
                          : <><rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></>}
                      </svg>
                      {copied ? "Copied!" : "Copy prompt"}
                    </button>
                  </div>
                  <div
                    className="rounded-xl p-5 overflow-auto"
                    style={{
                      backgroundColor: "#0B1F3A",
                      maxHeight: "200px",
                      fontFamily: "'SF Mono', 'Fira Code', monospace",
                    }}
                  >
                    <pre style={{ fontSize: "12px", fontWeight: 400, lineHeight: 1.7, color: "rgba(255,255,255,0.8)", whiteSpace: "pre-wrap", margin: 0 }}>
                      {SAMPLE_PROMPT}
                    </pre>
                  </div>
                </div>

                {/* AI Techniques */}
                <div>
                  <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", color: "rgba(11,31,58,0.4)", marginBottom: "12px" }}>
                    AI TECHNIQUES USED
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {AI_TECHNIQUES.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full"
                        style={{ fontSize: "12px", fontWeight: 500, color: "#374151", backgroundColor: "rgba(11,31,58,0.06)", border: "1px solid rgba(11,31,58,0.08)" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
