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

      <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", fontWeight: 400 }}>
        Naveen Rajendran
      </div>
    </nav>
  );
}
