import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
 import { IoIosArrowRoundForward } from "react-icons/io";
 import { FaEye, FaCog, FaHeart } from "react-icons/fa";
 import { PiLampBold } from "react-icons/pi";
import { SiYamahamotorcorporation } from "react-icons/si";
import Blog from "../Blog";

const About = () => {
  return (
    <div class="">
      <Navbar />
      <div class="relative">
        <img
          class="w-full object-cover shadow-md"
          style={{ height: "550px" }}
          src="https://campus.websitelayout.net/img/bg/page-title.jpg"
          alt="Description"
        />

        <div
          class="absolute inset-0 flex flex-col items-center justify-center md:justify-start text-center md:text-left p-8 md:p-16 mt-8 md:"
          style={{ marginTop: "15rem" }}
        >
          <button class="px-4 py-4 text-4xl text-white font-bold rounded  md:mr-16">
            ABOUT US
          </button>

          <div className="flex items-center">
            <IoIosArrowRoundForward className="text-white text-2xl font-bold" />
            <span className="mr-2 text-lg text-white cursor-pointer font-bold">
              Home
            </span>

            <span className="ml-2 text-lg text-blue-500 font-bold">
              About us
            </span>
          </div>
        </div>
      </div>

      <div class="flex flex-col md:flex-row md:mr-3 md:ml-3 md:mt-7 shadow-md">
        <div class="w-full md:w-1/2 p-8">
          <h1 class="text-gray-800 text-3xl font-bold mb-4">
            Welcome to Le Pieux International University
          </h1>
          <p class="mb-4 text-base text-gray-500">
            Certainly! Here's a slightly expanded version with additional
            information: Le Pieux University, established by Convention No. 001
            on January 24, 2023, signed between the Government of the Democratic
            Republic of Congo, holds legal recognition as a nonprofit
            association under DRC law, as per Ministerial Order. Accredited
            fully by the Government of the Congo Republic under Ministerial
            Order No. 002/09 dated April 9, 2024, the University is
            headquartered in Kalemie City, Democratic Republic of Congo, within
            the Kalemie District of Tanganyika Province. Expanding its academic
            endeavors beyond borders, Le Pieux University has extended its
            activities to Milan, Italy, solidifying its credibility at the
            global level. The university proudly hosts four faculties offering a
            range of undergraduate programs, thus enriching educational
            opportunities both locally and internationally. Le Pieux University
            has also expanded its activities to Milan, Italy, thereby enhancing
            its credibility at the global level. It comprises four faculties
            offering undergraduate programs.
          </p>
          <div className="text-blue-500">
            <p>Faculty of Computing and Information Sciences</p>
            <p>Fuculty of Engineering</p>
            <p>Faculty of Petroleum Engineering</p>
            <p>Faculty of Agricultural Sciences</p>
            <p>Faculty of Economic Sciences and Management</p>
          </div>
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
      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 p-10 mt-16">
        <div className="bg-white p-6 rounded-lg shadow-md  transition-transform transform hover:scale-105 cursor-pointer">
          <FaEye className="text-gray-800 text-4xl mb-4" />
          <span className="text-xl font-bold mb-4">Our Vision</span>
          <p className="text-gray-500">
            Our vision at Le Pieux International University is to play a pivotal
            role in national development by nurturing a generation of
            well-educated citizens who possess the skills and knowledge to
            tackle the complexities of developmental challenges. We place
            significant emphasis on quality education,  Contribute to the
            national development by providing well-educated citizens capable of
            handling developmental challenges.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer">
          <SiYamahamotorcorporation className="text-gray-800 text-4xl mb-4" />
          <span className="text-xl font-bold mb-4">Value</span>
          <p className="text-gray-500">
            Our team of highly skilled hardware engineers is dedicated to
            crafting state-of-the-art devices that not only meet but exceed
            industry standards. From concept to prototype to final production we
            leverage the latest technologies to design robust and efficient
            hardware solutions. We ensure that our hardware stands out in terms
            of performance, durability, and user experience.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer">
          <PiLampBold className="text-gray-800 text-4xl mb-4" />
          <span className="text-xl font-bold mb-4">Our Mission</span>
          <p className="text-gray-500">
            The core mission of Le Pieux International University is to foster a
            culture of intellectual curiosity and lifelong learning. Through our
            commitment to excellence in education, scientific inquiry, and
            technological innovation, we aim to empower individuals to become
            critical thinkers, problem solvers, and leaders in their respective
            fields.
          </p>
        </div>
      </div>
       <Blog />
      <Footer />
    </div>
  );
};

export default About;
