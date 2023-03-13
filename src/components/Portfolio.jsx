import React from "react";
import expenseTracker from "../assets/portfolio/expense_tracker.jpg";
import infoTracker from "../assets/portfolio/Info_Tracker.png";
import monsters from "../assets/portfolio/monsters_1.png";
import morse from "../assets/portfolio/Morse_1.png";
import styleZone from "../assets/portfolio/style_zone.png";
import php from "../assets/portfolio/php.png";
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: expenseTracker,
      name:'Expense Tracker Frontend',
      link:'https://github.com/nived1967/Expense_Tracker_Frontend.git'
    },
    {
      id: 2,
      src: expenseTracker,
      name:'Expense Tracker Backend(MySQL)',
      link:'https://github.com/nived1967/Expense_Tracker_Backend.git'
    },
    {
      id: 3,
      src: infoTracker,
      name:'Info Tracker Frontend',
      link:'https://github.com/nived1967/Info-Tracker.git'
    },
    {
      id: 4,
      src: infoTracker,
      name:'Info Tracker Backend(Mongo DB)',
      link:'https://github.com/nived1967/internship_task_backend.git'
    },
    {
      id: 5,
      src: monsters,
      name:'Monsters App',
      link:'https://github.com/nived1967/Monsters-App.git'
    },
    {
      id: 6,
      src: morse,
      name:'Morse Code Generator and Player',
      link:'https://github.com/nived1967/MorseCodeGenerator.git'
    },
    {
      id: 7,
      src: styleZone,
      name:'Style Zone(used Firebase for Authentication)',
      link:'https://github.com/nived1967/style-zone.git'
    },
    {
      id: 8,
      src: php,
      name:'PHP Crud Application',
      link:'https://github.com/nived1967/php_crud.git'
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full md:min-h-screen text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,name,link }) => (
            <div key={id} className=" shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <p>{name}</p>
              <div className="flex items-center justify-center">
                <button className=" w-1/2 px-6 py-0 m-4 duration-200 hover:scale-105" onClick={()=>{window.open(link)}}>
                  Code
                </button>
              </div>
            </div>
          ))}
          <p>Please check out the rest of my work in my github account given in Home page</p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;