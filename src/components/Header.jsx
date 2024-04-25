import React, { useState } from 'react';
// import { Button, Modal } from 'react-bootstrap';
// import ecbSVG from '../assets/images/frame-223.svg';
// import Login from './Login';

function Header() {
  const [showLogin, setShowLogin] = React.useState(false);
  const [showRegister, setShowRegister] = React.useState(false);
  const [activeForm, setActiveForm] = React.useState();
  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  const handleCloseRegister = () => setShowRegister(false);
   return (
    <>
      <div className="header">
        <div className="header-left">
          {/* <img src={ecbSVG} alt="ECB Logo" className="ecb-logo" /> */}
        </div>
        <div className="header-center">
   
   
          MARKETPLACE
        </div>
        <div className="header-right">
          <button className="btn-login" onClick={() => { setActiveForm('login'); handleShowLogin() }}>Login</button>
          <button className="btn-register" onClick={() => { setActiveForm('signup'); handleShowLogin() }}>Register</button>

        </div>
      </div>
      <div>
        <Login setActiveForm={setActiveForm} activeForm={activeForm} showLogin={showLogin} handleClose={handleCloseLogin} />
      </div>
    </>
  );
}

export default Header;