
import React from 'react';
import '../assets/css/join.css'
import { ICONS } from '../assets/images';

function Join() {
  return (
    <div className="container7">
      <img src={ICONS.join} alt="Frame Image" className="image" />
      <div className="text">Join the ECB Community Today</div>
      <div className="content-right">
        <div className="step">
          <div className="step-number">01</div>
          <div className="step-content">
            <h2>Sign Up</h2>
            <p>Create your ECB account by providing basic information. If you're already a member, log in to your account.</p>
          </div>
        </div>
        <div className="step">
          <div className="step-number">02</div>
          <div className="step-content">
            <h2>Complete Your Profile</h2>
            <p>Build your borrower or investor profile, providing essential details and verifying your identity.</p>
          </div>
        </div>
        <div className="step">
          <div className="step-number">03</div>
          <div className="step-content">
            <h2>Browse Investment Proposals</h2>
            <p>For investors, explore borrower profiles and investment plans to find the right opportunities for you.</p>
          </div>
        </div>
        <div className="step">
          <div className="step-number">04</div>
          <div className="step-content">
            <h2>Fund or Borrow</h2>
            <p>Investors, fund your chosen projects, while borrowers, present your investment proposals and receive funding.</p>
          </div>
        </div>
        <div className="step">
          <div className="step-number">05</div>
          <div className="step-content">
            <h2>Grow Together</h2>
            <p>Collaborate, support, prosper: Together, we soar within the ECB community.</p>
          </div>
        </div>
        
          <button className="join-now-button">
            Join Now <span className="arrow-symbol">&#8594;</span>
          </button>
        </div>
      </div>
  
  );
}

export default Join;

