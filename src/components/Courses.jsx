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
              Bachelor degree in <br></br>Electronics and telecommunication
            </span>
          </div>

          <div class="bg-white shadow-md p-6 rounded-lg  transition-transform transform hover:scale-105 cursor-pointer">
            <img
              src="https://i0.wp.com/digirupt.io/wp-content/uploads/2019/04/distributedgrid.jpg?fit=1200%2C800&ssl=1"
              class="w-75 h-64"
              alt="Electrical and renewable energy"
            ></img>
            <span className="text-xl font-bold mb-4">
              Bachelor degree in <br /> Electrical and renewable energy
            </span>
          </div>

          <div class="bg-white shadow-md p-6 rounded-lg transition-transform transform hover:scale-105 cursor-pointer">
            <img
              src="https://www.monash.edu/__data/assets/image/0011/2481464/Manufacturing-Robots.jpg"
              class="w-75 h-64"
              alt="Robotics and Mechatronics"
            ></img>
            <span className="text-xl font-bold mb-4">
              Bachelor degree in <br /> Robotics and Mechatronics
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
              Bachelor degree in <br /> Computer science and Artificial
              intelligent
            </span>
          </div>

          <div class="bg-white shadow-md p-6 rounded-lg transition-transform transform hover:scale-105 cursor-pointer">
            <img
              src="https://media.licdn.com/dms/image/D4D12AQEX7UIsfWeeSQ/article-cover_image-shrink_720_1280/0/1676291348686?e=2147483647&v=beta&t=FAXQPYUkYNuOSaEJ3NQlGFBv70T7mIv87zWKQvq6ONw"
              class="w-75 h-64"
            ></img>
            <span class="text-xl font-bold mb-4">
              {" "}
              Bachelor degree in
              <br /> Mechanics
            </span>
          </div>

          <div class="bg-white shadow-md p-6 rounded-lg transition-transform transform hover:scale-105 cursor-pointer">
            <img
              src="https://www.collegenp.com/uploads/2023/02/Engineering-Update.png"
              class="w-75 h-64"
            ></img>
            <span class="text-xl font-bold mb-4">
              Bachelor degree in <br /> Civil engineering and Architecture
            </span>
          </div>
        </div>
      </div>

      {/* third row */}

      <div class="">
        <div class="flex flex-col md:flex-row md:justify-center items-center space-y-4 md:space-x-4 md:space-y-0 p-10">
          <div class="bg-white shadow-md p-6 rounded-lg transition-transform transform hover:scale-105 cursor-pointer">
            <img
              src="https://gnnhd.tv/media/90775/conversions/351146_9914876_updates-1280x720.webp"
              class="w-75 h-64"
            ></img>
            <span class="text-xl font-bold mb-4">
              Bachelor degree in <br /> petroleum
            </span>
          </div>

          <div class="bg-white shadow-md p-6 rounded-lg transition-transform transform hover:scale-105 cursor-pointer">
            <img
              src="https://upload-china-admissions.imgix.net/uploads/school_pictures/NUUA_internal.jpg?auto=format,enhance,redeye,compress,true"
              class="w-75 h-64"
            ></img>
            <span class="text-xl font-bold mb-4">
              {" "}
              Bachelor degree in <br /> Aeronautics and Aerospace Engineering{" "}
            </span>
          </div>

          <div class="bg-white shadow-md p-6 rounded-lg transition-transform transform hover:scale-105 cursor-pointer">
            <img
              src="https://pasdept.wisc.edu/wp-content/uploads/sites/384/2023/06/Designed-farm-fields.jpeg"
              class="w-75 h-64"
            ></img>
            <span class="text-xl font-bold mb-4">
              {" "}
              Bachelor degree in <br /> Agronomy
            </span>
          </div>
        </div>
      </div>

      {/* fourth row */}

      <div class="">
        <div class="flex flex-col md:flex-row md:justify-left items-left space-y-4 md:space-x-4 md:space-y-0 p-10">
          <div class="bg-white shadow-md p-6 rounded-lg transition-transform transform hover:scale-105 cursor-pointer">
            <img
              src="https://internationaljournalofresearch.files.wordpress.com/2020/07/images-6-2.jpeg?w=672&h=372&crop=1"
              class="w-75 h-64"
            ></img>
            <span class="text-xl font-bold mb-4">
              {" "}
              Bachelor Degree in <br /> Economics and business studies
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses