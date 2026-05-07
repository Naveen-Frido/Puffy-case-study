export function NavBar() {
  const sections = [
    { id: "cover", label: "Cover" },
    { id: "page1", label: "Task 1" },
    { id: "bundle-selector", label: "Screen A" },
    { id: "surprise-reveal", label: "Screen B" },
    { id: "page2", label: "Task 2" },
    { id: "page3", label: "AI Workflow" },
    { id: "page4", label: "AI-Delta" },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 border-b border-white/20"
      style={{
        backgroundColor: "rgba(11, 31, 58, 0.97)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div className="flex items-center gap-3">
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center"
          style={{ backgroundColor: "#C9A96E" }}
        >
          <span style={{ fontSize: "10px", fontWeight: 700, color: "#0B1F3A" }}>P</span>
        </div>
        <span style={{ fontSize: "13px", fontWeight: 600, color: "#FFFFFF", letterSpacing: "0.08em" }}>
          PUFFY CASE STUDY
        </span>
      </div>

      <div className="flex items-center gap-1">
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            className="px-3 py-1.5 rounded-md transition-all hover:bg-white/10"
            style={{ fontSize: "12px", fontWeight: 500, color: "rgba(255,255,255,0.7)" }}
          >
            {s.label}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-5">
        <a
          href="https://www.figma.com/design/WB57h0YjHk2OzBKBGFQBBK/Puffy-Case-Study-Naveen-Rajendran?node-id=0-1&t=y1tIDTwNPwNvnUUY-1"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-opacity hover:opacity-80 flex items-center gap-1.5"
          style={{ fontSize: "12px", color: "#C9A96E", fontWeight: 600, textDecoration: "none" }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          </svg>
          Figma Link
        </a>
        <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", fontWeight: 400 }}>
          Naveen Rajendran
        </div>
      </div>
    </nav>
  );
}
