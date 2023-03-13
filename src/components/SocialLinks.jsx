import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { AiOutlineTwitter } from "react-icons/ai";
import { GrInstagram } from "react-icons/gr";
import { RiFacebookCircleFill } from "react-icons/ri";
import { BsFillPersonLinesFill } from "react-icons/bs";
const SocialLinks = () => {
    const links=[
        {id:1,child:(
            <>
              LinkedIn <FaLinkedin size={30}/>
            </>
        ),
        href:'https://www.linkedin.com/in/nived-narayanan-419309203',
        style:'rounded-tr-mid'
    },
    {id:2,child:(
        <>
            GitHub <FaGithub size={30}/>
        </>
    ),
    href:'http://www.github.com/nived1967',
},
{id:3,child:(
    <>
      Gmail <SiGmail size={30}/>
    </>
),
href:'mailto:nivednarayanan67@gmail.com',
},
{id:4,child:(
    <>
      Resume <BsFillPersonLinesFill size={30}/>
    </>
),
href:'https://drive.google.com/file/d/1dJTi6sFWs4ij2hys77IFc7peo6NbWd8t/view?usp=share_link',
},
{id:5,child:(
    <>
      Twitter <AiOutlineTwitter size={30}/>
    </>
),
href:'https://twitter.com/Nived2002',
},
{id:6,child:(
    <>
      Instagram <GrInstagram size={30}/>
    </>
),
href:'https://www.instagram.com/_nived.n/?hl=en',
},
{id:7,child:(
  <>
  Facebook <RiFacebookCircleFill size={30}/>
  </>
  ),
  href:'https://www.facebook.com/people/Nived-Narayanan/100012495019723/',
  style:'rounded-br-mid'
},
    ];
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
      {links.map(({id,child,href,style})=>(
        <li key={id} className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 ${style}`}>
          <a href={href} className="flex justify-between items-center w-full text-white">
            {child}
          </a>
        </li>
      ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
