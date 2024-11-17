import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <header className="header">
        {/* Topbar */}
        <div className="topbar">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-5 col-12">
                {/* Contact */}
                <ul className="top-link">
                  <li><Link to="/">About</Link></li>
                  <li><Link to="/">Doctors</Link></li>
                  <li><Link to="/">Contact</Link></li>
                  <li><Link to="/">FAQ</Link></li>
                </ul>
                {/* End Contact */}
              </div>
              <div className="col-lg-6 col-md-7 col-12">
                {/* Top Contact */}
                <ul className="top-contact">
                  <li><i className="fa fa-phone" />+880 1234 56789</li>
                  <li><i className="fa fa-envelope" /><a href="mailto:support@yourmail.com">support@yourmail.com</a></li>
                </ul>
                {/* End Top Contact */}
              </div>
            </div>
          </div>
        </div>
        {/* End Topbar */}
        {/* Header Inner */}
        <div className="header-inner">
          <div className="container">
            <div className="inner">
              <div className="row">
                <div className="col-lg-3 col-md-3 col-12">
                  {/* Start Logo */}
                  <div className="logo">
                    <a href="index.html"><img src="img/logo.png" alt="#" /></a>
                  </div>
                  {/* End Logo */}
                  {/* Mobile Nav */}
                  <div className="mobile-nav" />
                  {/* End Mobile Nav */}
                </div>
                <div className="col-lg-7 col-md-9 col-12">
                  {/* Main Menu */}
                  <div className="main-menu">
                    <nav className="navigation">
                      <ul className="nav menu">
                        <li className="active"><Link to="/">Home<i className="icofont-rounded-down" /></Link>
                          <ul className="dropdown">
                            <li><a href="index.html">Home Page 1</a></li>
                          </ul>
                        </li>
                        <li><Link to="/doctors">Doctors</Link></li>
                        <li><Link to="/service">Service</Link></li>
                        <li><Link to="/about">About<i className="icofont-rounded-down" /></Link>
                          <ul className="dropdown">
                            <li><Link to="/">404 Page</Link></li>
                          </ul>
                        </li>
                        <li><Link to="/blog">Bloge <i className="icofont-rounded-down" /></Link>
                          <ul className="dropdown">
                            <li><Link to="/blogdetails">Blog Details</Link></li>
                          </ul>
                        </li>
                        <li><Link to="/contactus">Contact Us</Link></li>
                      </ul>
                    </nav>
                  </div>
                  {/*/ End Main Menu */}
                </div>
                <div className="col-lg-2 col-12">
                  <div className="get-quote">
                    {/* <a href="appointment.html" className="btn">Book Appointment</a> */}
                    <Link to="/appointment" className="btn">Book Appointment</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*/ End Header Inner */}
      </header>

    </div>
  )
}
export default Header
