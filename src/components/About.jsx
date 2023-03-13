import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-6">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-8">
          Hi,I am Nived Narayanan,I am a motivated and hard working student at
          College of Engineering Trivandrum.I am passionate about any kind of
          work that I do and I can guarantee that I will work day and night till
          the work given to me is completed or the problem I have to face is
          solved.
        </p>
        <br />
        <p className="text-xl">
          I have 3 years of experience in developing and designing
          softwares.Currently I am working on developing softwares using various
          technologies like React,Node,Express and Mongo.I also love problem
          solving and solving different kinds of logic puzzles.
        </p>
      </div>
    </div>
  );
};

export default About;
