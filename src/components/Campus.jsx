import React from 'react'
import { FaCheck } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";


const Campus = () => {
  return (
    <div
      class="flex items-center justify-between p-4 ml-10 mr-10"
      style={{ marginTop: "10rem" }}
    >
      <div
        class="w-1/2 pr-8 "
        style={{ marginTop: "-5rem", marginLeft: "8rem" }}
      >
        <h1 class="text-2xl font-bold mb-4">Welcome to Our Campus</h1>
        <p class="mb-4">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown<br></br> printer took a galley of type and
          scrambled unchanged. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown<br></br> printer took
          a galley of type and scrambled unchanged. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          <br></br> printer took a galley of type and scrambled unchanged.
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