import React from "react";
import'./Contactus.css';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow , faEnvelope , faPhone ,faUser} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Contactus = () =>{
    const [Fullname, setFullname] = useState("");
    const [emailid, setemailid] = useState("");
    const [phone, setphone] = useState("");
    const [Message, setMessage] = useState("");

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const handleSend = (event) => {
        event.preventDefault();
         // Validation
         if (Fullname.trim() === '') {
          alert('Please enter your Full name.');
          return;
        }
        if (!emailid) {
            alert('Email is required!');
        }
        else if (!regex.test(emailid)) {
            alert('This is not a valid email format!');
        }
        if (!phone) {
            alert('phone number is required!')
          } else if (phone.length < 8) {
            alert("Phone number must be equal 11 numbers");
          }
       
    }



    return(
        <div className="contactus">
            <h3>we are here to help..!  <span> Contact us Now</span></h3>
            <div className="contactways">
                <div className="location">
                <FontAwesomeIcon icon={faLocationArrow}  className="contacticon"/>
                <div className="locationdata">
                <h4>Location</h4>
                <p>Mansoura,Dakahlia,Egypt</p>
                </div>
                </div>
                <div className="emailid">
                <FontAwesomeIcon icon={faEnvelope} className="contacticon" />
                <div className="emaildata">
                <h4>Email id</h4>
                <p>s3y.Team@gmail.com</p>
                </div>
                </div>
                <div className="phone">
                <FontAwesomeIcon icon={faPhone} className="contacticon"/>
                <div className="phonedata">
                <h4>Call us</h4>
                <p>01019353004</p>
                </div>
                </div>
            </div>

           <div className="dataimage">
            <div className="userdata">
            <p>please fill your details below!</p>
            <div class="input-group">
                            < span className="userdataicon"> <FontAwesomeIcon icon={faUser} /></span>
                            <input 
                            id="Fullname"
                             type="text" 
                             class="form-control" 
                             placeholder="Full name"
                             value={Fullname}
                             onChange={(event) => setFullname(event.target.value)}
                             required
                              />
            </div>

            <div class="input-group">
                            < span className="userdataicon"><FontAwesomeIcon icon={faEnvelope} /></span>
                            <input 
                            id="emailid"
                             type="email" 
                             class="form-control" 
                             placeholder="Email Id"
                             value={emailid}
                             onChange={(event) => setemailid(event.target.value)}
                             required
                              />
            </div>

            <div class="input-group">
                            < span className="userdataicon"><FontAwesomeIcon icon={faPhone} /></span>
                            <input 
                            id="phone"
                             type="tel" 
                             class="form-control" 
                             placeholder="mobile number"
                             value={phone}
                             onChange={(event) => setphone(event.target.value)}
                             required
                            />
            </div>

            <div class="input-group">
                            <input 
                            id="Message"
                             type="text" 
                             class="form-control message-input" 
                             placeholder="Message"
                             value={Message}
                             onChange={(event) => setMessage(event.target.value)}
                             required
                            />
            </div>
        <button className='send'  type="submit" onClick={handleSend}>
        Get in Touch
        </button>
     
            </div>
            <div className="map">
            <img src={require("../images/map.png")}/>
            <p>Get  in touch with us via email phone.<br></br>
                we are waiting for your call or email</p>
                <h4>or</h4>
                <p>Find us on social media</p>
                <div className="social">
                <FontAwesomeIcon icon={faFacebook} className="socialicon"/>
                <FontAwesomeIcon icon={faTwitter} className="socialicon" />
                <FontAwesomeIcon icon={faInstagram} className="socialicon" />
                </div>


            </div>
    </div>

        </div>
    );
};

export default Contactus;