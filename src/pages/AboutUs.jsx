import React from 'react'
import { FaTrophy, FaMedal, FaStar, FaAward } from "react-icons/fa";
import "./AboutUs.css";


const achievements = [
  { year: "2010", title: "Best Student Chapter Award", icon: <FaTrophy /> },
  { year: "2020", title: "Best Accredited Student Branch Award", icon: <FaAward /> },
  { year: "2020", title: "CSI Longest Continuous Student Branch Coordinator Award", icon: <FaStar /> },
  { year: "2020", title: "Best Committed Student Branch Activist Award", icon: <FaMedal /> },
];
const AboutUs = () => {
  return (
    <div className="bg-gray-100">
    <div className="about-us ">
      <div className="about-us-vivitsu m-10 rounded-4xl bg-blue-300 p-10">
        <img src="images/logo.png" alt="" className="vivitsu-logo" />
        <h1 className="text-3xl text-center">VIVITSU</h1>

        <div className="about ">
          The Free Software Wing of GRIET College is proud to announce its
          upcoming 24-hour hackathon, to be held on the 28th and 29th of April.
          The hackathon is open to all students, regardless of their major or
          level of expertise. It is designed to provide a platform for students
          to showcase their coding skills, collaborate with their peers, and
          develop innovative solutions.
          <br />
          The hackathon will start at 10 am on the 28th of April and continue
          for 24 hours, until 10 am on the 29th of April. Participants can work
          on any project they choose from the 10 problem statements provided.
          They can work in teams of up to four people. Participants will receive
          extra points in the evaluation if the use of free softwares is
          included in their prototype.
          <br />
          <br />
          <h3 className="text-3xl">Benefits of VIVITSU </h3>
          <ul className="benefits">
            <li>👉 24 hr knowledge and fun</li>
            <li>👉 Recreational activities</li>
            <li>👉 Goodies</li>
            <li>👉 Tasty food😋</li>
            <li>👉 Free beverages🥤</li>
            <li>👉 Participation certificate</li>
            <li>👉 1,00,000 prize pool🤩</li>
            <li>👉 Merit certificate for winners</li>
          </ul>
          <ul className="notice m-auto text-center">
            <li>What not!!!</li>
            <li>An opportunity not to be missed!!</li>
            <li>
              <a role="link" aria-disabled="true" className="text-red-600">
                Register
              </a>{" "}
              ASAP!!!
            </li>
          </ul>
        </div>
      </div>
      <div className="about-us-fsw m-10 rounded-4xl bg-red-300 p-10">
        <div className="heading text-3xl text-center">
          <img src="images/logo.png" alt="" className="fsw-logo" />
          <h1>FSW</h1>
        </div>
        <div className="about">
          Free Software Wing (FSW) is a lively technical student body of GRIET.
          FSW-GRIET is on a mission to create profound awareness about Free and
          Open Source Softwares in the careers of students and faculty of GRIET.
          Our student body conducts interactive events, insightful seminars,
          hands-on workshops and many more programs as part of the awareness
          campaign for Free and Open Source Softwares. We provide participants
          and attendees of our events with valuable knowledge that can be
          leveraged to advance their technological pursuits.
          <br />
          <br />
          <b>Some of the main objectives of FSW are:</b>
          <br />
          * To promote the use and benefits of FOSS among students and the
          community
          <br />
          * To encourage students to contribute to the FOSS community through
          coding and other activities
          <br />
          * To provide a platform for students to learn and collaborate on FOSS
          projects
          <br />* To foster a culture of innovation, collaboration, and
          creativity among students.
        </div>
      </div>
      <div className="py-16 m-4 text-center">
      <h2 className="text-4xl font-bold text-red-700 mb-8">Our Achievements</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="relative bg-white p-6 rounded-xl shadow-xl border-t-4 border-red-600 hover:scale-105 transition-transform duration-300"
          >
            <div className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 w-12 h-12 flex items-center justify-center text-white bg-blue-600 rounded-full shadow-lg text-2xl">
              {achievement.icon}
            </div>
            <p className="text-yellow-600 font-semibold mt-6">{achievement.year}</p>
            <h3 className="text-lg font-semibold text-gray-800 mt-2">{achievement.title}</h3>
          </div>
        ))}
      </div>
    </div>
    </div>
    </div>
  );
};

export default AboutUs
