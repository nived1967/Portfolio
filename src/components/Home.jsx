import React from "react";
import ProfilePic from "../assets/profilepic.jpg";
import {AiOutlineArrowRight} from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";
const Home = () => {
  const links=[
    {id:1,child:(
        <>
        <FaLinkedin size={30}/>
        </>
    ),
    href:'https://www.linkedin.com/in/nived-narayanan-419309203',
},
{id:2,child:(
    <>
      <FaGithub size={30}/>
    </>
),
href:'http://www.github.com/nived1967',
},
{id:3,child:(
<>
<SiGmail size={30}/>
</>
),
href:'mailto:nivednarayanan67@gmail.com',
},
{id:4,child:(
<>
<BsFillPersonLinesFill size={30}/>
</>
),
href:'https://drive.google.com/file/d/1dJTi6sFWs4ij2hys77IFc7peo6NbWd8t/view?usp=share_link',
},
{id:5,child:(
<>
<AiOutlineTwitter size={30}/>
</>
),
href:'https://twitter.com/Nived2002',
},
];
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have 3 years of experience in building and
            designing software using various tech stacks and I also love problem solving and logic puzzles.
          </p>
          <div>
            <Link to="portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">Portfolio
            <span className="group-hover:rotate-90 duration-300"><AiOutlineArrowRight size={25}/></span>
            </Link>
          </div>
          <div>
          <ul className="flex flex-row">
            {links.map(({id,child,href})=>(
              <li key={id} className="px-4 mt-8 hover:scale-110 duration-300 text-white">
              <a href={href}>
              {child}
              </a>
              </li>
            ))}
            </ul>
          </div>
        </div>
        <div>
            <img src={ProfilePic} alt="my profile" className="rounded-2xl mx-auto w-2/3 md:w-full"/>
        </div>
      </div>
    </div>
  );
};

export default Home;
