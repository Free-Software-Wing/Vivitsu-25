import React, { useState } from "react";

const Timeline = () => {
  const timelineEvents = [
    {
      title: "Inauguration marks the official commencement of the Vivitsu Hackathon.",
      date: "Jan 30, 2026",
      description:
        "The event will begin with a welcome address, an overview of the hackathon objectives, rules, and timelines, followed by insights into the problem statements and evaluation criteria. This session sets the stage for innovation, collaboration, and an exciting competitive journey ahead.",
    },
    {
      title: "Round 1: First Evaluation (Idea Presentation Round)",
      date: "Jan 30, 2026",
      description:
        "The teams have to present their idea/approach of the problem statement they have chosen, to the jury. Points will be awarded based on the approach and presentation.",
    },
    {
      title: "Round 2: Second Evaluation (Prototype Demonstration Round)",
      date: "Jan 31, 2026",
      description:
        "This is the final round of evaluation and the teams have to present the working prototype of their idea to the jury. The jury will be evaluating all the prototypes and each domain will have a winner and runner up.",
    },
    {
      title: "Result Declaration",
      date: "Jan 31, 2026",
      description:
        "The final results will be announced on-site at the hackathon venue after the completion of Round 2. Winners and runner-ups will be declared domain-wise, based on the jury’s evaluation of the working prototypes. Selected teams will be awarded Winner and Runner-Up titles for each domain.",
    },
  ];

  const [expanded, setExpanded] = useState(Array(timelineEvents.length).fill(false));

  const toggleReadMore = (index) => {
    const updatedExpanded = [...expanded];
    updatedExpanded[index] = !updatedExpanded[index];
    setExpanded(updatedExpanded);
  };

  return (
    <div
      style={{
        color: "white",
        padding: "20px",
        fontFamily: "Arial",
        textAlign: "center",
      }}
    >
      <h1 style={{ color: "blue" }}>Hackathon Timeline</h1>
      <p style={{ fontSize: "22px", marginBottom: "20px" }}>
        Track the journey from your idea to grand finale
      </p>
      <div
        style={{
          position: "relative",
          width: "90%",
          margin: "auto",
        }}
      >
        <div
          className="timeline-line"
          style={{
            position: "absolute",
            left: "50%",
            width: "4px",
            background: "#b880ff",
            height: "100%",
            transform: "translateX(-50%)",
          }}
        ></div>
        {timelineEvents.map((event, index) => (
          <div
            key={index}
            className="timeline-item"
            style={{
              position: "relative",
              margin: "30px 0",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* Mobile Date */}
            <div className="mobile-date">
              <p>{event.date}</p>
            </div>

            {index % 2 === 0 ? (
              <>
                <div className="desktop-spacer" style={{ width: "23%" }}></div>
                <div
                  className="date-box desktop-date"
                  style={{
                    background: "#222",
                    padding: "10px",
                    borderRadius: "8px",
                    boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.2)",
                    width: "20%",
                    textAlign: "center",
                  }}
                >
                  <p style={{ fontSize: "18px", color: "#bbb" }}>{event.date}</p>
                </div>
                <div
                  className="event-card"
                  style={{
                    background: "#222",
                    padding: "10px",
                    borderRadius: "8px",
                    boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.2)",
                    width: "47%",
                  }}
                >
                  <h3 style={{ fontSize: "18px", color: "#ffcc00" }}>{event.title}</h3>
                  <p style={{ fontSize: "16px" }}>
                    {expanded[index] || event.description.length <= 100
                      ? event.description
                      : `${event.description.slice(0, 100)}...`}
                    {event.description.length > 100 && (
                      <span
                        onClick={() => toggleReadMore(index)}
                        style={{
                          color: "#b880ff",
                          cursor: "pointer",
                          marginLeft: "5px",
                        }}
                      >
                        {expanded[index] ? "Read Less" : "Read More"}
                      </span>
                    )}
                  </p>
                </div>
              </>
            ) : (
              <>
                <div
                  className="event-card"
                  style={{
                    background: "#222",
                    padding: "10px",
                    borderRadius: "8px",
                    boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.2)",
                    width: "47%",
                  }}
                >
                  <h3 style={{ fontSize: "18px", color: "#ffcc00" }}>{event.title}</h3>
                  <p style={{ fontSize: "16px" }}>
                    {expanded[index] || event.description.length <= 100
                      ? event.description
                      : `${event.description.slice(0, 100)}...`}
                    {event.description.length > 100 && (
                      <span
                        onClick={() => toggleReadMore(index)}
                        style={{
                          color: "#b880ff",
                          cursor: "pointer",
                          marginLeft: "5px",
                        }}
                      >
                        {expanded[index] ? "Read Less" : "Read More"}
                      </span>
                    )}
                  </p>
                </div>
                <div
                  className="date-box desktop-date"
                  style={{
                    background: "#222",
                    padding: "10px",
                    borderRadius: "8px",
                    boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.2)",
                    width: "20%",
                    textAlign: "center",
                  }}
                >
                  <p style={{ fontSize: "18px", color: "#bbb" }}>{event.date}</p>
                </div>
                <div className="desktop-spacer" style={{ width: "23%" }}></div>
              </>
            )}
            <div
              className="timeline-dot"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "12px",
                height: "12px",
                background: "#b880ff",
                borderRadius: "50%",
                transform: "translate(-50%, -50%)",
              }}
            ></div>
          </div>
        ))}

        <style jsx>{`
          @media (max-width: 768px) {
            .timeline-line {
              left: 20px !important;
              transform: none !important;
            }

            .timeline-item {
              flex-direction: column !important;
              margin: 40px 0 !important;
              align-items: flex-start !important;
            }

            .desktop-spacer,
            .desktop-date {
              display: none !important;
            }

            .mobile-date {
              display: block !important;
              position: absolute;
              left: -35px;
              top: -15px;
              background: #333;
              padding: 6px 12px;
              border-radius: 15px;
              font-size: 14px;
              color: #bbb;
              z-index: 2;
            }

            .event-card {
              width: 100% !important;
              margin: 10px 0 !important;
              text-align: left !important;
              position: relative;
              left: 30px;
            }

            .timeline-dot {
              left: 16px !important;
              top: 25px !important;
              width: 14px;
              height: 14px;
            }

            .read-more {
              font-size: 14px;
            }
          }

          @media (min-width: 769px) {
            .mobile-date {
              display: none !important;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default Timeline;