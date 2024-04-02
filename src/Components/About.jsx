import React from 'react'
import "../index.css"
import myImage from "../assets/images/mine.jpg"

function About() {
  return (
    <div className='about overflow-hidden' id='about'>
        <p className='text-black text-[90px] flex justify-center'>...</p>
        <div className='flex-col md:flex md:flex-row justify-center h-screen items-center content'>
            <div data-aos="flip-down" data-aos-duration="2000" className='uppercase pt-[5rem] w-full md:w-1/2 flex flex-col justify-center  items-center'>
                <p className='text-[190px] text-[yellow]'>01</p>
                <p className='text-[40px]'>About Me</p>
            </div>
            <div className=' w-full md:w-1/2 flex flex-col items-center '>
                <img src={myImage} data-aos="flip-left" data-aos-duration="1500" className='rounded-full w-[100px] h-[100px] lg:w-[250px] lg:h-[250px] object-cover' alt="mypic" />
                <p className='text-[18px] px-7 text-justify mt-[25px] '>I'm a front end developer with a passion for creating dynamic and responsive web applications . I'm constantly looking for ways to integrate ML algorithms into my projects and improve the user experience .with my skills and experience.</p>
            </div>
        </div>
    </div>
  )
}

export default About