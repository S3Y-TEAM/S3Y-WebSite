import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook,faTwitter,faLinkedin,faYoutube,} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
      <div className="footer ">
        <div className="fcontainer">
              <div className="info">
                <img src={require("../images/Group 192.png")}alt=""/>
                <div className="copyright">
                  Created By <span>S3Y Team</span>
                <div>
                    &copy; 2024 - <span>S3Y Inc</span>
               </div>
               </div>
              </div>

              <div className="links">
                <h5 className="text-light">Links</h5>
                <ul className="list-unstyled">
                  <li>Home</li>
                  <li>Our Services</li>
                  <li>Support</li>
                  <li>Terms and Condition</li>
                </ul>
              </div>
           
              <div className="links">
                <h5 className="text-light">About Us</h5>
                <ul className="list-unstyled">
                  <li>Sign In</li>
                  <li>Register</li>
                  <li>About Us</li>
                  <li>Blog</li>
                </ul>
              </div>
           
              <div className="contact">
                <h5 className="text-light">Contact Us</h5>
                <p>
                Get  in touch with us via email phone.
                we are waiting for your call or email
                </p>
                <button href="/#">
                s3y.Team@gmail.com
                </button>
                <ul>
                  <li>
                    <a className="d-block text-light" href="/#">
                      <FontAwesomeIcon icon={faFacebook} className="contacticon" />
                    </a>
                  </li>
                  <li>
                    <a className="d-block text-light" href="/#">
                      <FontAwesomeIcon icon={faTwitter} className="contacticon" />
                    </a>
                  </li>
                  <li>
                    <a className="d-block text-light" href="/#">
                      <FontAwesomeIcon icon={faLinkedin} className="contacticon" />
                    </a>
                  </li>
                  <li>
                    <a className="d-block text-light" href="/#">
                      <FontAwesomeIcon icon={faYoutube} className="contacticon" />
                    </a>
                  </li>
                </ul>
              </div>
              </div>
            </div>
  );
}

export default Footer;