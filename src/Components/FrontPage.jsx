import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Button, Row, Col, Modal } from 'react-bootstrap';
const FrontPage = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const handleLoginClick = () => {
      setShowLoginModal(true);
  };

  const handleRegisterClick = () => {
      setShowRegisterModal(true);
  };

  const handleUserTypeSelect = (userType) => {
    // Redirect based on user type
    let redirectUrl;
    if (userType === 'Customer') {
        redirectUrl = '/customerlogin';
    } else if (userType === 'RepairShop') {
        redirectUrl = '/shoplogin';
    } else if (userType === 'Admin') {
        // Add your new URL here for the Admin type
        redirectUrl = '/adminlogin1';
    } else {
        // Handle any other cases or invalid userType
        console.error('Invalid userType:', userType);
        return;
    }

    window.location.href = redirectUrl;
};
  return (
    <div className='container-fluid vh-100' style={{ backgroundImage: 'url(https://images.squarespace-cdn.com/content/v1/5a4291f68a02c77d75e61974/1640633971448-G8D3BZS5MCQ4GXYVLRDV/phone-repair-slide.jpg?format=1000w)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Navbar bg="light" variant="light" className="w-100 justify-content-center">
        <Container>
          <Navbar.Brand href="#home" className="font-weight-bold text-black center">Mobile Repair Shop</Navbar.Brand>
          
        
        </Container>
      </Navbar>
      
      <Row className="m-auto align-self-center">
    { <Col className="text-center" center>
        <h1 style={{ color: 'white' }}>Welcome to Mobile Repair Website</h1>
        <p style={{ color: 'white' }}>Get started by logging in or registering a new account.</p>
        <Button variant="primary" onClick={handleLoginClick} className="m-2">Login</Button>
        <Button variant="outline-primary" onClick={handleRegisterClick} className="m-2">Register</Button>
    </Col> }
</Row>

                {/* Login Modal */}
                { <Modal show={showLoginModal} onHide={() => setShowLoginModal(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Button variant="secondary" onClick={() => handleUserTypeSelect('Customer')} className="m-2"> Customer Login </Button>
                        <Button variant="secondary" onClick={() => handleUserTypeSelect('RepairShop')} className="m-2"> Repair Shop Login </Button>
                        <Button variant="secondary" onClick={() => handleUserTypeSelect('Adminlogin')} href='/adminlogin1' className="m-2"> Admin Login </Button>
                    </Modal.Body>
                </Modal> }

             {/* {Register Modal}  */}
                <Modal show={showRegisterModal} onHide={() => setShowRegisterModal(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Register</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Button variant="secondary" href="/registercustomer" className="m-2"> Register as Customer </Button>
                        <Button variant="secondary" href="/registershop" className="m-2"> Register as Repair Shop </Button>
                    </Modal.Body>
                </Modal>
    </div>
  )
}

export default FrontPage;