import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="landing-name overflow-hidden">
      <div
        data-aos="flip-up"
        data-aos-duration="2000"
        className="admin-name text-white uppercase text-[50px] md:text-[120px] flex flex-col h-screen justify-center items-center"
      >
        <span>
          .<span className=" text-yellow-500 animate-ping">.</span>.
        </span>{" "}
        Hello i'm <br />
        <span className="text-[yellow] md:ml-[100px]">Hashir b</span>
        <p className="text-[10px] md:text-[20px]">
          Web developer // React specialist
        </p>
        <Link
          to='about'
          className="rounded-md bg-indigo-600 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-[30px] px-[40px]"
        >
          More
        </Link>
      </div>
    </div>
  );
}

export default Landing;
