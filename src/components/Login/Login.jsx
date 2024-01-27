import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';

const Login = () => {
  return (
    <>
    <Navbar />
    <div
      className="flex items-center justify-center min-h-screen bg-cover "
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9naW58ZW58MHx8MHx8fDA%3D)",
      }}
    >
      <div
        className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
        style={{ marginTop: "14rem" }}
      >
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              required
            />
          </div>

          <div className="flex justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign in
            </button>
          </div>
        </form>
        <p className="text-gray-600 text-center mt-4">
          Register a new membership?{" "}
          <Link to="/signup"> 
            <a href="" className="text-blue-500">
              signup here
            </a>
          </Link>
        </p>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Login