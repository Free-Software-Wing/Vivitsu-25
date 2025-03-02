import { useEffect } from "react";
import gsap from "gsap";
import "./Background.css";

function Background() {
  useEffect(() => {
    gsap.to(".out-top", { y: -20, duration: 3, yoyo: true, repeat: -1, ease: "power1.inOut" });
    gsap.to(".in-top", { x: 15, duration: 4, yoyo: true, repeat: -1, ease: "power1.inOut" });
    gsap.to(".out-bottom", { y: 20, duration: 5, yoyo: true, repeat: -1, ease: "power1.inOut" });
    gsap.to(".in-bottom", { x: -15, duration: 6, yoyo: true, repeat: -1, ease: "power1.inOut" });
  }, []);

  return (
    <section className="background-section">
      <div className="background-container">
        <svg preserveAspectRatio="xMidYMid slice" viewBox="10 10 80 80">
          <path
            fill="rgba(134, 158, 96, 0.4)"
            className="out-top"
            d="M37-5C25.1-14.7,5.7-19.1-9.2-10-28.5,1.8-32.7,31.1-19.8,49c15.5,21.5,52.6,22,67.2,2.3C59.4,35,53.7,8.5,37-5Z"
          />
          <path
            fill="rgba(46, 46, 10, 0.4)"
            className="in-top"
            d="M20.6,4.1C11.6,1.5-1.9,2.5-8,11.2-16.3,23.1-8.2,45.6,7.4,50S42.1,38.9,41,24.5C40.2,14.1,29.4,6.6,20.6,4.1Z"
          />
          <path
            fill="rgba(255, 253, 141, 0.4)"
            className="out-bottom"
            d="M105.9,48.6c-12.4-8.2-29.3-4.8-39.4.8-23.4,12.8-37.7,51.9-19.1,74.1s63.9,15.3,76-5.6c7.6-13.3,1.8-31.1-2.3-43.8C117.6,63.3,114.7,54.3,105.9,48.6Z"
          />
          <path
            fill="rgba(255, 253, 141, 0.4)"
            className="in-bottom"
            d="M102,67.1c-9.6-6.1-22-3.1-29.5,2-15.4,10.7-19.6,37.5-7.6,47.8s35.9,3.9,44.5-12.5C115.5,92.6,113.9,74.6,102,67.1Z"
          />
        </svg>

        <div className="content-wrapper">
          <div className="text-container">
            <div className="text-con">
              <div>Hello</div>
              <div className="dropping-texts">
                <div>Students</div>
                <div>Engineers</div>
                <div>Coders</div>
                <div>EVERYONE!</div>
              </div>
            </div>
          </div>

          <div className="Event-container">
            <h1 className="rubik-doodle-shadow-regular">VIVITSU 2025</h1>
            <h2 className="bungee-shade-regular">24 hrs Hackathon</h2>
          </div>

          <div className="button-container">
            <button className="btn-glitch-fill">
              <span className="text">// Register Here</span>
              <span className="text-decoration"> _</span>
              <span className="decoration">⇒</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Background;