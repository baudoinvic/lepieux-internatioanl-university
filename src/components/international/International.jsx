import React from 'react'
import Navbar from '../Navbar';
import Footer from '../Footer';

const International = () => {
  return (
    <>
      <Navbar />

      <div className="international-student " style={{marginTop: '10rem'}}>
        <h1 className="text-white text-3xl bg-blue-500 p-4 md:p-9 flex items-center space-x-8 justify-left">
          International Students
        </h1>
        <span className="block text-gray-800 font-bold text-lg px-4 md:px-9 py-2">
          Far from home
        </span>
      </div>

      <div class="flex justify-between items-start m-8 bg-white shadow-md b">
        <div class="w-1/3">
          <nav>
            <ul>
              <a
                href="#"
                class="block py-4 px-4 text-blue-600 hover:bg-gray-200"
              >
                Consultancy
              </a>
              <a
                href="#"
                class="block py-4 px-4 text-blue-600 hover:bg-gray-200"
              >
                Research Laboratories
              </a>
              <a
                href="#"
                class="block py-4 px-4 text-blue-600 hover:bg-gray-200"
              >
                Admissions Requirements
              </a>
              <a
                href="#"
                class="block py-4 px-4 text-blue-600 hover:bg-gray-200"
              >
                Tuition & Fees
              </a>
            </ul>
          </nav>
        </div>

        <div class="w-2/3">
          <img
            src="https://entrepreneurs.utoronto.ca/wp-content/uploads/2022/02/Omotola-Odesilo-Laced-By-Omoteey.jpg"
            class="w-full mb-4"
            alt="University Image"
          ></img>
          <div class="description mb-4">
            <span>
              At Kigali Independent University ULK, we believe in the mantra
              that students matter most regardless where they are from.
              International students should find ULK their loving and caring
              home. Still on this, international students are always guided and
              helped to discover more about the university. In so doing, they
              are provided with numerous services such as enabling them to get
              accommodations, guiding them in the introduction week to learn
              more about the university, advocacy for getting visas to mention
              but a few.
            </span>
          </div>
          <span class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Assistance
          </span>
          <span class="block mt-4">
            At Kigali Independent University ULK, we believe in the mantra that
            students matter most regardless where they are from. International
            students should find ULK their loving and caring home. Still on
            this, international students are always guided and helped to
            discover more about the university. In so doing, they are provided
            with numerous services such as enabling them to get accommodations,
            guiding them in the introduction week to learn more about the
            university, advocacy for getting visas to mention but a few.
            ACCOMODATION As for accommodation, ULK Gisenyi Campus has some
            hostels for international and local students wishing to stay on the
            campus during their studies. Affordable fees are charged on a
            monthly basis and the management of the hostels provides students
            with water, electricity,
          </span>
          <button class="bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:bg-blue-600">
            ACCOMODATION
          </button>
          <span class="block mt-4">
            At Kigali Independent University ULK, we believe in the mantra that
            students matter most regardless where they are from. International
            students should find ULK their loving and caring home. Still on
            this, international students are always guided and helped to
            discover more about the university. In so doing, they are provided
            with numerous services such as enabling them to get accommodations,
            guiding them in
          </span>
        </div>
      </div>
      <Footer />

    </>
  );
}

export default International