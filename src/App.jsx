
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
    // <>

    //  <Navbar />
    //  <Header />
    //  <Campus />
    //  <Courses />
    //  <Quote />
    //  <Blog />
    //  <Footer />
    // </>

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
        </Routes>
      </BrowserRouter>
       
    </div>
    
  );
}

export default App
