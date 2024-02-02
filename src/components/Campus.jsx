import React from 'react'
import { FaCheck } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";


const Campus = () => {
  return (
    
    <div
      class="flex items-center justify-between p-4 ml-10 mr-10 space-x-14 "
      style={{ marginTop: "10rem" }}
    >
      <div
        class="w-1/2 pr-8 "
        style={{ marginTop: "-5rem", marginLeft: "8rem" }}
      >
        <h1 class="text-2xl font-bold mb-4">
          {" "}
          Welcome to Le Pieux International University
        </h1>
        <p class="mb-4">
          Certainly! Here's a slightly expanded version with additional
          information: Le Pieux University, established by Convention No. 001 on
          January 24, 2023, signed between the Government of the Democratic
          Republic of Congo, holds legal recognition as a nonprofit association
          under DRC law, as per Ministerial Order. Accredited fully by the
          Government of the Congo Republic under Ministerial Order No. 002/09
          dated April 9, 2024, the University is headquartered in Kalemie City,
          Democratic Republic of Congo, within the Kalemie District of
          Tanganyika Province. Expanding its academic endeavors beyond borders,
          Le Pieux University has extended its activities to Milan, Italy,
          solidifying its credibility at the global level. The university
          proudly hosts four faculties offering a range of undergraduate
          programs, thus enriching educational opportunities both locally and
          internationally. Le Pieux University has also expanded its activities
          to Milan, Italy, thereby enhancing its credibility at the global level
        </p>
        <div class="flex items-center">
          <button class="flex items-center px-4 py-2 bg-blue-500 text-white rounded">
            Read More{" "}
            <span class="ml-1">
              <IoIosArrowRoundForward />
            </span>
          </button>
        </div>
      </div>
      <div class="w-1/2">
        <img
          src="https://campus.websitelayout.net/img/content/about01.jpg"
          alt="Campus Image"
          class="w-95 rounded"
          style={{ height: "600px" }}
        ></img>
      </div>
    </div>
  );
}

export default Campus