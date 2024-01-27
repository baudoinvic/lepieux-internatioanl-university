import React from 'react'
import Footer from '../Footer';
import Navbar from '../Navbar';

const Consulant = () => {
  return (
     <>
     <Navbar />
    <div className="fees">
      <h1
        className="text-white text-3xl bg-blue-500 p-9 flex items-center space-x-8 justify-left"
        style={{ marginTop: "10rem" }}
      >
        Consultancy
      </h1>
      <div className="structure mt-10 ml-10">
        <span>
          The third mission of the University is the service
          to the community. This is done in various ways such as giving
          scholarship to students<br /> helping orphans, giving seminars and doing
          consultancy. le PIEUX University Consultancy service has the objective of promoting<br />
          the University’s consultancy capabilities to external parties and<br />
          providing comprehensive services which include Decentralization,
          Population studies, Conflict resolutions, Taxation, Accounting, Good<br />
          governance, Microfinance and Cooperatives, Strategic, tactical and<br />
          operational plans setting, , legal clinic, banking and insurance,
          qualitative and quantitative studies,  recruitment and capacity
          building<br />
        </span>
      
      
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Consulant