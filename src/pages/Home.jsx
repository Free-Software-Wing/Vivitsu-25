import React from "react";
import TestimonialSlider from "../components/TestimonialSlider";

const Home = () => {
  return (
    <div className="flex flex-col items-center py-10 px-5 mt-20 bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-900">FSW GRIET</h1>
      <p className="text-gray-600 mt-2">
        Empowering Technology Professionals Since 2004
      </p>
      <div className="WhoWeAre">
        <div className="mt-6 bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-gray-900 text-center">
            Our Mission
          </h2>
          <p className="text-gray-700 mt-4">
            The Free Software Wing (FSW) GRIET is dedicated to promoting free
            and open-source software (FOSS) by empowering students with
            technical skills, ethical computing values, and a collaborative
            mindset. Our mission is to advocate digital freedom, encourage
            hands-on learning, and foster a culture of open innovation. Through
            workshops, hackathons, and real-world projects, we equip students
            with problem-solving abilities while reinforcing the principles of
            transparency, accessibility, and community-driven development. By
            addressing societal and technological challenges with FOSS, we aim
            to create responsible technologists who contribute to open-source
            communities and drive impactful, inclusive innovations for a better
            future.
          </p>
        </div>
        <div className="mt-6 bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-gray-900 text-center">
            Our Vision
          </h2>
          <p className="text-gray-700 mt-4">
            The vision of the Free Software Wing (FSW) GRIET is to create a
            thriving ecosystem where free and open-source software (FOSS) drives
            innovation, inclusivity, and digital freedom. We aim to build a
            community where students, developers, and researchers collaborate,
            contribute, and grow through open knowledge sharing. By fostering a
            culture of transparency, ethical computing, and technological
            empowerment, we envision a future where FOSS solutions bridge
            societal gaps, enhance accessibility, and drive sustainable
            progress. Our goal is to nurture leaders in open-source development,
            equipping them with skills to create impactful, community-driven
            solutions that make technology truly free for all.
          </p>
        </div>
      </div>
      <div className="TestimonialSlider">
        <TestimonialSlider />
      </div>
      <div className="OurTeam m-6">
        <section className="mt-6 bg-white shadow-lg rounded-2xl p-8">
          <div className="container text-center mx-auto flex flex-col md:flex-row items-center justify-around">
            <h2 className="text-4xl font-bold mb-6 md:mb-0">OUR TEAM</h2>
            <div className="bg-white text-black rounded-lg shadow-lg w-full md:w-1/2">
              <img src="group_pic.jpg" alt="Our Team" className="rounded-lg" />
            </div>
          </div>
        </section>
      </div>
      <div className="cards flex flex-wrap justify-center text-center mt-20">
        <div className="m-6 bg-white shadow-lg rounded-2xl p-6 w-100">
          <h2 className="text-2xl font-semibold text-gray-900">Events</h2>
          <p className="text-gray-700 mt-4 ">hello world</p>
        </div>
        <div className="m-6 bg-white shadow-lg rounded-2xl p-6 w-100">
          <h2 className="text-2xl font-semibold text-gray-900">Events</h2>
          <p className="text-gray-700 mt-4 ">hello world</p>
        </div>
        <div className="m-6 bg-white shadow-lg rounded-2xl p-6 w-100">
          <h2 className="text-2xl font-semibold text-gray-900">Events</h2>
          <p className="text-gray-700 mt-4 ">hello world</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
