import React, { useEffect } from 'react';
import './notfound2.scss'
const NotFound = () => {
  const parallax = (e) => {
    const windowWidth = window.innerWidth;
    if (windowWidth < 768) return;
    const halfFieldWidth = document.querySelector(".parallax").offsetWidth / 2;
    const halfFieldHeight = document.querySelector(".parallax").offsetHeight / 2;
    const fieldPos = document.querySelector(".parallax").getBoundingClientRect();
    const x = e.pageX;
    const y = e.pageY - fieldPos.top;
    const newX = (x - halfFieldWidth) / 30;
    const newY = (y - halfFieldHeight) / 30;
    document.querySelectorAll('.parallax [class*="wave"]').forEach((wave, index) => {
      wave.style.transition = "";
      wave.style.transform = `translate3d(${index * newX}px, ${index * newY}px, 0px)`;
    });
  };

  const stopParallax = () => {
    document.querySelectorAll('.parallax [class*="wave"]').forEach(wave => {
      wave.style.transform = "translate(0px,0px)";
      wave.style.transition = "all .7s";
    });
    setTimeout(() => {
      document.querySelectorAll('.parallax [class*="wave"]').forEach(wave => {
        wave.style.transition = "";
      });
    }, 700);
  };

  useEffect(() => {
    document.querySelector(".not-found").addEventListener("mousemove", parallax);
    document.querySelector(".not-found").addEventListener("mouseleave", stopParallax);

    return () => {
      document.querySelector(".not-found").removeEventListener("mousemove", parallax);
      document.querySelector(".not-found").removeEventListener("mouseleave", stopParallax);
    };
  }, []);

  return (
    <div className="not-found parallax">
      <div className="sky-bg"></div>
      <div className="wave-7"></div>
      <div className="wave-6"></div>
      <a className="wave-island" href="/">
        <img src="http://res.cloudinary.com/andrewhani/image/upload/v1524501929/404/island.svg" alt="Island" />
      </a>
      <div className="wave-5"></div>
      <div className="wave-lost wrp">
        <span>4</span>
        <span>0</span>
        <span>4</span>
      </div>
      <div className="wave-4"></div>
      <div className="wave-boat">
        <img className="boat" src="http://res.cloudinary.com/andrewhani/image/upload/v1524501894/404/boat.svg" alt="Boat" />
      </div>
      <div className="wave-3"></div>
      <div className="wave-2"></div>
      <div className="wave-1"></div>
      <div className="wave-message">
        {/* <p>Your're lost</p>
        <p>Click on the island to return</p> */}
      </div>
    </div>
  );
};

export default NotFound;
