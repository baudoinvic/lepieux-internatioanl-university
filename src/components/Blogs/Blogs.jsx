import React from 'react'
 import { IoIosArrowRoundForward } from "react-icons/io";
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Link } from 'react-router-dom';

const Blogs = () => {
  return (
    <>
      <Navbar />
      <div class="relative">
        <img
          class="w-full object-cover shadow-md"
          style={{ height: "600px" }}
          src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZyUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D"
          alt="Description"
        />

        <div
          class="absolute inset-0 flex flex-col items-center justify-center md:justify-start text-center md:text-left p-8 md:p-16 mt-8 md:"
          style={{ marginTop: "15rem" }}
        >
          <button class="px-4 py-4 text-4xl text-white font-bold rounded  md:mr-16">
            Our Blog
          </button>

          <div className="flex items-center">
            <IoIosArrowRoundForward className="text-white text-2xl font-bold" />
            <Link to="/Homepage">
              <span className="mr-2 text-lg text-white cursor-pointer font-bold">
                Home
              </span>
            </Link>

            <span className="ml-2 text-lg text-blue-500 font-bold">Blog</span>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-16  shadow-lg ml-10 mr-10">
        <div className="flex flex-col items-center mx-20  shadow-lg bg-white">
          <img
            src="https://preview.colorlib.com/theme/fox/images/image_2.jpg.webp"
            alt="Image 1"
            className="w-75 h-64 mb-4"
          ></img>
          <span className="text-lg font-bold">
            Skills To Develop Your Child Memory
          </span>
          <p className="text-gray-600">
            Far far away, behind the word mountains
            <br /> far from the countries Vokalia and Consonantia
            <br /> there live the blind texts.
          </p>
        </div>

        <div className="flex flex-col items-center mx-20 shadow-lg bg-white">
          <img
            src="https://preview.colorlib.com/theme/fox/images/image_4.jpg.webp"
            alt="Image 2"
            className="w-75 h-64 mb-4"
          ></img>
          <span className="text-lg font-bold">
            Skills To Develop Your Child Memory
          </span>
          <p className="text-gray-600">
            Far far away, behind the word mountains,
            <br /> far from the countries Vokalia and Consonantia
            <br /> there live the blind texts.
          </p>
        </div>

        <div className="flex flex-col items-center mx-20 shadow-lg bg-white">
          <img
            src="https://preview.colorlib.com/theme/fox/images/image_1.jpg.webp"
            alt="Image 3"
            className="w-75 h-64 mb-4"
          ></img>
          <span className="text-lg font-bold">
            Skills To Develop Your Child Memory
          </span>
          <p className="text-gray-600">
            Far far away, behind the word mountains
            <br /> far from the countries Vokalia and Consonantia
            <br /> there live the blind texts.
          </p>
        </div>
      </div>

      <div className="flex justify-between mt-16  shadow-lg">
        <div className="flex flex-col items-center mx-20  shadow-lg bg-white">
          <img
            src="https://preview.colorlib.com/theme/fox/images/image_2.jpg.webp"
            alt="Image 1"
            className="w-75 h-64 mb-4"
          ></img>
          <span className="text-lg font-bold">
            Skills To Develop Your Child Memory
          </span>
          <p className="text-gray-600">
            Far far away, behind the word mountains
            <br /> far from the countries Vokalia and Consonantia
            <br /> there live the blind texts.
          </p>
        </div>

        <div className="flex flex-col items-center mx-20 shadow-lg bg-white">
          <img
            src="https://preview.colorlib.com/theme/fox/images/image_4.jpg.webp"
            alt="Image 2"
            className="w-75 h-64 mb-4"
          ></img>
          <span className="text-lg font-bold">
            Skills To Develop Your Child Memory
          </span>
          <p className="text-gray-600">
            Far far away, behind the word mountains,
            <br /> far from the countries Vokalia and Consonantia
            <br /> there live the blind texts.
          </p>
        </div>

        <div className="flex flex-col items-center mx-20 shadow-lg bg-white">
          <img
            src="https://preview.colorlib.com/theme/fox/images/image_1.jpg.webp"
            alt="Image 3"
            className="w-75 h-64 mb-4"
          ></img>
          <span className="text-lg font-bold">
            Skills To Develop Your Child Memory
          </span>
          <p className="text-gray-600">
            Far far away, behind the word mountains
            <br /> far from the countries Vokalia and Consonantia
            <br /> there live the blind texts.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Blogs