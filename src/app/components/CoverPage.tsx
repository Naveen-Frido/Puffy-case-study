const BEDROOM_IMAGE =
  "https://images.unsplash.com/photo-1776482128005-51928a464b99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWRyb29tJTIwbW9kZXJuJTIwd2hpdGUlMjBwcmVtaXVtfGVufDF8fHx8MTc3ODA0OTc1N3ww&ixlib=rb-4.1.0&q=80&w=1080";

export function CoverPage() {
  return (
    <section
      id="cover"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#F7F7F5" }}
    >
      {/* Background blurred image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${BEDROOM_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(24px) brightness(0.3)",
          transform: "scale(1.1)",
        }}
      />

      {/* Overlay gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(11,31,58,0.7) 0%, rgba(11,31,58,0.85) 50%, rgba(11,31,58,0.95) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl mx-auto">
        {/* Top label */}
        <div
          className="mb-8 px-4 py-1.5 rounded-full border"
          style={{
            borderColor: "rgba(201,169,110,0.5)",
            backgroundColor: "rgba(201,169,110,0.1)",
          }}
        >
          <span
            style={{
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.15em",
              color: "#C9A96E",
              textTransform: "uppercase",
            }}
          >
            UI/UX Design Challenge
          </span>
        </div>

        {/* Brand name */}
        <div
          className="mb-4"
          style={{ fontSize: "18px", fontWeight: 300, color: "rgba(255,255,255,0.5)", letterSpacing: "0.4em" }}
        >
          PUFFY
        </div>

        {/* Main title */}
        <h1
          className="mb-6"
          style={{
            fontSize: "clamp(36px, 6vw, 72px)",
            fontWeight: 300,
            lineHeight: 1.1,
            color: "#FFFFFF",
            letterSpacing: "-0.02em",
          }}
        >
          UI/UX Design
          <br />
          <span style={{ fontWeight: 600 }}>Case Study</span>
        </h1>

        {/* Divider */}
        <div
          className="w-16 mb-6"
          style={{ height: "1px", backgroundColor: "#C9A96E" }}
        />

        {/* Subtitle */}
        <p
          className="mb-12"
          style={{
            fontSize: "16px",
            fontWeight: 400,
            color: "rgba(255,255,255,0.65)",
            lineHeight: 1.6,
            letterSpacing: "0.02em",
          }}
        >
          Sleep Bundle Experience & Monarch Hero Image
        </p>

        {/* Author row */}
        <div className="flex items-center gap-6">
          <div style={{ width: "40px", height: "1px", backgroundColor: "rgba(255,255,255,0.3)" }} />
          <div>
            <div style={{ fontSize: "13px", fontWeight: 600, color: "#FFFFFF", letterSpacing: "0.05em" }}>Naveen Rajendran</div>
            <div style={{ fontSize: "11px", fontWeight: 400, color: "rgba(255,255,255,0.4)", marginTop: "2px" }}>
              UX Designer
            </div>
          </div>
          <div style={{ width: "40px", height: "1px", backgroundColor: "rgba(255,255,255,0.3)" }} />
        </div>
      </div>

      {/* Bottom scroll hint */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ opacity: 0.5 }}
      >
        <span style={{ fontSize: "10px", fontWeight: 500, color: "#FFFFFF", letterSpacing: "0.15em" }}>
          SCROLL
        </span>
        <div
          className="w-px h-8"
          style={{ backgroundColor: "#FFFFFF", opacity: 0.4 }}
        />
      </div>

      {/* Bottom frame line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1"
        style={{ backgroundColor: "#C9A96E", opacity: 0.6 }}
      />
    </section>
  );
}
