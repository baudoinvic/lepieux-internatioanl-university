import React from 'react'

const Courses = () => {
  return (
    <div className="courses">
      <div class="flex flex-col items-center justify-center mt-16">
        <span class="block text-center text-4xl font-bold text-gray-800 mb-4">
          Courses
        </span>
      </div>

      {/*first row*/}

      <div class="">
        <div class="flex flex-col md:flex-row md:justify-center items-center space-y-4 md:space-x-4 md:space-y-0 p-10  ">
          <div class="bg-white shadow-md p-6 rounded-lg transition-transform transform hover:scale-105 cursor-pointer ">
            <img
              src="https://electronics.celnet.in/wp-content/uploads/2021/08/smart-grid-power-electronics-.jpg"
              class="w-75 h-64"
              alt="Electronics and telecommunication"
            ></img>
            <span className="text-xl font-bold mb-4">
              Electronics and telecommunication
            </span>
             
          </div>
 
          <div class="bg-white shadow-md p-6 rounded-lg  transition-transform transform hover:scale-105 cursor-pointer">
            <img
              src="https://i0.wp.com/digirupt.io/wp-content/uploads/2019/04/distributedgrid.jpg?fit=1200%2C800&ssl=1"
              class="w-75 h-64"
              alt="Electrical and renewable energy"
            ></img>
            <span className="text-xl font-bold mb-4">
              Electrical and renewable energy
            </span>
          </div>

          <div class="bg-white shadow-md p-6 rounded-lg transition-transform transform hover:scale-105 cursor-pointer">
            <img
              src="https://www.monash.edu/__data/assets/image/0011/2481464/Manufacturing-Robots.jpg"
              class="w-75 h-64"
              alt="Robotics and Mechatronics"
            ></img>
            <span className="text-xl font-bold mb-4">
              Robotics and Mechatronics
            </span>
          </div>
        </div>
      </div>

      {/* Second row */}

      <div class="">
        <div class="flex flex-col md:flex-row md:justify-center items-center space-y-4 md:space-x-4 md:space-y-0 p-10">
          <div class="bg-white shadow-md p-6 rounded-lg transition-transform transform hover:scale-105 cursor-pointer">
            <img
              src="https://static.kent.ac.uk/nexus/ems/1414.jpg"
              class="w-75 h-64"
            ></img>
            <span class="text-xl font-bold mb-4">
              Computer science and Artificial intelligent
            </span>
          </div>

          <div class="bg-white shadow-md p-6 rounded-lg transition-transform transform hover:scale-105 cursor-pointer">
            <img
              src="https://www.autotrainingcentre.com/wp-content/uploads/2015/06/automotive-service-advisor.png"
              class="w-75 h-64"
            ></img>
            <span class="text-xl font-bold mb-4">Mechanics</span>
          </div>

          <div class="bg-white shadow-md p-6 rounded-lg transition-transform transform hover:scale-105 cursor-pointer">
            <img
              src="https://www.collegenp.com/uploads/2023/02/Engineering-Update.png"
              class="w-75 h-64"
            ></img>
            <span class="text-xl font-bold mb-4">
              Civil engineering and Architecture
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses