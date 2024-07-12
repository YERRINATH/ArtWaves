import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MainNav.css'; // Import the CSS file

const logoSrc = "/images/logo.png";
function MainNavbar({ theme }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Simulated login state for demonstration purposes
    // In your real application, you would replace this with Firebase authentication logic
    const user = localStorage.getItem('user');
    if (user) {
      setIsLoggedIn(true);
    }
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleAuthClick = () => {
    if (isLoggedIn) {
      // Handle sign-out logic here
      setIsLoggedIn(false);
      localStorage.removeItem('user'); // Remove user from local storage upon sign out
      // Redirect to home after sign out
      window.location.href = '/home';
    } else {
      // Handle sign-in logic here
      window.location.href = '/auth';
    }
  };

  return (
    <Navbar expand="lg" bg="secondary" variant="dark" className={`fixed-top ${isScrolled ? 'navbar-scrolled' : 'navbar-scroll'}`}>
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logoSrc}
            alt="Logo"
            className="d-inline-block align-top"
            style={{ backgroundColor: 'transparent' ,width: '50px', height: '40px' }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home" className='nav-item'>Home</Nav.Link>
            <Nav.Link href="/about" className='nav-item'>About</Nav.Link>
            <Nav.Link href="/contact" className='nav-item'>Contact</Nav.Link>
          </Nav>
          <Nav>
            {isLoggedIn ? (
              <Nav.Link onClick={handleAuthClick} style={{ color: '#fff', backgroundColor: 'red' }}>
                Sign Out
              </Nav.Link>
            ) : (
              <>
                <Nav.Link href="new_user" style={{ color: '#fff' }}>
                  Sign Up
                </Nav.Link>
                <Nav.Link href="/auth" style={{ color: '#fff' }}>
                  Login
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
