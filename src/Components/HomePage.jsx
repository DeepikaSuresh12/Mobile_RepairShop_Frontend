import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css'; // Uncomment this line to include your custom CSS
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import MobileRepairServices from './MobileRepairServices.jsx';
import { Modal } from 'react-bootstrap';

// Define the HomePage component
function HomePage() {

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


    var userId=sessionStorage.getItem("userId")

    return (
        
            <Navbar bg="primary" variant="dark" expand="lg" sticky="top">
                {/* Add a mobile icon before the brand name */}
                {/* <Navbar.Brand href="#home"><i className="fas fa-mobile-alt"></i> Mobile Repair Shop</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />-
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        {/* <Nav.Link href="#home">Home</Nav.Link> */}
                        <Nav.Link href="#services">Services</Nav.Link>
                        {/* <Nav.Link href="#contact">Contact</Nav.Link> */}
                        <Nav.Link href={`/history/${userId}`}>History</Nav.Link>
                        <a href="/"><button>Log Out</button></a>
                        
                        
                    </Nav>
                    {/* Add a search bar with a search icon */}
                    {/* <Form inline>
                        <Button variant="outline-success"><i className="fas fa-search"></i></Button>
                    </Form> */}
                </Navbar.Collapse>
            </Navbar>
        );
    };
   
 
    const AppointmentModal = ({ show, handleClose }) => {
      return (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Book Appointment</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Do you want to book an appointment?</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Book
            </Button>
          </Modal.Footer>
        </Modal>
      );
    };

// Define the HeroSection component
const HeroSection = () => {
    return (
        <div className="jumbotron jumbotron-fluid text-center bg-primary text-white">
            <div className="container">
                {/* Change the font color to orange for the welcome message */}
                <h4 className="display-5" style={{ color: 'orange' }}>Welcome to Mobile Repair Shop</h4>
                <p className="lead">Fast, reliable, and affordable mobile repair services.</p>
            </div>
        </div>
    );
};

// Define the Services component
const Services = () => {
    return (
        <div className="container" id="services" style={{ backgroundColor: "#bg-light text-dark" }}>
            <h2>Top Mobile Phone Repair & Services in Madurai</h2>
            <MobileRepairServices></MobileRepairServices>
            {/* <div className="row">
                <ServiceCard title="Screen Replacement" description="Fix cracked or broken screens quickly and efficiently." />
                <ServiceCard title="Battery Replacement" description="Replace your old battery for longer life and better performance." />
                <ServiceCard title="Water Damage Repair" description="Repair water-damaged phones with expert care." />
                <ServiceCard title="Software Issues" description="Resolve software glitches and update your phone to the latest version." /> */}
            {/* </div> */}
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
      <div className="container p-4 pb-0">
        <section className="mb-4">
          <a className="btn text-white btn-floating m-1" style={{backgroundColor: "#3b5998"}} href="#!" role="button"><i className="fab fa-facebook-f"></i></a>
          <a className="btn text-white btn-floating m-1" style={{backgroundColor: "#55acee"}} href="#!" role="button"><i className="fab fa-twitter"></i></a>
          <a className="btn text-white btn-floating m-1" style={{backgroundColor: "#dd4b39"}} href="#!" role="button"><i className="fab fa-google"></i></a>
          <a className="btn text-white btn-floating m-1" style={{backgroundColor: "#ac2bac"}} href="#!" role="button"><i className="fab fa-instagram"></i></a>
          <a className="btn text-white btn-floating m-1" style={{backgroundColor: "#0082ca"}} href="#!" role="button"><i className="fab fa-linkedin-in"></i></a>
          <a className="btn text-white btn-floating m-1" style={{backgroundColor: "#333333"}} href="#!" role="button"><i className="fab fa-github"></i></a>
        </section>
      </div>
      <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
        © 2024 Copyright:
        <a className="text-white" href="https://mobilerepairwebsite/">mobilerepairwebsite.com</a>
      </div>
    </footer>
  );
};

export default HomePage;
