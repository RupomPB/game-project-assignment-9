import React from "react";
import logoimg from "../assets/logo.png";
import { Link } from "react-router";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-base-200 ">
      <div className="max-w-7xl mx-auto footer sm:footer-horizontal  text-base-content p-10 ">
        <aside>
          <img className="w-15 h-15" src={logoimg}></img>
          <p>
            Rupom's Industries Ltd.
            <br />
            Providing reliable tech since 2025
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <Link to="/" className="hover:text-blue-600 hover:underline  ">
            Home
          </Link>
          <Link
            to="/all-items"
            className="hover:text-blue-600 hover:underline  "
          >
            All Items
          </Link>
          <Link to="/profile" className="hover:text-blue-600 hover:underline  ">
            {" "}
            My Profile
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <Link to="/contact" className="hover:text-blue-600 hover:underline  ">
            {" "}
            Contact
          </Link>
          <Link
            to="/about-us"
            className="hover:text-blue-600 hover:underline  "
          >
            {" "}
            About Us
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a
            href="/*"
          
            className="link link-hover"
          >
            Terms of use
          </a>
          <a
            href="/*"
           
            className="link link-hover"
          >
            Privacy policy
          </a>
          <a
            href="/*"
           
            className="link link-hover"
          >
            Cookie policy
          </a>
        </nav>

        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://www.facebook.com/rupomPB"
              target="_blank" // open in new tab
              rel="noopener noreferrer" // security best practice
              className=" hover:text-gray-500"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/rupom-pb/"
              target="_blank" // open in new tab
              rel="noopener noreferrer" // security best practice
              className=" hover:text-gray-500"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/RupomPB"
              target="_blank" // open in new tab
              rel="noopener noreferrer" // security best practice
              className=" hover:text-gray-500"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
