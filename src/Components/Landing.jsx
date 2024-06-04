import React, { useState } from 'react';
import { Button, Container, Row, Col, Modal, Navbar } from 'react-bootstrap';

const LandingPage = () => {
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
        const redirectUrl = userType === 'Customer' ? '/customerlogin' : '/shoplogin';

        window.location.href = redirectUrl;
    };

    return (
        <>
        // <div className='container-fluid' style={{ backgroundImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJCP7Lf7Ab8qiZq-WCbf4SzHsp83ZXzvhFBipu2N6Cv5nP54riJxJ6L5Y_Ot4JgGxcrJE&usqp=CAU', backgroundSize: 'cover'}} >
            <Navbar>Admin</Navbar>
            <Container fluid className="d-flex vh-100" id="login" style={{  backgroundImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJCP7Lf7Ab8qiZq-WCbf4SzHsp83ZXzvhFBipu2N6Cv5nP54riJxJ6L5Y_Ot4JgGxcrJE&usqp=CAU', position: "absolute", width: "100%", left: "0", right: "0" }}>
                <Row className="m-auto align-self-center">
                    { <Col className="text-center">
                        <h1>Welcome to Mobile Repair Website</h1>
                        <p>Get started by logging in or registering a new account.</p>
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
                        
                    </Modal.Body>
                </Modal> }

             Register Modal 
                <Modal show={showRegisterModal} onHide={() => setShowRegisterModal(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Register</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Button variant="secondary" href="/registercustomer" className="m-2"> Register as Customer </Button>
                        <Button variant="secondary" href="/registershop" className="m-2"> Register as Repair Shop </Button>
                                                {/* <Button variant="secondary" href="/registershop" className="m-2"> Register as Repair Shop </Button> */}

                    </Modal.Body>
                </Modal>
            </Container>
        // </div>
        </>
    );
};

export default LandingPage;