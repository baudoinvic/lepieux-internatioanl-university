import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from 'react-router-dom';

const Header = () => {
    
  return (
    <div className="header relative overflow-hidden" data-overlay-dark="6">
      <div class="slider flex transition-transform ease-in-out duration-500  ">
        <div class="slide min-w-full overflow-hidden relative ">
          <img
            src="https://preview.colorlib.com/theme/fox/images/bg_3.jpg.webp"
            alt="Image 1"
            class="w-full inset-0 bg-black opacity-65 "
            style={{ height: "1000px" }}
          ></img>
          <div class="text-overlay absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white ml-20">
            <h1 class="text-6xl font-bold mb-4 opacity-1">
              Le Pieux International University
            </h1>
            <p class="text-lg mb-4 font-bold">
              Welcome to Le Pieux International University in Congo Drc, where
              we explore
              <br></br>
              Welcome to Le Pieux International University in Africa, where we
              explore
            </p>
            <Link to="/Application">
              <button
                className="bg-blue-500 text-white px-8 py-4 rounded flex items-center mx-auto"
                style={{ marginTop: "2rem" }}
              >
                Learn More
                <span className="ml-1">
                  <IoIosArrowRoundForward className="text-2xl" />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header