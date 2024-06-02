import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaLinkedin, FaPhone } from 'react-icons/fa';


const Footer = () => {
    let today = new Date();
  return (
    <footer className="bg-dark text-white">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-4">
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li className="hotel-color"><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">{<FaPhone/>} +1 25378495030</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Services</h5>
            <ul className="list-unstyled">
              <li><a href="#">Booking Hotel</a></li>
              <li><a href="#">Development</a></li>
              <li><a href="#">Marketing</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Connect</h5>
            <ul className="list-unstyled">
              <li><a href="#">{<FaFacebook/>}</a></li>
              <li><a href="#">{<FaTwitter/>}</a></li>
              <li><a href="#">{<FaLinkedin/>}</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-dark py-3">
        <div className="container text-center">
          <p className="mb-0">&copy; {today.getFullYear()} Booking Hotel. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

