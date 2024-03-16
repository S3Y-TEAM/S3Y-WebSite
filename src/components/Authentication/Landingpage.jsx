//import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { FaSignInAlt } from 'react-icons/fa';
import'./LandingPage.css'
import React from 'react';
import { AppBar, Toolbar, Typography ,Button} from '@mui/material';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Footer from "./Footer";



function LandingPage() {
  return (
    // <Container>
    //   <nav className="navbar">
    //     <div className='Logo'>
    //     <Link className="navbar-brand" to="/">
    //       <img src={require("../images/logo2.png")} width={'100px'} height={'100px'} alt="logo" />
    //     </Link>
    //     </div>
    //     <div className="nav-links">
    //       <ul className="nav-links">
    //       <li className="nav-item">
    //           <Link className="nav-link" to="/">
    //             HOME
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link className="nav-link" to="/about">
    //             ABOUT US
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link className="nav-link" to="/contactUs">
    //             CONTACT US
    //           </Link>
    //         </li>
    //       </ul>
    //       <div className="navbarlogin">
    //           <Link className="nav-link" to="/Login">
    //           <FaSignInAlt />
    //             Login
    //           </Link>
    //       </div>
    //       <div className="navbarsignup">
    //         <button>
    //           <Link className="nav-link" to="/Login">
    //           Sign Up
    //           </Link>
    //           </button>
    //       </div>
    //     </div>
    //   </nav>
    //   </Container>
    <div className='home'>
       <AppBar position="static" className="navbar" sx={{backgroundColor:'transparent'}}>
    <Toolbar className="navbar">
    <img src={require("../images/logo2222.png")} height={'60px'} alt="Logo" style={{ marginLeft: '20px' }} />
      <Link to="/" className="navbar-link">
        Home
      </Link>
      <Link to="/contact" className="navbar-link">
        Contact
      </Link>
      <Link to="/about" className="navbar-link">
        About
      </Link>
      <div className="navbar-link last">
      <Link to="/login" className="navbar-link">
      <FaSignInAlt  style={{paddingRight:'5px'}} />
        Login
      </Link>
        <Button component={Link} to="/signup" className="navbar-link sign">
          Sign Up
        </Button>
        </div>
      </Toolbar>
    </AppBar>
    
    <div className="landing">
      <div className="landing__content">
        <h1>Find, Hire</h1>
        <h2> The Best Job For your Passion</h2>
        <button className="btnstart">
    Get Started<FontAwesomeIcon style={{marginLeft:'5px'}} icon={faArrowRight} />
    </button>
      </div>
      <img  src={require("../images/Rectangle 25.png")}/>
    </div>

    <div className="landing2">
    <img  src={require("../images/about app.png")}/>
      <div className="landing2__content">
        <h5>S3Y Platform</h5>
        <h2>Who We Are?</h2>
        <p>
           We are S3y Team. We provide a platform to communicate
           between developer or skilled worker and client to fix his problem
        </p>
      </div>
      </div>

  <div className='landing3'>
        <div className='bg'>
        <h2>Our Services</h2>
       <p>Count on us for the unlimited S3Y services</p>
        </div>
   
   <div className='container'>
   <div class="box">
          <img decoding="async" src={require("../images/tech.png")} alt="" />
          <div class="content">
            <h3>Developers Services</h3>
            <p>we need to talk about application in our onboarding screens</p>
          </div>
   </div>

   <div class="box">
          <img decoding="async" src={require("../images/worker 2.png")} alt="" />
          <div class="content">
            <h3>Skilled Workers Services</h3>
            <p>we need to talk about application in our onboarding screens</p>
          </div>
   </div>

   <div class="box">
          <img decoding="async" src={require("../images/Payment Information.png")} alt="" />
          <div class="content">
            <h3>Payment Information</h3>
            <p>we need to talk about application in our onboarding screens</p>
          </div>
   </div>
</div>
</div>

    <div className='landing4'>
      <div className='whys3y'>
        <h2>Why Choose S3Y?</h2>
        <p>
          Choose us for unmatched quality, exceptional service,
          and a commitment to exceeding your expectations every time.
        </p>
      
      <div className='whys3y2'>
        <img src={require("../images/Rectangle 23.png")} alt='man' width={'400px'} height={'400px'}/>
        <div className='contents'>
          <div className='h3-1'>
          <h3><FontAwesomeIcon style={{color:"green",paddingRight:'5px'}} icon={faCheckCircle}/>SEAMLESS COLLABORATION</h3>
          <p>Our user-friendly platform ensures a seamless collaboration experience. </p>
          </div>
           <div className='h3-2'>
            <h3><FontAwesomeIcon style={{color:"green",paddingRight:'5px'}} icon={faCheckCircle}/>Quick Response Time</h3>
           </div>
           <div className='h3-3'>
          <h3 ><FontAwesomeIcon style={{color:"green",paddingRight:'5px'}} icon={faCheckCircle}/>SECURE AND RELIABLE</h3>
          <p>Your safety and security are our top priorities.
             We implement robust measures to protect your data and financial transactions.
          </p>
          </div>
        </div>
      </div>
      </div>
    </div>

<Footer/>

</div>

    
  );
}

export default LandingPage;


