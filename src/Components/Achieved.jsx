import React from 'react'
import img from "../assets/images/trophy.jpg"
import "../index.css"
import Footer from './Footer'

function Achieved() {
  return (
    <div>
        <h1 className='text-center font-extrabold mt-8 head'>ACHIEVEMENTS</h1>
        <div className='lg:h-screen w-full flex justify-center flex-col md:flex-row'>
        <div>
        <img className=" mx-auto md:mx-16 my-20 rounded-2xl w-[300px] h-[300px]" src={img} alt="User Avatar" />
        </div>
        <div className='mx-16 my-20 list-sec leading-loose'>
            <ul>
                <li><h1>FUNDUMENTALS OF DIGITAL MARKETING </h1>(Google) </li>
                <li><h1>CROSS COUNTRY 20KM</h1>(Kerala State Level)</li>
                <li><h1>100M Huddles</h1>(Dristrict Level)</li>
                <li><h1>PAIKA LEVEL FOOTBALL</h1>(Under Rajiv Gandi Khel Abhiyan)</li>
                <li><h1>VANCHIPPATTU</h1>(Parappanangadi Sub District)</li>
            </ul>
        </div>
    </div>
    <Footer />
    </div>
    
  )
}

export default Achieved