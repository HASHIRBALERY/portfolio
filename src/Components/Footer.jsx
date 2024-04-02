import React from 'react'
import "../index.css"
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";






function Footer() {
  return (
    <div className='footer'>
        <div  data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom"data-aos-easing="ease-out-cubic"
     data-aos-duration="1500" className='flex pt-[20px] justify-center'>
            <a href="https://www.instagram.com/hashir_balery?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
            <FaSquareInstagram className=' social-icons rounded-full md:text-[30px] text-[20px]' />
            </a>
            <a href="#">
            <FaFacebookSquare className='social-icons rounded-full md:text-[30px] text-[20px]' />
            </a>
            <a href="https://www.linkedin.com/in/hashir-balery-861181207/">
            <FaLinkedin className='social-icons rounded-full md:text-[30px] text-[20px]' />
            </a>
            <a href="#">
            <IoLogoWhatsapp className='social-icons rounded-full md:text-[30px] text-[20px]' />
            </a>
            <a href="#">
            <FaTwitter className='social-icons rounded-full md:text-[30px] text-[20px]' />
            </a>
            <a href="https://github.com/HASHIRBALERY">
            <FaGithubSquare className='social-icons rounded-full md:text-[30px] text-[20px]' />
            </a>
        </div>
    </div>
  )
}

export default Footer