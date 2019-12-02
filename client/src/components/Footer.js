import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Footer = () => {
    return (
        <div className="fixed-bottom">  
            <Navbar bg="dark" variant="dark">
                <Container className="justify-content-center">
                    <Navbar.Text >Boocket @2019</Navbar.Text>
                </Container>
            </Navbar>
        </div>
    );
};

export default Footer;