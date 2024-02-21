import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
// import './Header.scss';
import {ReactComponent as  Logo} from './../../assets/img/logo.svg';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isActive, setActive] = useState(false);
    const currentRoute = useLocation().pathname.toLowerCase();
    const handleClick = () => {
        setActive(!isActive);
      };

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 300) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll); 
    
      // Cleanup the event listener when the component unmounts
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []); // Empty dependency array means this effect runs once on mount
  
    const stickyTopClass = `navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0 ${isScrolled ? 'shadow-sm' : ''}`;
    return (
        <>
            <div className="container-fluid bg-light p-0">
                <div className="row gx-0 d-none d-lg-flex">
                    <div className="col-lg-7 px-5 text-start">
                        {/* <div className="h-100 d-inline-flex align-items-center border-start border-end px-3">
                            <small className="fa fa-phone-alt me-2"></small>
                            <small>+012 345 6789</small>
                        </div> */}
                        <div className="h-100 d-inline-flex align-items-center border-end px-3">
                            <small className="far fa-envelope-open me-2"></small>
                            <small>info@servicex.co.nz</small>
                        </div>
                        <div className="h-100 d-inline-flex align-items-center border-end px-3">
                            <small className="far fa-clock me-2"></small>
                            <small>Mon - Sat : 09 AM - 09 PM</small>
                        </div>
                    </div>
                    <div className="col-lg-5 px-5 text-end">
                        <div className="h-100 d-inline-flex align-items-center">
                            <a className="btn btn-square border-end border-start" href=""><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-square border-end" href=""><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-square border-end" href=""><i className="fab fa-linkedin-in"></i></a>
                            <a className="btn btn-square border-end" href=""><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>

            <nav className={stickyTopClass} style={{ top: isScrolled ? '0px' : '-100px' }}>
                <Link to="/" className="navbar-brand">
                    {/* <img src="/logo.png" alt="ServiceX" style={{ height: 50 }} /> */}
                    <Logo  alt="ServiceX"  style={{ height: 50 }} />
                    {/* <h1 className="m-0"><i className="fab fa-xing text-primary me-3"></i>SERVICE X</h1> */}
                </Link>
                <button type="button" onClick={handleClick} className="navbar-toggler" style={{ boxShadow: 'none'}} data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={isActive ? "collapse navbar-collapse show" : "collapse navbar-collapse"} id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-3 py-lg-0">
                        <Link to="/" onClick={handleClick} className={currentRoute == '/' ? "nav-item nav-link active" : "nav-item nav-link "}>Home</Link>
                        <Link to="/about" onClick={handleClick} className={currentRoute.includes("about") ? "nav-item nav-link active" : "nav-item nav-link"}>About Us</Link>
                        <Link to="/services" onClick={handleClick} className={currentRoute.includes("services") ? "nav-item nav-link active" : "nav-item nav-link"}>Our Services</Link>
                        <Link to="/appointment" onClick={handleClick} className={currentRoute.includes("appointment") ? "nav-item nav-link active" : "nav-item nav-link"}>Appointment</Link>
            
                        <Link to="/contact" onClick={handleClick} className={currentRoute.includes("contact") ? "nav-item nav-link active" : "nav-item nav-link"}>Contact Us</Link>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;