import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    const dot = cursorDotRef.current;
    const ring = cursorRingRef.current;
    
    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setIsHidden(false);

      if (dot) {
        dot.style.transform = `translate3d(${mouseX - 3}px, ${mouseY - 3}px, 0)`;
      }
    };

    const animateRing = () => {
      // Linear interpolation (lerp) for smooth lag effect
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;

      if (ring) {
        ring.style.transform = `translate3d(${ringX - 16}px, ${ringY - 16}px, 0)`;
      }
      requestAnimationFrame(animateRing);
    };

    const onMouseLeave = () => {
      setIsHidden(true);
    };

    const onMouseEnter = () => {
      setIsHidden(false);
    };

    // Hover effect listeners
    const addHoverListeners = () => {
      const interactives = document.querySelectorAll("a, button, input, textarea, [role='button'], .portfolio-card, .service-card");
      interactives.forEach((el) => {
        el.addEventListener("mouseenter", () => setIsHovered(true));
        el.addEventListener("mouseleave", () => setIsHovered(false));
      });
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    
    const animationFrameId = requestAnimationFrame(animateRing);
    
    // Set up hover listeners and run them periodically in case DOM updates
    addHoverListeners();
    const interval = setInterval(addHoverListeners, 1000);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(animationFrameId);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {/* Inner Dot */}
      <div
        ref={cursorDotRef}
        className={`fixed top-0 left-0 w-1.5 h-1.5 rounded-full pointer-events-none z-[9999] transition-all duration-300 ${
          isHidden ? "opacity-0 scale-0" : "opacity-100"
        } ${isHovered ? "scale-0 bg-transparent" : "bg-[#2563EB]"}`}
        style={{
          transform: "translate3d(-100px, -100px, 0)",
          willChange: "transform",
        }}
      />
      {/* Outer Ring */}
      <div
        ref={cursorRingRef}
        className={`fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9998] transition-all duration-300 ease-out border ${
          isHidden ? "opacity-0 scale-0" : "opacity-100"
        } ${
          isHovered
            ? "scale-150 bg-[#2563EB]/5 border-[#2563EB] dark:border-[#7C3AED]"
            : "border-gray-400/50 dark:border-gray-600/50"
        }`}
        style={{
          transform: "translate3d(-100px, -100px, 0)",
          willChange: "transform",
        }}
      />
    </>
  );
};

export default CustomCursor;