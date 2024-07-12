import React, { useState } from 'react';
import './follow.scss'; // Assuming you have your styles in a separate CSS file
import Footer from './Footer';
const Design = () => {
  const [activeOption, setActiveOption] = useState('home');

  const handleClick = (option) => {
    setActiveOption(option);
  };

  return (
    <div className="container" >
      <div className="main-content">
        <h1>Are you staying in or going out?</h1>
        <div className="illustration">
          <div className="boy">
            <img src="https://meowlivia.s3.us-east-2.amazonaws.com/codepen/boy.svg" width="90px" alt="boy" />
          </div>
          <div className="person-type-wrapper">
            <div className={`person-type home-body ${activeOption === 'home' ? 'active' : ''}`}>
              <div className="scenery">
                <img src="https://meowlivia.s3.us-east-2.amazonaws.com/codepen/indoor.svg" height="250" alt="indoor" />
              </div>
              <div className="background-items">
                <img src="https://meowlivia.s3.us-east-2.amazonaws.com/codepen/furniture.svg" width="270" alt="furniture" />
              </div>
              <div className="foreground-items">
                <img src="https://meowlivia.s3.us-east-2.amazonaws.com/codepen/playstation.svg" width="65" alt="playstation" />
              </div>
            </div>
            <div className={`person-type outdoor-person ${activeOption === 'outdoor' ? 'active' : ''}`}>
              <div className="scenery">
                <img src="https://meowlivia.s3.us-east-2.amazonaws.com/codepen/outdoor.svg" height="250" alt="outdoor" />
              </div>
              <div className="background-items">
                <img src="https://meowlivia.s3.us-east-2.amazonaws.com/codepen/sky.svg" width="220" alt="sky" />
              </div>
              <div className="foreground-items">
                <img src="https://meowlivia.s3.us-east-2.amazonaws.com/codepen/dogtree.svg" width="200" alt="dogtree" />
              </div>
            </div>
          </div>
        </div>
        <div className="option-wrapper" style={{backgroundColor : "#7079f0"}}>
          <div className={`option ${activeOption === 'home' ? 'active' : ''}`} onClick={() => handleClick('home')} data-option="home">I'm attached to my home.</div>
          <div className={`option ${activeOption === 'outdoor' ? 'active' : ''}`} onClick={() => handleClick('outdoor')} data-option="outdoor">Hell yeah, I love the outdoors!</div>
        </div>
        <Footer/>
      </div>
      
    </div>
  );
};

export default Design;
