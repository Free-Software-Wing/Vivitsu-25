import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./vivitsu.css"; // Import your CSS file
import { MorphingTextDemo } from "./morph";

export default function Vivitsu() {
  const letters = ["V", "I", "V", "I", "T", "S", "U", "-", "2", "6"];
  const letterRefs = useRef([]);
  const buttonRef = useRef(null);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    const numColumns = Math.floor(window.innerWidth / 20);
    setColumns(new Array(numColumns).fill(0));
  }, []);

  useEffect(() => {
    letterRefs.current.forEach((letter, index) => {
      if (!letter) return;

      const startX = (Math.random() - 0.5) * window.innerWidth;
      const startY = (Math.random() - 0.5) * window.innerHeight;

      gsap.set(letter, {
        x: startX,
        y: startY,
        opacity: 0,
      });

      gsap.to(letter, {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 1.5,
        delay: index * 0.2,
        ease: "power3.out",
      });
    });

    gsap.from(buttonRef.current, {
      scale: 0,
      opacity: 0,
      duration: 1,
      delay: letters.length * 0.2 + 0.5,
      ease: "elastic.out(1, 0.5)",
      onComplete: () => {
        gsap.set(buttonRef.current, { opacity: 1, scale: 1 });
      },
    });

    const button = buttonRef.current;
    button.addEventListener("mouseenter", () => {
      gsap.to(button, {
        scale: 1.1,
        backgroundColor: "#007bff",
        duration: 0.3,
        ease: "power2.out",
      });
    });

    button.addEventListener("mouseleave", () => {
      gsap.to(button, {
        scale: 1,
        backgroundColor: "black",
        duration: 0.3,
        ease: "power2.out",
      });
    });

    return () => {
      button.removeEventListener("mouseenter", () => { });
      button.removeEventListener("mouseleave", () => { });
    };
  }, []);

  const getRandomChar = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";
    return chars[Math.floor(Math.random() * chars.length)];
  };

  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh", overflow: "hidden" }}>
      {columns.map((_, index) => (
        <div
          key={index}
          className="falling-code"
          style={{
            position: "absolute",
            top: 0,
            left: `${index * 20}px`,
            color: "#00FFFF",
            fontSize: "18px",
            textShadow: "0 0 5px #00FFFF, 0 0 10px #00FFFF, 0 0 20px #00FFFF",
            animation: `fall ${2 + Math.random() * 3}s linear infinite`,
            zIndex: 1,
          }}
        >
          {new Array(15).fill(0).map((_, i) => (
            <div key={i}>{getRandomChar()}</div>
          ))}
        </div>
      ))}

      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
          textAlign: "center",
          whiteSpace: "nowrap",
        }}
      >
        <h1>
          {letters.map((letter, index) => (
            <span
              key={index}
              ref={(el) => (letterRefs.current[index] = el)}
              style={{
                display: "inline-block",
                fontSize: "clamp(40px, 10vw, 100px)", // Responsive font size
                color: "#ffffff",
                textShadow: "0 0 10px #00FFFF, 0 0 20px #00FFFF",
              }}
            >
              {letter}
            </span>
          ))}
        </h1>
      </div>

      <div
        style={{
          position: "absolute",
          top: "calc(50% + 100px)",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 3,
          marginTop: "100px",
        }}
      >
        <br />
        <br />
        <MorphingTextDemo />
        <button
          ref={buttonRef}
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "10px 20px",
            fontSize: "clamp(14px, 2vw, 20px)", // Responsive font size
            border: "2px solid #00FFFF",
            borderRadius: "10px",
            cursor: "pointer",
            transition: "0.3s",
            textShadow: "0 0 5px #00FFFF",
            marginTop: "100px",
          }}
          onClick={() =>
            window.open(
              "https://unstop.com/o/Ro1FhxZ?utm_medium=Share&utm_source=freewin1161&utm_campaign=Online_coding_challenge",
              "_blank"
            )
          }
        >
          Register Now!
        </button>
      </div>

      <style>{`
        @keyframes fall {
          0% { transform: translateY(-100%); opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }

        @media (max-width: 768px) {
          .falling-code {
            font-size: 12px; /* Smaller font size for mobile */
          }
        }
      `}</style>
    </div>
  );
}