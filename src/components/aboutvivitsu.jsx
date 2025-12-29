import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import NeonGradientCard from "./neongradientcard";

const AboutPage = () => {
  const logoRef = useRef(null);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    gsap.to(logoRef.current, {
      rotationY: "+=360",
      repeat: -1,
      duration: 5,
      ease: "linear",
    });
  }, []);

  const textContainer = {
    position: "relative",
    display: "inline-block",
    fontSize: "3em", // Increased font size
    fontFamily: "Arial",
    letterSpacing: "3px",
    textTransform: "uppercase",
    WebkitTextStroke: "1px rgba(255,255,255,0.6)",
    color: "transparent",
    cursor: "pointer",
  };

  const hoverText = {
    position: "absolute",
    top: 0,
    left: 0,
    color: "#00008B", // Changed color to dark blue
    width: hover ? "100%" : "0%",
    overflow: "hidden",
    transition: "width 0.5s ease-in-out",
    WebkitTextStroke: "1pxrgb(102, 102, 244)", // Changed stroke color to dark blue
    whiteSpace: "nowrap",
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "transparent",
        textAlign: "center",
        fontFamily: "'Orbitron', sans-serif",
        color: "#fff",
        padding: "20px",
      }}
    >
      <div
        style={textContainer}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <span>&nbsp;ABOUT VIVITSU&nbsp;</span>
        <span style={hoverText}>&nbsp;ABOUT VIVITSU&nbsp;</span>
      </div>

      {/* Rotating Lightbulb Logo */}
      <div
        style={{
          width: "250px",
          height: "250px",
          transformStyle: "preserve-3d",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          ref={logoRef}
          src="/vivilogo.png"
          alt="Rotating Lightbulb"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div>

      {/* About Description */}
      <div
        style={{
          maxWidth: "800px",
          background: "rgba(255, 255, 255, 0.1)",
          padding: "20px",
          borderRadius: "10px",
          marginTop: "20px",
        }}
      >
        <p style={{ fontSize: "1.2rem", opacity: 0.9 }}>
          Welcome to VIVITSU 2026 We believe in innovation and creativity.
          Our goal is build innovative projects within 24 hours.
        </p>
      </div>

      {/* Info Section with Neon Gradient Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 3fr))",
          gap: "40px",
          marginTop: "80px",
          width: "80%",
        }}
      >
        {[
          { icon: "🌍", title: "Mode", text: "Offline" },
          { icon: "📅", title: "Date", text: "30-31 January 2026" },
          { icon: "👥", title: "Registrations", text: "250+ participants" },
          { icon: "💰", title: "Prize Pool", text: "1 Lakh worth cash prizes" },
        ].map((item, index) => (
          <NeonGradientCard key={index} style>
            <span style={{ fontSize: "2rem" }}>{item.icon}</span>
            <h3 style={{ margin: "10px 0", fontSize: "1.2rem" }}>{item.title}</h3>
            <p style={{ fontSize: "1rem", opacity: 0.8 }}>{item.text}</p>
          </NeonGradientCard>
        ))}
      </div>

      {/* Closing Statement */}
      <div
        style={{
          marginTop: "70px",
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "#a67cfa",
          textShadow: "0 0 10px #a67cfa, 0 0 20px #a67cfa",
        }}
      >
        We celebrate innovation, creativity, and the future of technology!
      </div>
    </div>
  );
};

export default AboutPage;
