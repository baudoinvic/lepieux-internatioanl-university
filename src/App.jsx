
import './App.css'
import About from './components/About/About'
import Blog from './components/Blog'
import Campus from './components/Campus'
import Contact from './components/Contact/Contact'
import Courses from './components/Courses'
import Footer from './components/Footer'
import Header from './components/Header'
import Homepage from './components/Homepage'
import Navbar from './components/Navbar'
import Quote from './components/Quote'

import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Application from './components/Requirement/Application'
import Blogs from './components/Blogs/Blogs'
import Fees from './components/Fees/Fees'
import International from './components/international/International'
import Laboratory from './components/Labo/Laboratory'
import Signup from './components/Signup.jsx/Signup'
import Login from './components/Login/Login'
import Consulant from './components/Consulant/Consulant'

function App() {

    const CommonLayout = ({ children }) => {
      return (
        <>
          <Navbar />
          <Outlet />
          {children}
          <Footer />
        </>
      );
    };

  return (
  

    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <CommonLayout>
                <Header />
                <Campus />
                <Courses />
                <Quote />
                <Blog />
              </CommonLayout>
            }
          />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/homepage" element={<Homepage />} />
           <Route path='/Application' element={<Application/>} />
           <Route path='/Blogs' element={<Blogs/>} />
           <Route path='/Fees' element={<Fees />} />
           <Route path='/International' element={<International  />} />
           <Route path='/Laboratory' element={<Laboratory/>} />
           <Route path= "/Signup" element= {<Signup/>} />
           <Route path='/Login' element={<Login />} />
           <Route path='/Consultant' element={<Consulant />} />
        </Routes>
      </BrowserRouter>
       
    </div>
    
  );
}

export default App
