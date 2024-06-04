import React, { useState } from 'react';
import { Alert, Form, Button, Container, Row, Col, Dropdown, DropdownButton } from 'react-bootstrap';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('Customer'); // Default user type
  const [showAlert, setShowAlert] = useState(false); // State to control the alert visibility

  const handleLogin = (e) => {
    e.preventDefault();
    // Here you would typically validate the credentials
    // For demonstration, we'll assume the login is successful and show the alert
    setShowAlert(true);
    // You should set a timeout for the alert to disappear or let the user close it manually
    setTimeout(() => {
      setShowAlert(false);
    }, 5000); // Alert will disappear after 5 seconds
  };

  return (
    
    <Container className="landingPage">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2 className="text-center">Login</h2>
          {showAlert && (
            <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
              You have successfully logged in!
            </Alert>
          )}
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required // Makes the field required
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required // Makes the field required
              />
            </Form.Group>

            <DropdownButton
              alignRight
              title={userType}
              id="dropdown-menu-align-right"
              onSelect={(e) => setUserType(e)}
            >
              <Dropdown.Item eventKey="Customer">Customer</Dropdown.Item>
              <Dropdown.Item eventKey="RepairShop">Repair Shop</Dropdown.Item>
            </DropdownButton>

            <Button variant="primary" type="submit" className="mt-3">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
      
    </Container>
   
  );
};

export default LoginPage;
