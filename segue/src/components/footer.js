import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Footer = () => {
    return (
      <TypeAnimation
        sequence={[
          'Did you know?', // Types 'One'
          1000, // Waits 1s
          'It\'s World Autism Acceptance Week',
          2000, // Waits 2s
          '27 March - 2 April 2023',
          () => {
            console.log('Sequence completed'); // Place optional callbacks anywhere in the array
          }
        ]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        style={{ fontSize: '2em', display: 'inline-block' }}
      />
    );
  };

// function Footer() {
//     return(
//     <div>
//         <p className="middle">World Autism Acceptance Week 27 March - 2 April 2023</p>
//     </div>
//     );
//   }
  
  export default Footer;