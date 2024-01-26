  import React from 'react'
  
 import { CiFacebook } from "react-icons/ci";
 import { FaInstagram } from "react-icons/fa";
 import { FaLinkedin } from "react-icons/fa";
 import { IoCallOutline } from "react-icons/io5";
 import { CiLocationOn } from "react-icons/ci";
 import { AiOutlineMail } from "react-icons/ai";
 import { MdOutlineLocationOn } from "react-icons/md";
 import { IoIosArrowRoundForward } from "react-icons/io";


  const Footer = () => {
    return (
      <footer class="bg-black p-8 mt-8">
        <div class="container mx-auto">
          <div class="flex flex-wrap justify-center">
            <div class="w-full md:w-1/2 lg:w-1/4">
              <h2 class="text-white  mb-4 text-2xl">Quik Links</h2>

              <nav>
                <ul class="text-blue-500">
                  <li class="flex items-center mb-4">
                    <IoIosArrowRoundForward className="text-white" />
                    <a href="" class="ml-2">
                      Home
                    </a>
                  </li>
                  <li class="flex items-center mb-4">
                    <IoIosArrowRoundForward className="text-white" />
                    <a href="" class="ml-2">
                      About us
                    </a>
                  </li>
                  <li class="flex items-center mb-4">
                    <IoIosArrowRoundForward className="text-white" />
                    <a href="" class="ml-2">
                      Staff
                    </a>
                  </li>
                  <li class="flex items-center mb-4">
                    <IoIosArrowRoundForward className="text-white" />
                    <a href="" class="ml-2">
                      Blog
                    </a>
                  </li>
                  <li class="flex items-center mb-4">
                    <IoIosArrowRoundForward className="text-white" />
                    <a href="" class="ml-2">
                      Contact us
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div class="w-full md:w-1/2 lg:w-1/4">
              <h2 class="text-white text-2xl mb-4">Have a questions?</h2>
            

              <nav class=" py-4">
                <ul class="text-blue-500">
                  <li class="flex items-center mb-4">
                    <IoCallOutline className="mr-2 text-white" />
                    <a href="#" class="font-bold mr-2">
                      Call
                    </a>
                    <p class="text-sm">+250783012138</p>
                  </li>
                  <li class="flex items-center mb-4">
                    <CiLocationOn className="mr-2 text-white" />
                    <a href="#" class="font-bold mr-2">
                      Address
                    </a>
                    <p class="text-sm">Kg 650 st 440av</p>
                  </li>
                  <li class="flex items-center mb-4">
                    <AiOutlineMail className="mr-2 text-white" />
                    <a href="#" class="font-bold mr-2">
                      Email
                    </a>
                    <p class="text-sm">lepieux@gmail.com</p>
                  </li>
                  <li class="flex items-center mb-4">
                    <MdOutlineLocationOn className='mr-2 text-white' />
                    <a href="#" class="font-bold mr-2">
                      Location
                    </a>
                    <p class="text-sm">Kalemie 640 st</p>
                  </li>
                </ul>
              </nav>
            </div>

            <div class="w-full md:w-1/2 lg:w-1/4">
              <h2 class="text-white text-2xl  mb-4">Follow Us On</h2>
              <nav>
                <ul class="flex gap-4">
                  <li>
                    <a href="">
                      <CiFacebook class="text-blue-600 text-3xl" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <FaInstagram class="text-blue-600 text-3xl" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <FaLinkedin class="text-blue-600 text-3xl" />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div class="w-full md:w-1/2 lg:w-1/4">
              <h2 class="text-white text-2xl  mb-4">Get in Touch</h2>
              <p class="text-white mb-4">
                Le pieux international university is the place school where
                students develop excellent skills
              </p>
              <p class="text-blue-500 text-base">Subscribe with us</p>

              <form action="#" class="subscription-form mt-8">
                <div class="flex items-center">
                  <input
                    type="text"
                    name="email"
                    id="placenewsletter"
                    placeholder="Your email address"
                    class="border border-gray-300 rounded-md py-2 px-3 mr-2"
                  />
                  <button
                    type="submit"
                    class="bg-blue-600 hover:bg-blue-600 text-white py-2 px-3 rounded-md"
                    id="subscription-submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer