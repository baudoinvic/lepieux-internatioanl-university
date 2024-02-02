import React from "react";
import { RiBuilding2Line } from "react-icons/ri";
import { FaDesktop } from "react-icons/fa";
import { SiLinear } from "react-icons/si";
import { GiWorld } from "react-icons/gi";

const Courses = () => {
  return (
    <div className="courses ml-10 mr-10">
      <div class="flex flex-col left justify-left mt-16 ml-10 mr-10">
        <span class="block text-left text-4xl font-bold text-gray-800 mb-4 ml-12">
          Ways to Attend the <br />
          University of le pieux
        </span>
        <span class="block text-left text-1xl  mb-4 ml-12 mt-10">
          World-renowned academics – wherever you are.
          <br /> Pursue an education with international recognition, incredible
          research opportunities
          <br /> and benefits that continue long after you graduate.
        </span>
      </div>

      {/*first row*/}

      <div class="">
        <div class="flex flex-col md:flex-row md:justify-left items-left space-y-16 md:space-x-8 md:space-y-0 p-10 mt-10">
          <div class="transition-transform transform hover:scale-105 cursor-pointer mx-16">
            <RiBuilding2Line className="text-8xl text-blue-500" />
            <span className="text-xl font-bold mb-4">Main Campus</span>
            <p className="mt-4">
              Hundreds of degree choices
              <br /> at our campus
            </p>
          </div>

          <div class="transition-transform transform hover:scale-105 cursor-pointer mx-16">
            <FaDesktop className="text-8xl text-blue-500" />
            <span className="text-xl font-bold mb-4">Online</span>
            <p className="mt-4">Your education on your schedule</p>
          </div>

          <div class="transition-transform transform hover:scale-105 cursor-pointer mx-16">
            <SiLinear className="text-8xl text-blue-500" />
            <span className="text-xl font-bold mb-4">Near Your Network</span>
            <p className="mt-4">Le pieux university degree across the state</p>
          </div>

          <div class="transition-transform transform hover:scale-105 cursor-pointer mx-16 ml-10">
            <GiWorld className="text-8xl text-blue-500" />
            <span className="text-xl font-bold mb-4">International</span>
            <p className="mt-4">Worldwide campus and abroad programs</p>
          </div>
        </div>
      </div>
      {/* Second row */}
    </div>
  );
};

export default Courses;
