import React from 'react'

const Header = () => {
    
  return (
    <div className="header relative overflow-hidden" data-overlay-dark="6">
      <div class="slider flex transition-transform ease-in-out duration-500">
        <div class="slide min-w-full overflow-hidden relative">
          <img
            src="https://preview.colorlib.com/theme/fox/images/bg_3.jpg.webp"
            alt="Image 1"
            class="w-full  "
            style={{ height: "1000px" }}
          ></img>
          <div class="text-overlay absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white ml-20">
            <h1 class="text-6xl font-bold mb-4 opacity-1">
              Le Pieux International University
            </h1>
            <p class="text-lg mb-4 font-bold">
              Welcome to this wonderful university in Africa where we explore
              <br></br>
              more about technology. Don't hesitate to reach out to us.
            </p>
            <button
              class="bg-blue-500 text-white px-8 py-2 rounded"
              style={{ marginTop: "2rem" }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header