
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

import { ICONS } from '../assets/images';

function FutureOf() {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '120px' }} className='futurOF-main'>

        <div style={{
          backgroundColor: '#626ECA',
          padding: '2rem',
          borderRadius: '40px',
          textAlign: 'left',
          maxWidth: '2920px',
          maxHeight: '8142.72px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '1rem',
          width: '90%',
          height: '600px',
          color: 'white'
        }}>

          <div style={{ flex: '1' }}>
            <h1>Welcome to the Future of Financial Empowerment</h1>
            <h2>Unlocking Opportunities for Borrowers and Investors</h2>
            <p>Welcome to ECB - Everyone Can Borrow, the cutting-edge online currency platform that is revolutionizing the way individuals invest and borrow money. Our platform empowers borrowers to bring their innovative projects to life by connecting them with a community of eager investors seeking profitable opportunities. Whether you're a borrower with a promising investment idea or an investor looking to diversify your portfolio, ECB is your gateway to financial success.</p>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <a href="#" style={{ backgroundColor: '#FFA500', color: 'white', padding: '0.5rem 1rem', borderRadius: '0.5rem', textDecoration: 'none', marginRight: '1rem', display: 'flex', alignItems: 'center' }}>
                Join Now
                <span style={{ marginLeft: '0.25rem', marginRight: '0.5rem', fontSize: '1.2rem' }}>➔</span>
              </a>

              <a href="#" style={{ backgroundColor: 'white', color: 'black', padding: '0.5rem 1rem', borderRadius: '0.5rem', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                <FontAwesomeIcon icon={faPlay} style={{ color: 'black', marginRight: '0.5rem' }} />
                Watch Demo
              </a>
            </div>
          </div>

          <img src={ICONS.futureof} alt="Image"  className="customImage"style={{ maxHeight: '1000px', marginLeft: '1rem' }} />
        </div>
      </div>
      <br />
      <br />
    </>
  );
}

export default FutureOf;