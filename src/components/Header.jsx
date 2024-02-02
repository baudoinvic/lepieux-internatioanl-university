import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header relative overflow-hidden" data-overlay-dark="6">
      <div class="slider flex transition-transform ease-in-out duration-500  ">
        <div class="slide min-w-full overflow-hidden relative ">
          <img
            src="https://www.arizona.edu/admissions/static/4580c5666806287d987307a3049e3a10/bcf8a/uarizona-block-a-logo_1.webp"
            alt="Image 1"
            class="w-full inset-0 bg-black opacity-75  "
            style={{ height: "1000px" }}
          ></img>

          <div class="text-overlay absolute top-1/2 left-0 transform -translate-y-1/2 text-center text-white ml-20">
            <h1 class="text-6xl font-bold mb-4 opacity-1 text-left">
              Le Pieux International
              <br /> University
            </h1>
            <p class="text-lg mb-4 font-bold text-left">
              Welcome to Le Pieux International University
              <br></br>
              We're happy to connect with you in whatever way you're most
              comfortable
            </p>
            <a href="/Application" class="flex justify-start">
              <button class="bg-gray-800 text-white px-8 py-4 rounded flex items-center mt-8">
                Learn More
                <span class="ml-1">
                  <IoIosArrowRoundForward class="text-2xl" />
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
