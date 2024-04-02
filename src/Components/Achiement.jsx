import React from "react";
import achievment from "../assets/images/achieve.jpg";
import education from "../assets/images/education.jpg"
import certificate from "../assets/images/certification.jpg"
import { Link } from "react-router-dom";

function Achiement() {
  return (
    <div>
      <div className="achiements flex lg:flex-row flex-col gap-5 lg:gap-0 items-center w-screen justify-around lg:animate-bounce hover:animate-none">
        {/* ----------Achiement - Section------------- */}
        <div>
          <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="sm:flex sm:items-center px-6 py-4">
              <img
                className="block mx-auto sm:mx-0 sm:flex-shrink-0 h-16 sm:h-24 rounded-full"
                src={achievment}
                alt="User Avatar"
              />
              <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
                <p className="text-xl font-bold">Achievements</p>
                <div className="mt-4">
                <Link to="Achievement" className="text-blue-500 hover:text-blue-600">
                Show Me
                </Link>
                    
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* -----------Cerificate - Section------------- */}

        <div>
          <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="sm:flex sm:items-center px-6 py-4">
              <img
                className="block mx-auto sm:mx-0 sm:flex-shrink-0 h-16 sm:h-24 rounded-full"
                src={certificate}
                alt="User Avatar"
              />
              <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
                <p className="text-xl font-bold">Certificates</p>
                <div className="mt-4">
                  <a href="#" className="text-blue-500 hover:text-blue-600">
                    Show Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* -----------Education -  Section------------- */}

        <div>
          <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="sm:flex sm:items-center px-6 py-4">
              <img
                className="block mx-auto sm:mx-0 sm:flex-shrink-0 h-16 sm:h-24 rounded-full"
                src={education}
                alt="User Avatar"
              />
              <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
                <p className="text-xl font-bold">Education</p>
                <div className="mt-4">
                  <a href="#" className="text-blue-500 hover:text-blue-600">
                    Show Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achiement;
