
import React, { useState } from 'react';
import '../assets/css/borrow.css';


import { ICONS } from '../assets/images';

function Borrow() {
  const [accordionItems, setAccordionItems] = useState([
    { id: 1, title: 'Create Your Borrower Profile', content: 'Join a vibrant community of borrowers and investors who support and collaborate to achieve financial growth together.', isOpen: false },
    { id: 2, title: 'Flexible Repayment Options', content: 'Join a vibrant community of borrowers and investors who support and collaborate to achieve financial growth together.', isOpen: false },
    { id: 3, title: 'Investor Support', content: 'Join a vibrant community of borrowers and investors who support and collaborate to achieve financial growth together.', isOpen: false }
  ]);
  const [accordionItems1, setAccordionItems1] = useState([
    { id: 1, title: 'Diversify Your Portfolio', content: 'Join a vibrant community of borrowers and investors who support and collaborate to achieve financial growth together.', isOpen: false },
    { id: 2, title: 'Earn Attractive Returns', content: 'Join a vibrant community of borrowers and investors who support and collaborate to achieve financial growth together.', isOpen: false },
    { id: 3, title: 'Build Connections', content: 'Join a vibrant community of borrowers and investors who support and collaborate to achieve financial growth together.', isOpen: false }
  ]);

  const toggleAccordion = (itemId) => {
    setAccordionItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  };
  const toggleAccordion1 = (itemId) => {
    setAccordionItems1(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  };
  return (
    <>
        <div className="d-flex justify-content-center">

        <div className='borrow-main'>
          <div className="container1">
            <h2 className="for-borrow">For Borrow -</h2>
            <p>
              ECB offers a platform to showcase investment proposals, access capital without barriers, and enjoy flexible repayment options. Bring your vision to life with our support!
            </p>
            <div className="wrapper">
              <div className="accordion" id="accordionExample">
                {accordionItems.map(item => (
                  <div className="accordion-item" key={item.id}>
                    <h2 className="accordion-header" id={`heading${item.id}`}>
                      <button
                        className={`accordion-button ${item.isOpen ? '' : 'collapsed'}`}
                        type="button"
                        onClick={() => toggleAccordion(item.id)}
                        aria-expanded={item.isOpen}
                        aria-controls={`collapse${item.id}`}
                      >
                        {item.title}
                      </button>
                    </h2>
                    <div
                      id={`collapse${item.id}`}
                      className={`accordion-collapse collapse ${item.isOpen ? 'show' : ''}`}
                      aria-labelledby={`heading${item.id}`}
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>{item.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button className="get-started-button">
              Getting Started with <span className="arrow-symbol">&#8594;</span>
            </button>
          </div>

          <div className="image-container">
            <img src={ICONS.blackimage} alt="Excited girl" className='borrow-image' />
          </div>
        </div>
  {/* sec */}
        <div className='borrow-main mt-5 ms-3'>
          <div className="image-container">
            <img src={ICONS.coinimage} alt="Frame Image" className="frame-image" />
          </div>

          <div className="container2">
            <h2 className="for-borrow"> -For Investors</h2>
            <p>
            Explore diverse investment opportunities with ECB. Choose from borrower profiles and plans for attractive returns. Join our collaborative community 
            </p>
            <div className="wrapper">
              <div className="accordion" id="accordionExample">
                {accordionItems1.map(item => (
                  <div className="accordion-item" key={item.id}>
                    <h2 className="accordion-header" id={`heading${item.id}`}>
                      <button
                        className={`accordion-button ${item.isOpen ? '' : 'collapsed'}`}
                        type="button"
                        onClick={() => toggleAccordion1(item.id)}
                        aria-expanded={item.isOpen}
                        aria-controls={`collapse${item.id}`}
                      >
                        {item.title}
                      </button>
                    </h2>
                    <div
                      id={`collapse${item.id}`}
                      className={`accordion-collapse collapse ${item.isOpen ? 'show' : ''}`}
                      aria-labelledby={`heading${item.id}`}
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>{item.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button className="get-started-button">
              Getting Started with <span className="arrow-symbol">&#8594;</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Borrow;

