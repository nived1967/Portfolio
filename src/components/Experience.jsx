import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import node from "../assets/node.png";
import C from "../assets/C.png";
import cpp from "../assets/c++.png";
import python from "../assets/python.png";
import java from "../assets/java.png";
import vue from "../assets/vue.png";
import mysql from "../assets/mysql.png";
import mongo from "../assets/mongo.png";
import php from "../assets/php-main.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
        id: 5,
        src: C,
        title: "C Language",
        style: "shadow-blue-600",
    },
    {
        id: 6,
        src: mysql,
        title: "MySQL",
        style: "shadow-blue-600",
    },
    {
        id: 7,
        src: cpp,
        title: "C++",
        style: "shadow-blue-600",
      },
    {
      id: 8,
      src: node,
      title: "Node JS",
      style: "shadow-green-600",
    },
    {
      id: 9,
      src: python,
      title: "Python",
      style: "shadow-blue-600",
    },
    {
      id: 10,
      src: java,
      title: "Java",
      style: "shadow-orange-600",
    },
    {
        id: 11,
        src: mongo,
        title: "Mongo DB",
        style: "shadow-green-600",
    },
    {
        id: 12,
        src: php,
        title: "PHP",
        style: "shadow-purple-600",
    },
    {
        id: 13,
        src: vue,
        title: "Vue JS",
        style: "shadow-green-600",
    },
    {
      id: 14,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
        id: 15,
        src: nextjs,
        title: "Next JS",
        style: "shadow-gray-400",
      },
    {
      id: 16,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies that I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8  px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;