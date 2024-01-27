import React from 'react'
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Link } from 'react-router-dom';

const Fees = () => {
  return (
    <>
      <Navbar />
      <div className="fees">
        <h1
          className="text-white text-3xl bg-blue-500 p-9 flex items-center space-x-8 justify-left"
          style={{ marginTop: "10rem" }}
        >
          Fees Structure
        </h1>
        <div className="structure mt-10 ml-10">
          <span>
            Thank you for reaching out to us. We appreciate your interest in Le
            Pieux International University's undergraduate programs.
            <br /> We understand the importance of transparency and clarity in
            financial matters. Rest assured, we have prepared a comprehensive
            <br /> fees structure and payment information document that outlines
            all the necessary details for our undergraduate programs.
            <br /> Please find attached the fees structure and payment
            information for your reference. Should you have any questions or
            require
            <br /> further clarification, feel free to contact our admissions
            <br />
            <br />
          </span>
          <span>
            The page displaying the fees is not yet available. For further
            information, please contact our office
          </span>
          <br /> <br />
          <Link to="/Contact">
            <a className="text-blue-500" href="">
              Contact us here
            </a>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Fees