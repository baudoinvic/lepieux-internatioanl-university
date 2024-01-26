import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
 import { IoIosArrowRoundForward } from "react-icons/io";
import Blog from "../Blog";

const About = () => {
  return (
    <div class="">
      <Navbar />
      <div class="relative">
        <img
          class="w-full object-cover shadow-md"
          style={{ height: "450px" }}
          src="https://campus.websitelayout.net/img/bg/page-title.jpg"
          alt="Description"
        />

        <div class="absolute inset-0 flex flex-col items-center justify-center md:justify-start text-center md:text-left p-8 md:p-16 mt-8 md:mt-16">
          <button class="px-4 py-4 text-4xl text-white font-bold rounded  md:mr-16">
            ABOUT US
          </button>

          <div className="flex items-center">
            <IoIosArrowRoundForward className="text-white text-lg" />
            <span className="mr-2 text-lg text-white cursor-pointer">Home</span>

            <span className="ml-2 text-lg text-blue-500">About us</span>
          </div>
        </div>
      </div>

      <div class="flex flex-col md:flex-row md:mr-3 md:ml-3 md:mt-7 shadow-md">
        <div class="w-full md:w-1/2 p-8">
          <h1 class="text-gray-800 text-3xl font-bold mb-4">
            Welcome to Our Campus
          </h1>
          <p class="mb-4 text-base text-gray-500">
            Welcome to FabTech Hub, where innovation meets excellence! As a
            dynamic and forward-thinking technology company, we specialize in
            the seamless integration of hardware, software, and IoT solutions.
            Our Vision: At FabTech Hub, we envision a connected world where
            cutting-edge technology enhances the way we live, work, and
            interact. Our goal is to be at the forefront of this transformation,
            driving innovation through the convergence of hardware, software,
            and IoT. Expertise in Hardware Design: Our team of highly skilled
            hardware engineers is dedicated to crafting state-of-the-art devices
            that not only meet but exceed industry standards. From concept to
            prototype to final production, we leverage the latest technologies
            to design robust and efficient hardware solutions. We ensure that
            our hardware stands out in terms of performance, durability, and
            user experience.
          </p>
        </div>
        <div
          class="w-full md:w-1/2 mt-7 flex justify-center items-center"
          style={{ marginTop: "2rem" }}
        >
          <div class="aspect-w-16 aspect-h-9">
            <img src="https://campus.websitelayout.net/img/content/about01.jpg"></img>
          </div>
        </div>
      </div>
      <Blog />
      <Footer />
    </div>
  );
};

export default About;
