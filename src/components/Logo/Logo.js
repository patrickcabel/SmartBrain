import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css';


const Logo = () => {
    return(
        <div className="ma4 mt0 mw5">
    <Tilt className="Tilt br2 shadow-2"options={{max:55}} style={{display: 'flex', justifyContent: 'flex-start', width: '100%'}}>
      <div >
        <h1>smartBrain 👀</h1>
      </div>
    </Tilt>
        </div>
    )
}
 
export default Logo;