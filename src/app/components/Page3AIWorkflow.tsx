import { useState } from "react";

const TOOLS = [
  {
    name: "ChatGPT",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    purpose: "UX reasoning, strategy refinement, critique, copy structure, and presentation logic.",
    tags: ["Strategy", "Copy", "Critique", "Structure"],
    linkLabel: "Public session link",
    linkUrl: "https://chatgpt.com/share/69fbf558-9c6c-8320-9a8a-4f15f8254bff",
  },
  {
    name: "Google Nano Banana 2",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    purpose: "Luxury bedroom environment generation and photorealistic scene composition.",
    tags: ["Image Gen", "Environment", "Photorealistic"],
    linkLabel: "Generation history",
    linkUrl: "https://chatgpt.com/share/69fbdf9c-8094-83a3-890d-6c5b48ee50b0",
  },
  {
    name: "Figma AI / Figma Make / Antigravity",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="9" height="9" rx="1.5" /><rect x="13" y="2" width="9" height="9" rx="1.5" />
        <rect x="2" y="13" width="9" height="9" rx="1.5" /><rect x="13" y="13" width="9" height="9" rx="1.5" />
      </svg>
    ),
    purpose: "Presentation layout generation, structure exploration, and component implementation.",
    tags: ["Layout", "Presentation", "Prototyping", "Implementation"],
    linkLabel: "Project file link",
  },
];


export function Page3AIWorkflow() {

  return (
    <section
      id="page3"
      className="min-h-screen flex flex-col justify-center py-24 px-6"
      style={{ backgroundColor: "#F7F7F5" }}
    >
      <div className="max-w-5xl mx-auto w-full">

        {/* Page label */}
        <div className="flex items-center gap-3 mb-8">
          <div className="px-3 py-1 rounded-full" style={{ backgroundColor: "rgba(11,31,58,0.07)" }}>
            <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em", color: "#0B1F3A" }}>PAGE 3</span>
          </div>
          <div style={{ width: "24px", height: "1px", backgroundColor: "#0B1F3A", opacity: 0.2 }} />
          <span style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.1em", color: "rgba(11,31,58,0.45)" }}>AI WORKFLOW VERIFICATION</span>
        </div>

        <h2
          className="mb-3"
          style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 300, color: "#0B1F3A", lineHeight: 1.15, letterSpacing: "-0.025em" }}
        >
          AI Workflow{" "}
          <span style={{ fontWeight: 600 }}>Verification</span>
        </h2>
        <div className="mb-12" style={{ width: "40px", height: "3px", borderRadius: "2px", backgroundColor: "#C9A96E" }} />

        {/* Intro note */}
        <div
          className="rounded-2xl p-5 mb-10 flex flex-col gap-3"
          style={{ backgroundColor: "rgba(201,169,110,0.07)", border: "1px solid rgba(201,169,110,0.2)" }}
        >
          <div className="flex items-start gap-3">
            <svg className="shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <p style={{ fontSize: "13px", fontWeight: 400, lineHeight: 1.7, color: "#6B7280" }}>
              This page documents the AI tools used, the prompt chain, and the iterative workflow — ensuring transparency and process integrity for the evaluation.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="shrink-0 mt-0.5" style={{ width: "14px" }} />
            <p style={{ fontSize: "13px", fontWeight: 500, lineHeight: 1.7, color: "#0B1F3A" }}>
              Prompt generated using ChatGPT and images are generated using Nano Banana 2. Iterations and scaling are done using Google Flow.
            </p>
          </div>
        </div>

        {/* AI Tools */}
        <div className="flex items-center gap-3 mb-6">
          <div style={{ width: "20px", height: "1px", backgroundColor: "#0B1F3A", opacity: 0.2 }} />
          <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", color: "rgba(11,31,58,0.4)" }}>AI TOOLS USED</span>
          <div style={{ flex: 1, height: "1px", backgroundColor: "#0B1F3A", opacity: 0.08 }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {TOOLS.map((tool, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 flex flex-col"
              style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(11,31,58,0.08)", boxShadow: "0 2px 16px rgba(11,31,58,0.05)" }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: "rgba(11,31,58,0.07)", color: "#0B1F3A" }}
              >
                {tool.icon}
              </div>
              <div style={{ fontSize: "14px", fontWeight: 700, color: "#0B1F3A", marginBottom: "8px" }}>{tool.name}</div>
              <p className="flex-1" style={{ fontSize: "13px", fontWeight: 400, lineHeight: 1.65, color: "#6B7280", marginBottom: "14px" }}>
                {tool.purpose}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {tool.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-full"
                    style={{ fontSize: "10px", fontWeight: 600, color: "#0B1F3A", backgroundColor: "rgba(11,31,58,0.06)", letterSpacing: "0.06em" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {/* Link */}
              {tool.linkUrl ? (
                <a
                  href={tool.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded-lg px-3 py-2 transition-all hover:opacity-80"
                  style={{ backgroundColor: "rgba(11,31,58,0.04)", border: "1px solid rgba(11,31,58,0.15)" }}
                >
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                  </svg>
                  <span style={{ fontSize: "11px", fontWeight: 600, color: "#0B1F3A" }}>{tool.linkLabel}</span>
                </a>
              ) : (
                <div
                  className="flex items-center gap-1.5 rounded-lg px-3 py-2"
                  style={{ backgroundColor: "rgba(11,31,58,0.04)", border: "1px dashed rgba(11,31,58,0.15)" }}
                >
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                  </svg>
                  <span style={{ fontSize: "11px", fontWeight: 500, color: "#9CA3AF" }}>{tool.linkLabel} — to be added</span>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
