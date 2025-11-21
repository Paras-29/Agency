import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const smokeRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const smoke = smokeRef.current;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let posX = mouseX;
    let posY = mouseY;

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    const animateSmoke = () => {
      posX += (mouseX - posX) * 0.12;
      posY += (mouseY - posY) * 0.12;
      smoke.style.transform = `translate3d(${posX}px, ${posY}px, 0)`;
      requestAnimationFrame(animateSmoke);
    };

    document.addEventListener("mousemove", moveCursor);
    animateSmoke();

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        ref={cursorRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 14,
          height: 14,
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 30% 30%, #f0f, #0ff 60%, #fff0 100%)",
          pointerEvents: "none",
          zIndex: 9999,
          transform: "translate3d(-100px, -100px, 0)",
          boxShadow: "0 0 12px 4px #a855f7, 0 0 32px 16px #06b6d4",
          mixBlendMode: "screen",
        }}
      />
      {/* Blurry smoke follower */}
      <div
        ref={smokeRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 60,
          height: 60,
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 40% 40%, #a855f7 0%, #06b6d4 60%, #fff0 100%)",
          filter: "blur(18px)",
          opacity: 0.55,
          pointerEvents: "none",
          zIndex: 9998,
          transform: "translate3d(-100px, -100px, 0)",
          mixBlendMode: "plus-lighter",
          transition: "background 0.2s",
        }}
      />
    </>
  );
};

export default CustomCursor;