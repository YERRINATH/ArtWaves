import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import './h.scss';
import './H.css';

const img = './images/draw.gif'
const intro = './images/welcome.jpg'
const HomePage = () => {
  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      // Swiper configuration...
    });

    swiper.slideTo(1, false, false);

    // Clean up
    return () => swiper.destroy();
  }, []);

  const introBackground = './images/welcome.jpg'; // Background image path

  return (
    <div className="homepage-container" style={{ backgroundImage: `url(${introBackground})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '100vh' }}>
      <Header />
      <Introduction />
      <div className="overlay">
        <CardLayouts />
      </div>
      <ServicesSection />
      <TestimonialsSection />
      <Footer />
      <div style={{ height: '1000px' }}></div> {/* Add a div with height to make the page scrollable */}
    </div>
  );
};


const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Welcome to Our Website</h1>
        <p>Discover amazing experiences with us</p>
      </div>
    </header>
  );
};

const Introduction = () => {
  return (
    <section className="introduction-section">
      <div className="container" style={{ backgroundImage: `url(${intro})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '100vh' }}>
        <h2>Discover Amazing Experiences</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut euismod faucibus est, at tincidunt lectus. Mauris vitae nibh tellus. Nullam in ex quis nisi ultrices fermentum.</p>
        <button>Get Started</button>
      </div>
    </section>
  );
};




const ServicesSection = () => {
  return (
    <section className="services-section">
      <div className="container">
        <h2>Our Services</h2>
        <div className="services-grid">
          {/* Include service cards here */}
          <div className="service-card">
            <h3>Service 1</h3>
            <p>Description of service 1</p>
          </div>
          <div className="service-card">
            <h3>Service 2</h3>
            <p>Description of service 2</p>
          </div>
          <div className="service-card">
            <h3>Service 3</h3>
            <p>Description of service 3</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <div className="container">
        <h2>Testimonials</h2>
        <div className="testimonial-carousel">
          {/* Include testimonial cards here */}
          <div className="testimonial-card">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod tempus odio, nec posuere ipsum dignissim sit amet.</p>
            <p>- John Doe</p>
          </div>
          <div className="testimonial-card">
            <p>Ut convallis libero ut enim elementum, non semper lectus cursus. Nulla facilisi.</p>
            <p>- Jane Smith</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="contact-info">
          <h3>Contact Us</h3>
          <p>Email: info@example.com</p>
          <p>Phone: +123 456 789</p>
        </div>
        <div className="social-links">
          <h3>Follow Us</h3>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

const CardLayouts = () => {
  return (
    <main>
      
      <div className="swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="swiper-slide-img">
              <img src={img} alt="" />
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" preserveAspectRatio="none">
                <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
              </svg>
            </div>
            <div className="swiper-slide-content">
              <div>
                <h2>Louvre</h2>
                <p>National art museum in Paris, France. It is located on the Right Bank of the Seine in the city's 1st arrondissement (district or ward) and home to some of the most canonical works of Western art, including the Mona Lisa and the Venus de Milo.</p>
                <a className="show-more" href="https://en.wikipedia.org/wiki/Louvre" target="_blank"><svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                  </svg></a>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="swiper-slide-img">
              <img src="https://images.unsplash.com/photo-1543335785-8aadf6d8183c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80" alt="" />
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
              </svg>
            </div>
            <div className="swiper-slide-content">
              <div>
                <h2>Louvre</h2>
                <p>National art museum in Paris, France. It is located on the Right Bank of the Seine in the city's 1st arrondissement (district or ward) and home to some of the most canonical works of Western art, including the Mona Lisa and the Venus de Milo.</p>
                <a className="show-more" href="https://en.wikipedia.org/wiki/Louvre" target="_blank"><svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                  </svg></a>
              </div>
            </div>
          </div>
          {/* Other slides go here */}
        </div>
      </div>
    </main>
  );
};

export default HomePage;
