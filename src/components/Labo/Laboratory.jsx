import React from 'react'
import Navbar from '../Navbar';
import Footer from '../Footer';

const Laboratory = () => {
  return (
    <>
      <Navbar />
      <div className="international-student " style={{ marginTop: "10rem" }}>
        <h1 className="text-white text-3xl bg-blue-500 p-4 md:p-9 flex items-center space-x-8 justify-left">
          Research Laboratories
        </h1>
      </div>
   
      <div class="flex justify-center items-center mt-8">
        <div class="w-2/3">
          <img
            src="https://itum.mrt.ac.lk/sites/default/files/styles/juicebox_medium/public/2020-09/U1-212-3.JPG?itok=7czsaI0z"
            class="w-84 mb-4"
            alt="University Image"
          ></img>
          <div class="description mb-4">
            <span>
              Le pieux university recognizes the importance of Technology into
              achieving quality Education. The University is fully committed to
              maintain a strong information backbone to support the research and
              communication needs for both students and staff. Documentation on
              internet is free of charge for students and staff. All research
              laboratories are always open (from 8:00 AM up to 9:30 PM) for
              research and revision purposes.
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Laboratory