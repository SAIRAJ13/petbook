import React from 'react';
import './Logo.css';
import logo from './new-logo.png';

const Logo = () => {
    return (
        <div className='ma4 mt0 tc'>
           
                <div className="Tilt-inner pa3 ">
                    <img style={{ paddingTop: '5px', paddingLeft: '5px' }} alt='logo' width='500' src={logo} />
                </div>
            
        </div>
    );
}

export default Logo;