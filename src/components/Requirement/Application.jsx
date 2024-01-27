import React from 'react'
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Link } from 'react-router-dom';

const Application = () => {
  return (
    <>
      <Navbar />
      <div className="" style={{ marginTop: "10rem" }}>
        {" "}
        {/* Moved down with mt-8 */}
        <h1 className="text-white text-3xl bg-blue-500 p-9 flex items-center space-x-8 justify-left">
          Admission Requirements
        </h1>
        <div className="mb-4 mt-8 ml-10">
          <span className="font-bold mb-4 text-2xl ">
            Admission At Undergraduate level
          </span>
        </div>
        <ul className="list-disc pl-6 mb-4 ml-10">
          <li>
            Upload Secondary school certificate 1 notified copy with a minimum
            of 2 principal passes
          </li>
          <li>Upload passport photos in color with a white background</li>
          <li>
            Upload Identity card for national candidates and passport for
            international candidates
          </li>
          <li>
            Payment of Application Fee of 30 usd for EAC Citizens and 50 usd for
            Internationals
          </li>
          <li>
            Payment of Registration Fee of Frw 30 usd for EAC Citizens and 50
            usd for Internationals (When Application Approved)
          </li>
        </ul>
        <h1 className="text-lg font-semibold mb-2 ml-10">NOTE</h1>
        <ul className="list-disc pl-6 mb-4 ml-10">
          <li>
            Admitted candidates will proceed with a payment of non-refundable
            Registration Fee of
            <br /> 30 usd for National/EAC Citizens and 50 usd for
            Internationals.
          </li>
          <li>
            As part of registration, International Students (Non EAC citizens)
            are required to fulfill the following:
          </li>
          <li>
            Payment of 80 usd for Health Insurance (Radiant Health Insurance)
          </li>
          <li>Payment of tuition fees for 1st Trimester.</li>
          <li>
            International Students should apply for a study visa before the
            expiration for an Entry Visa which is granted upon arrival at the
            <br />
            Kinshasa International. A recommendation letter from the University
            will be given to registered students only.
          </li>
          <li>
            Applicants with foreign academic qualifications shall obtain the
            equivalence of their Degree from High Education
            <br /> and School Inspection , for Bachelor’s applicants.
            <br /> It should be availed at least within five months from the
            date of registration.
          </li>
        </ul>
        <Link to="/Signup">
          <a
            href="#"
            class="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md inline-block ml-10"
          >
            Apply here
          </a>
        </Link>
      </div>

      <Footer />
    </>
  );
}

export default Application