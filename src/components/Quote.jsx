import React from 'react'

const Quote = () => {
  return (
    <div className="quote">
    

      <div
        className="quote relative bg-cover bg-center text-white py-20"
        style={{
          backgroundImage: `url('https://png.pngtree.com/background/20211216/original/pngtree-library-at-noon-picture-image_1518444.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-35"></div>{" "}
        {/* Overlay */}
        <div className="request bg-black bg-opacity-50 p-8 rounded-lg mx-auto max-w-md">
          <span className="block text-xl font-bold mb-4">Request A Quote</span>
          <span className="block">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </span>
        </div>
        <form className="mt-8 flex flex-col items-center">
          <input
            type="text"
            name="firstname"
            placeholder="Enter your name"
            className="w-full max-w-md px-4 py-2 mb-4 rounded border border-gray-300"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full max-w-md px-4 py-2 mb-4 rounded border border-gray-300"
          />
          <textarea
            name="message"
            placeholder="Enter your message"
            className="w-full max-w-md px-4 py-2 mb-4 rounded border border-gray-300"
          ></textarea>
          <button className="px-8 py-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
            Send a Quote
          </button>
        </form>
      </div>
    </div>
  );
}

export default Quote