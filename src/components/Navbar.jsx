import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Navbar = () => {
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

      <div className="bg-blue-500 p-9 flex items-center space-x-8 justify-end cursor-pointer">
        <ul className="text-white">Home</ul>
        <Link to="/About">
          <ul className="text-white">About Us</ul>
        </Link>

        <ul className="text-white">Courses</ul>
        <ul className="text-white">Staff</ul>
        <ul className="text-white">Blog</ul>
        <ul className="text-white">Contact</ul>
      </div>
    </div>
  );
}

export default Navbar