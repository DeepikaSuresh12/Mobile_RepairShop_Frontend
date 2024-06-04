import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css'; // Uncomment this line to include your custom CSS
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import MobileRepairServices from './MobileRepairServices.jsx';

// Define the HomePage component
function RepairShop() {

    // Get the user ID from local storage
    

    // Return the JSX for the HomePage component
    return (
        <div className="App">
            <NavBar />
            <HeroSection />
            <Services />
            <Footer />
        </div>
        
    );
}

// Define the NavBar component
const NavBar = () => {


    // var userId=sessionStorage.getItem("userId")
    var shopId=sessionStorage.getItem("userId")

    return (
        <Navbar bg="primary" variant="dark" expand="lg" sticky="top">
        <Navbar.Brand href="#home">Mobile Repair Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link> */}
            <Nav.Link href={`/appointments/${shopId}`}>Appointments</Nav.Link>
            <a href="/"><button>Log Out</button></a>
            {/* <Nav.Link href="#services">Services</Nav.Link> */}
            {/* <Nav.Link href="#contact">Contact</Nav.Link> */}
            {/* <Nav.Link href={`/history/${userId}`}>History</Nav.Link> */}
            <Nav.Item>
              <Navbar.Text>
                {/* <a href={`/profile/${userId}`}> */}
                  <i className="fas fa-user-circle" style={{ fontSize: "2rem", color: "white" }}></i>
                {/* </a> */}
              </Navbar.Text>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  };

// Define the HeroSection component

const HeroSection = () => {
    return (

      
        <div className="jumbotron jumbotron-fluid text-center bg-primary text-white">
            <div className="container">
                <h4 className="display-5">Welcome to Mobile Repair Shop</h4>
                <p className="lead">Fast, reliable, and affordable mobile repair services.</p>
            </div>
        </div>
    );
};

// Define the Services component
const Services = () => {
    return (
        <div className="container" id="services" style={{ 
          backgroundImage: 'url("https://visible.scene7.com/is/image/visible/1022_BLOG_POST_FEATURED_IMAGES_640x400-10---FNL?$WebP$")', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
      }}>
            <h2>Top Mobile Phone Repair & Services in Madurai</h2>
            {/* <MobileRepairServices></MobileRepairServices> */}
            <div className="row">
                <ServiceCard title="Screen Replacement" description="Fix cracked or broken screens quickly and efficiently." />
                <ServiceCard title="Battery Replacement" description="Replace your old battery for longer life and better performance." />
                <ServiceCard title="Water Damage Repair" description="Repair water-damaged phones with expert care." />
                <ServiceCard title="Software Issues" description="Resolve software glitches and update your phone to the latest version." />
            </div>
        </div>
    );
};


// Define the ServiceCard component
const ServiceCard = ({ title, description }) => {
    return (
        <div className="col-md-3">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>
    );
};

const Footer = () => {
  return (
    <footer className="bg-dark text-center text-white">
    {/* //   <div className="container p-4 pb-0">
    //     <section className="mb-4">
    //       <a className="btn text-white btn-floating m-1" style={{backgroundColor: "#3b5998"}} href="#!" role="button"><i className="fab fa-facebook-f"></i></a>
    //       <a className="btn text-white btn-floating m-1" style={{backgroundColor: "#55acee"}} href="#!" role="button"><i className="fab fa-twitter"></i></a>
    //       <a className="btn text-white btn-floating m-1" style={{backgroundColor: "#dd4b39"}} href="#!" role="button"><i className="fab fa-google"></i></a>
    //       <a className="btn text-white btn-floating m-1" style={{backgroundColor: "#ac2bac"}} href="#!" role="button"><i className="fab fa-instagram"></i></a>
    //       <a className="btn text-white btn-floating m-1" style={{backgroundColor: "#0082ca"}} href="#!" role="button"><i className="fab fa-linkedin-in"></i></a>
    //       <a className="btn text-white btn-floating m-1" style={{backgroundColor: "#333333"}} href="#!" role="button"><i className="fab fa-github"></i></a>
    //     </section>
    //   </div>
    //   <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
    //     © 2024 Copyright:
    //     <a className="text-white" href="https://mobilerepairwebsite/">mobilerepairwebsite.com</a>
    //   </div> */}
    </footer>
  );
};

export default RepairShop;
