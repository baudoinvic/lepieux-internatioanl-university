import React from 'react'
import Navbar from '../Navbar';
import Footer from '../Footer';

const Application = () => {
  return (
    <>
      <Navbar />
      <div
        className="max-w-2xl mx-auto px-4 py-8"
        style={{ marginTop: "13rem" }}
      >
        {" "}
        {/* Moved down with mt-8 */}
        <h1 className="text-gray-800 text-3xl font-bold mb-4">
          Entry Requirements
        </h1>
        <div className="mb-4">
          <span className="font-semibold">Undergraduate</span>
        </div>
        <ul className="list-disc pl-6 mb-4">
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
            Payment of Application Fee of Frw 3,000 for EAC Citizens and 5,000
            for Internationals
          </li>
          <li>
            Payment of Registration Fee of Frw 30,000 for EAC Citizens and
            50,000 for Internationals (When Application Approved)
          </li>
        </ul>
        <h1 className="text-lg font-semibold mb-2">NOTE</h1>
        <ul className="list-disc pl-6 mb-4">
          <li>
            Admitted candidates will proceed with a payment of non-refundable
            Registration Fee of Frw 30,000 for National/EAC Citizens and 50,000
            for Internationals.
          </li>
          <li>
            As part of registration, International Students (Non EAC citizens)
            are required to fulfill the following:
          </li>
          <li>
            Payment of RWF 80,000 for Health Insurance (Radiant Health
            Insurance)
          </li>
          <li>Payment of tuition fees for 1st Trimester.</li>
          <li>
            International Students should apply for a study visa before the
            expiration for an Entry Visa which is granted upon arrival at the
            Kigali International. A recommendation letter from the University
            will be given to registered students only.
          </li>
          <li>
            Applicants with foreign academic qualifications shall obtain the
            equivalence of their Degree from High Education Council (HEC) for
            Master’s applicants or from National Examination and School
            Inspection Authority (NESA) for Bachelor’s applicants. It should be
            availed at least within five months from the date of registration.
          </li>
        </ul>
        <a
          href="#"
          class="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md inline-block"
        >
          Apply here
        </a>
      </div>

      <Footer />
    </>
  );
}

export default Application