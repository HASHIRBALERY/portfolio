import React from "react";
import "../index.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJava,
  FaRegFileWord,
  FaRegFileExcel,
} from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { RiBootstrapLine } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";

function Skill() {
  return (
   <>
     <div className="skill-sec flex flex-col-reverse md:flex-row items-center h-screen">
      <div data-aos="zoom-in"data-aos-easing="linear"
     data-aos-duration="1000" className="icons uppercase w-full md:w-1/2 ">
        <div className=" p-9">
          <div className="grid grid-cols-3 ">
            <div className="m-3 p-2">
              <h1 className="mb-3">HTML 5</h1>
              <FaHtml5 className="text-[50px]" />
            </div>
            <div className="m-3 p-2">
              <h1 className="mb-3">CSS-3</h1>
              <FaCss3Alt className="text-[50px]" />
            </div>
            <div className="m-3 p-2">
              <h1 className="mb-3">JAVASCRIPT</h1>
              <TbBrandJavascript className="text-[50px]" />
            </div>
            <div className="m-3 p-2">
              <h1 className="mb-3">BOOTSTRAP</h1>
              <RiBootstrapLine className="text-[50px]" />
            </div>
            <div className="m-3 p-2">
              <h1 className="mb-3">TAILWIND</h1>
              <SiTailwindcss className="text-[50px]" />
            </div>
            <div className="m-3 p-2">
              <h1 className="mb-3">REACT </h1>
              <FaReact className="text-[50px]" />
            </div>
            <div className="m-3 p-2">
              <h1 className="mb-3">JAVA</h1>
              <FaJava className="text-[50px]" />
            </div>
            <div className="m-3 p-2">
              <h1 className="mb-3">WORD</h1>
              <FaRegFileWord className="text-[50px]" />
            </div>
            <div className="m-3 p-2">
              <h1 className="mb-3">EXCEL</h1>
              <FaRegFileExcel className="text-[50px]" />
            </div>
          </div>
        </div>
      </div>
      <div data-aos="zoom-out"data-aos-easing="linear"
     data-aos-duration="1000" className="uppercase w-full md:w-1/2 flex flex-col items-center">
        <p className="text-[190px] text-[yellow]">02</p>
        <p className="text-[40px]">My Skills</p>
      </div>
    </div>
    <a href="https://drive.google.com/file/d/1YR5sh2QpglNt4pqbk7MBusXN6oHmaFaO/view?usp=drive_link">
    <div className="btn-sec flex justify-center ">
        <button className="text-center btn rounded-lg font-bold mt-9 md:mt-0">Download Resume</button>
    </div>
    </a>
   </>
  );
}

export default Skill;
