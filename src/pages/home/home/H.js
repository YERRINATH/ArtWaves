import React, { useEffect } from 'react';
import { CompareContainer, BeforeSection, AfterSection, RangeInput } from './styledComponents';
import HorizontalSwiper from './CardLayouts';
import './H.css';
import Design from './follow';
import RotatingLogos from '../../navbar/VerticalnNavbar';
const HomePage = () => {
  const [forceRender, setForceRender] = React.useState(false);
  useEffect(() => {
    const range = document.getElementById('range');
    if (range) {
      range.oninput = () => document.body.style.setProperty('--pos', `${range.value}%`);
    }
    
    // Add event listener for popstate to reload specific elements
    const handlePopState = () => {
      // Reload CompareContainer by forcing re-render
      setForceRender(prev => !prev);
    };
    window.addEventListener('popstate', handlePopState);
    
    // Cleanup function
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);
  
  return (
    <div style={{ overflowY: 'auto', height: '100vh', padding: '80px'}}>
      <div className="homepage-container">
        <CompareContainer key={forceRender} >
        <BeforeSection>
  <img src="data:image/svg+xml,%3Csvg width='550' height='550' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0' y='0' width='550' height='550' fill='%23b3e0ff'/%3E%3Ccircle cx='50' cy='50' r='30' fill='%23FFD700'/%3E%3Cline x1='50' y1='20' x2='50' y2='0' stroke='%23FFD700' stroke-width='2'/%3E%3Cline x1='80' y1='35' x2='100' y2='35' stroke='%23FFD700' stroke-width='2'/%3E%3Cline x1='110' y1='50' x2='130' y2='70' stroke='%23FFD700' stroke-width='2'/%3E%3Cline x1='120' y1='80' x2='140' y2='100' stroke='%23FFD700' stroke-width='2'/%3E%3Ccircle cx='150' cy='150' r='80' fill='%23000033'/%3E%3Ccircle cx='120' cy='150' r='30' fill='%23ffffff'/%3E%3C/svg%3E" alt="Runner" height={550} width={550} />
</BeforeSection>
<AfterSection>
  <img src="data:image/svg+xml,%3Csvg width='550' height='550' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0' y='0' width='550' height='550' fill='%23f5f5f5'/%3E%3Ccircle cx='500' cy='100' r='30' fill='%23ffd700'/%3E%3Cpath d='M 50 200 q 30 -30 60 0 q 30 -30 60 0 q 30 -30 60 0 q 30 -30 60 0' fill='%23ffffff'/%3E%3Cpath d='M 200 220 q 30 -30 60 0 q 30 -30 60 0 q 30 -30 60 0 q 30 -30 60 0' fill='%23ffffff'/%3E%3Crect x='0' y='400' width='550' height='150' fill='%2390ee90'/%3E%3Cpath d='M 150 400 l 20 -50 l 60 30 l -20 50 Z' fill='%23f0f0f0' stroke='%23000000' stroke-width='2'/%3E%3Crect x='170' y='350' width='8' height='80' fill='%23f0f0f0' stroke='%23000000' stroke-width='2'/%3E%3Ccircle cx='140' cy='395' r='10' fill='%23f0f0f0' stroke='%23000000' stroke-width='2'/%3E%3Crect x='400' y='360' width='70' height='60' fill='%23ffffff' stroke='%23000000' stroke-width='2'/%3E%3Ccircle cx='420' cy='370' r='20' fill='%23ff0000' stroke='%23000000' stroke-width='2'/%3E%3Ccircle cx='460' cy='370' r='20' fill='%23008000' stroke='%23000000' stroke-width='2'/%3E%3Ccircle cx='440' cy='410' r='20' fill='%230000ff' stroke='%23000000' stroke-width='2'/%3E%3Ctext x='20' y='30' font-family='Arial' font-size='20' fill='%23000000'%3EBe%20Creative!%3C/text%3E%3C/svg%3E" alt="Roboto" height={550} width={550} />
</AfterSection>

          <RangeInput type="range" id="range" />
        </CompareContainer>
      </div>
      <RotatingLogos/>
      <Design/>
    </div>
  );
};

export default HomePage;
