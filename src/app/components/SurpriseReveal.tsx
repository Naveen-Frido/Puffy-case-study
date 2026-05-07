import { useEffect, useRef, useState } from "react";
import confetti from "canvas-confetti";

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

export function SurpriseReveal() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hasFired, setHasFired] = useState(false);

  const fireConfetti = () => {
    const el = canvasRef.current;
    if (!el) return;
    const myConfetti = confetti.create(el, { resize: true, useWorker: false });
    myConfetti({
      particleCount: 100,
      spread: 90,
      origin: { y: 0.3, x: 0.5 },
      colors: ["#C9A96E", "#0B1F3A", "#FFFFFF", "#E8D5B7", "#F7F7F5"],
      gravity: 0.7,
      scalar: 0.9,
      ticks: 250,
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasFired) {
            setHasFired(true);
            setTimeout(fireConfetti, 400);
          }
        });
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasFired]);

  // Listen for forced confetti trigger from Screen A (BundleSelector)
  useEffect(() => {
    const handleTrigger = () => {
      if (hasFired) {
        // If it already fired from scrolling naturally, fire it again for the button click
        setTimeout(fireConfetti, 600);
      }
      // If it hasn't fired yet, the IntersectionObserver will naturally handle it 
      // when it comes into view during the smooth scroll!
    };
    window.addEventListener("trigger-confetti", handleTrigger);
    return () => window.removeEventListener("trigger-confetti", handleTrigger);
  }, [hasFired]);

  return (
    <section
      id="surprise-reveal"
      className="flex flex-col justify-center py-16 px-6"
      style={{ backgroundColor: "#F7F7F5" }}
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="px-3 py-1 rounded-full" style={{ backgroundColor: "rgba(11,31,58,0.08)" }}>
            <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", color: "#0B1F3A" }}>SCREEN B</span>
          </div>
          <div style={{ width: "24px", height: "1px", backgroundColor: "#0B1F3A", opacity: 0.3 }} />
          <span style={{ fontSize: "11px", fontWeight: 500, color: "rgba(11,31,58,0.5)", letterSpacing: "0.08em" }}>SURPRISE REVEAL MODAL</span>
        </div>

        <h2
          className="mb-2"
          style={{ fontSize: "clamp(20px, 2.5vw, 32px)", fontWeight: 300, color: "#0B1F3A", lineHeight: 1.2, letterSpacing: "-0.02em" }}
        >
          Screen B —{" "}
          <span style={{ fontWeight: 600 }}>Surprise Reveal Modal</span>
        </h2>
        <div className="mb-8" style={{ width: "40px", height: "3px", borderRadius: "2px", backgroundColor: "#C9A96E" }} />

        <div className="flex flex-col lg:flex-row gap-6 items-stretch">
          {/* ===== CODED SCREEN B CARD ===== */}
          <div
            ref={sectionRef}
            className="rounded-[16px] overflow-hidden relative w-full lg:max-w-[480px]"
            style={{
              backgroundColor: "#F0F2F5",
              boxShadow: "0 4px 40px rgba(11,31,58,0.08)",
              border: "1px solid rgba(11,31,58,0.06)",
            }}
          >
            {/* Confetti canvas */}
            <canvas
              ref={canvasRef}
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{ zIndex: 20 }}
            />

            {/* Inner white card */}
            <div
              className="m-4 rounded-[12px] px-6 pt-7 pb-5 flex flex-col items-center"
              style={{ backgroundColor: "#FFFFFF" }}
            >
              {/* Gift icon circle */}
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: "#0B1F3A" }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 12 20 22 4 22 4 12" />
                  <rect x="2" y="7" width="20" height="5" />
                  <line x1="12" y1="22" x2="12" y2="7" />
                  <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
                  <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
                </svg>
              </div>

              {/* Headline */}
              <h3 className="text-center mb-2" style={{ lineHeight: 1.2 }}>
                <span style={{ fontSize: "24px", fontWeight: 700, color: "#0B1F3A", display: "block" }}>
                  You unlocked a
                </span>
                <span style={{ fontSize: "24px", fontWeight: 700, color: "#1047A9", display: "block" }}>
                  Premium Upgrade !
                </span>
              </h3>

              {/* Subtext */}
              <p className="text-center mb-5" style={{ fontSize: "15px", color: "#0B1F3A", lineHeight: 1.6 }}>
                We have added your Sleep Essential Bundle<br />
                <span style={{ fontWeight: 700 }}>as Complimentary for you</span>
              </p>

              {/* Product grid */}
              <div className="relative w-full mb-5 mt-1">
                <div
                  className="grid grid-cols-3 rounded-[12px] overflow-hidden"
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
                      <div className="w-full h-[85px] flex items-center justify-center mb-3">
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
                      <p style={{ fontSize: "11px", fontWeight: 400, color: "#5A6577" }}>
                        {item.subtitle}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Better Sleep, On Us box */}
              <div
                className="w-full rounded-[10px] px-4 py-3 flex items-center gap-3 mb-4"
                style={{ backgroundColor: "#EDF2FC" }}
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "#DADEF7" }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1047A9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: "13px", fontWeight: 700, color: "#0B1F3A", marginBottom: "1px" }}>
                    Better Sleep, On Us
                  </div>
                  <div style={{ fontSize: "12px", fontWeight: 400, color: "#5A6577" }}>
                    Enjoy a more complete, comfortable sleep
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <button
                className="w-full rounded-[10px] py-3.5 flex items-center justify-center gap-2 transition-all hover:opacity-90 active:scale-[0.99]"
                style={{ backgroundColor: "#0B1F3A", color: "#FFFFFF" }}
                onClick={fireConfetti}
              >
                <span style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.01em" }}>
                  Continue to Checkout
                </span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>

            {/* Replay confetti button */}
            <button
              onClick={fireConfetti}
              className="absolute bottom-2 right-2 z-30 px-2.5 py-1 rounded-full transition-all hover:opacity-80"
              style={{
                backgroundColor: "rgba(11,31,58,0.7)",
                color: "white",
                backdropFilter: "blur(4px)",
                border: "1px solid rgba(255,255,255,0.15)",
                fontSize: "10px",
                fontWeight: 500,
              }}
            >
              🎉 Replay confetti
            </button>
          </div>

          {/* Rationale panel — uses items-stretch on parent to match height */}
          <div className="lg:w-64 flex flex-col gap-3">
            <div
              className="rounded-2xl p-5 flex-1"
              style={{ backgroundColor: "#0B1F3A" }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-5 h-5 rounded flex items-center justify-center" style={{ backgroundColor: "rgba(201,169,110,0.2)" }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2.5">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                </div>
                <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", color: "#C9A96E" }}>
                  DESIGN RATIONALE
                </span>
              </div>

              <p style={{ fontSize: "13px", fontWeight: 400, lineHeight: 1.65, color: "rgba(255,255,255,0.8)" }}>
                The modal transforms checkout into a reward moment by revealing the bundle as complimentary only after value perception has already been established.
              </p>
            </div>

            <div
              className="rounded-2xl p-5 flex-1"
              style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(11,31,58,0.08)", boxShadow: "0 2px 12px rgba(11,31,58,0.05)" }}
            >
              <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", color: "#0B1F3A", marginBottom: "10px" }}>
                RATIONALE
              </p>
              <ul className="space-y-2">
                {["Delayed reward revelation", "Surprise-and-delight psychology", "Premium gifting experience", "Emotional reinforcement", "Luxury restraint in messaging", "Value confirmation after action"].map((g, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "#C9A96E" }} />
                    <span style={{ fontSize: "12px", fontWeight: 400, color: "#374151" }}>{g}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}