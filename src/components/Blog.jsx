import React from 'react'

const Blog = () => {
  return (
    <div className="mt-16">
      <div className="title text-center">
        <span className="text-4xl font-bold text-gray-800">Recent Blog</span>
        <p className="text-base text-gray-600 mt-8">
          Separated they live in. A small river named Duden flows by their place
          <br />
          and supplies it with the necessary regelialia. It is a paradisematic
          country
        </p>
      </div>

      <div className="flex justify-between mt-16">
        <div className="flex flex-col items-center mx-20">
          <img
            src="https://preview.colorlib.com/theme/fox/images/image_2.jpg.webp"
            alt="Image 1"
            className="w-75 h-64 mb-4"
          ></img>
          <span className="text-lg font-bold">
            Skills To Develop Your Child Memory
          </span>
          <p className="text-gray-600">
            Far far away, behind the word mountains
            <br /> far from the countries Vokalia and Consonantia
            <br /> there live the blind texts.
          </p>
        </div>

        <div className="flex flex-col items-center mx-20">
          <img
            src="https://preview.colorlib.com/theme/fox/images/image_4.jpg.webp"
            alt="Image 2"
            className="w-75 h-64 mb-4"
          ></img>
          <span className="text-lg font-bold">
            Skills To Develop Your Child Memory
          </span>
          <p className="text-gray-600">
            Far far away, behind the word mountains,
            <br /> far from the countries Vokalia and Consonantia
            <br /> there live the blind texts.
          </p>
        </div>

        <div className="flex flex-col items-center mx-20">
          <img
            src="https://preview.colorlib.com/theme/fox/images/image_1.jpg.webp"
            alt="Image 3"
            className="w-75 h-64 mb-4"
          ></img>
          <span className="text-lg font-bold">
            Skills To Develop Your Child Memory
          </span>
          <p className="text-gray-600">
            Far far away, behind the word mountains
            <br /> far from the countries Vokalia and Consonantia
            <br /> there live the blind texts.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Blog