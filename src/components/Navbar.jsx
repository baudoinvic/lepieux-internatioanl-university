import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";


const Navbar = () => {


       const [showAcademics, setShowAcademics] = useState(false);

       const toggleAcademics = () => {
         setShowAcademics(!showAcademics);
       };

  return (
    <div className="">
      <div className="navbar bg-white text-black shadow-md p-4 flex justify-between items-center ">
        <div className="up-side flex items-center space-x-40 ">
          <h1 className="text-xl font-bold">
            LE PIEUX<br></br>UNIVERSITY
          </h1>

          <div class="flex items-center space-x-4">
            <div class="flex items-center">
              <span class="mr-2 font-bold">Email</span>
              <div class="flex items-center">
                <MdOutlineEmail class="mr-1 text-blue-500" />
                <p class="font-light">lepieux@gmail.com</p>
              </div>
            </div>
            <div class="flex items-center">
              <span class="mr-2 font-bold">Call Us:</span>
              <div class="flex items-center">
                <IoCallOutline class="mr-1 text-blue-500" />
                <p class="font-light">+250782012138</p>
              </div>
            </div>
          </div>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Apply Now
        </button>
      </div>

      <div className="bg-blue-500 p-9 flex items-center space-x-8 justify-end cursor-pointer relative z-10">
        <Link to="/Homepage">
          <ul className="text-white">Home</ul>
        </Link>

        <Link to="/About">
          <ul className="text-white">About Us</ul>
        </Link>
        <ul className="text-white">Courses</ul>
        {/* Dropdown for Academics */}
        <div className="relative">
          <ul
            className="text-white flex items-center"
            onClick={toggleAcademics}
          >
            Academics <RiArrowDropDownLine className="ml-1" />
          </ul>
          {showAcademics && (
            <div
              className="absolute bg-white mt-1 rounded overflow-hidden shadow-md opacity-80"
              style={{ maxHeight: "550px" }}
            >
              <ul className="p-2 divide-y divide-blue-500">
                {/* List of academic links */}
                <li>
                  <Link
                    to="/electronics"
                    className="block py-2 px-4 hover:bg-blue-500 hover:text-white"
                  >
                    Electronics and Telecommunication
                  </Link>
                </li>
                <li>
                  <Link
                    to="/electrical"
                    className="block py-2 px-4 hover:bg-blue-500 hover:text-white"
                  >
                    Electrical and Renewable Energy
                  </Link>
                </li>

                <li>
                  <Link
                    to="/electronics"
                    className="block py-2 px-4 hover:bg-blue-500 hover:text-white"
                  >
                    Robotics and Mechatronics
                  </Link>
                </li>

                <li>
                  <Link
                    to="/electronics"
                    className="block py-2 px-4 hover:bg-blue-500 hover:text-white"
                  >
                    Computer science and Artificial intelligent
                  </Link>
                </li>

                <li>
                  <Link
                    to="/electronics"
                    className="block py-2 px-4 hover:bg-blue-500 hover:text-white"
                  >
                    Mechanics
                  </Link>
                </li>
                <li>
                  <Link
                    to="/electronics"
                    className="block py-2 px-4 hover:bg-blue-500 hover:text-white"
                  >
                    Civil engineering and Architecture
                  </Link>
                </li>
                <li>
                  <Link
                    to="/electronics"
                    className="block py-2 px-4 hover:bg-blue-500 hover:text-white"
                  >
                    petroleum
                  </Link>
                </li>
                <li>
                  <Link
                    to="/electronics"
                    className="block py-2 px-4 hover:bg-blue-500 hover:text-white"
                  >
                    Agronomy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/electronics"
                    className="block py-2 px-4 hover:bg-blue-500 hover:text-white"
                  >
                    Economics and business studies
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
        <ul className="text-white">Blog</ul>
        <Link to="/Contact">
          <ul className="text-white">Contact Us</ul>
        </Link>
      </div>
    </div>
  );
}

export default Navbar