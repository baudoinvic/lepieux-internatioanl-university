import React from 'react'
import Navbar from '../Navbar';
 import { IoIosArrowRoundForward } from "react-icons/io";
 import { IoLocationOutline } from "react-icons/io5";
 import { MdOutlinePhonelinkRing } from "react-icons/md";
 import { MdOutlineEmail } from "react-icons/md";
import Footer from '../Footer';

function Contact() {
  return (
    <>
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
            Contac Us
          </button>

          <div className="flex items-center">
            <IoIosArrowRoundForward className="text-white text-lg" />
            <span className="mr-2 text-lg text-white cursor-pointer">Home</span>

            <span className="ml-2 text-lg text-blue-500">Contact Us</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 p-10">
        <div className="bg-white p-10 rounded-lg shadow-md  transition-transform transform hover:scale-105 cursor-pointer">
          <IoLocationOutline className="text-gray-600 text-4xl mb-4" />
          <span className="text-xl font-bold mb-4">Visit our office</span>
          <p className="text-gray-500">
            640 street 2 floor
            <br /> Kalemie <br />
            Republic Democratic of Congo
          </p>
        </div>

        <div className="bg-white p-10 rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer">
          <MdOutlinePhonelinkRing className="text-gray-600 text-4xl mb-4" />
          <span className="text-xl font-bold mb-4">Let's talk</span>
          <p className="text-gray-500">
            phone: (+250) 783-012-138
            <br />
            phone: (+243) 991-408-890
          </p>
        </div>

        <div className="bg-white p-10 rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer">
          <MdOutlineEmail className="text-gray-600 text-4xl mb-4" />
          <span className="text-xl font-bold mb-4">Email us</span>
          <p className="text-gray-500">
            lepieux@gmail.gmail.com
            <br />
            fabriceitulamya@gmail.com
          </p>
        </div>
      </div>

      <div className="text-center  ">
        <h2 className="text-4xl font-bold mb-6 ">
          Send your Message
        </h2>
      </div>

      <div
        className="min-h-screen flex items-center justify-center"
        style={{ marginTop: "-4rem" }}
      >
        <div className="bg-white p-8 rounded shadow-md w-full md:w-3/4 lg:w-1/2 xl:w-1/3">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-4">
                <label
                  htmlFor="firstname"
                  className="block text-sm font-medium text-gray-600"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="Firstname"
                  name="Firstname"
                  className="mt-1 p-2 w-full border rounded-md"
                  placeholder="Your First Name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="Lastname"
                  className="block text-sm font-medium text-gray-600"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="Lastname"
                  name="Lastname"
                  className="mt-1 p-2 w-full border rounded-md"
                  placeholder="Your Last Name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600"
                >
                  Email
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 p-2 w-full border rounded-md"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-600"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  className="mt-1 p-2 w-full border rounded-md"
                  placeholder="Your Phone Number"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-600"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 p-2 w-full border rounded-md"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div className="items-center p-4 ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d30607.79514638295!2d30.066595630129367!3d-1.9550632439832505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1ssp rwanda!5e0!3m2!1sen!2srw!4v1663256798141!5m2!1sen!2srw"
          width="100%"
          height="450px"
        />
      </div>
       <Footer />
    </>
  );
}

export default Contact