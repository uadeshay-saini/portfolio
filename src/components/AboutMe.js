import React from "react";

const AboutMe = () => {
  return (
    <div name="aboutme" className="bg-gray-100 section  border-b py-8">
      <section className=" text-1xl rounded-md container max-w-2xl mx-auto m-8 py-8">
        <div className="container mx-auto px-2 pt-4 pb-12 text-gray-800">
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transition-shadow  duration-300 hover:bg-gray-100 hover:scale-103  hover:shadow-xl hover:transition-duration-1000 ease-in-out ">
            <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
              A little bit About Me
            </h3>
            UADESHAY SAINI, a native of Haryana, holds a B.Tech degree from UIET
            MDU Rohtak (Class of 2020). After graduation, the challenges posed
            by the COVID-19 pandemic prompted a pause in my professional
            journey. During this time, from 2021 to mid-2022, I dedicated myself
            to preparing for Tech-Govt./Institutions exams. In 2023, I
            transitioned into the field of web development, focusing on
            mastering the MERN stack. Since then, I've been actively engaged in
            continuous learning, honing my skills, and successfully crafting
            various web projects.
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
