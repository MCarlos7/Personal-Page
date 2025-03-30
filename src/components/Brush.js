import React, { useEffect,useRef } from 'react';
import '../styles/Brush.css';

const Pincel = ({ x, y }) => {
    useEffect(() => {
      const numPinceladas = 5;
      const delay = 25;
  
      for (let i = 0; i < numPinceladas; i++) {
        setTimeout(() => {
          const pincelada = document.createElement('div');
          pincelada.classList.add('pincelada');
          document.body.appendChild(pincelada);

          pincelada.style.left = `${x + window.scrollX}px`;
          pincelada.style.top = `${y + window.scrollY}px`;
          pincelada.style.transform = `translate(-50%, -50%) rotate(${Math.random() * 360}deg)`;
  
          setTimeout(() => {
            if (pincelada && pincelada.parentNode) {
              pincelada.parentNode.removeChild(pincelada);
            }
          }, 500 + i * delay);
        }, i * delay);
      }
    }, [x, y]);
  
    return null;
  };
  
  export default Pincel;