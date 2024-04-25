import React from 'react';
import '../assets/CSS/peace.css';
import { ICONS } from '../assets/images';

function Peace() {
    return (
        <div className="peace-container">
            <div className="new-container">
                <img src={ICONS.peace} alt="Objects" className="image-left custimage" />
                <div className="text-container">
                    <h1><strong className="bold-text">Transact with Peace of Mind</strong></h1>
                    <div className="section">
                        <h2>Advanced Security Measures</h2>
                        <p><span className="check-symbol">&#10004;</span>You can easily buy an item without cash just using your credit card. </p>
                    </div>
                    <div className="section">
                        <h2>Identity Verification</h2>
                        <p><span className="check-symbol">&#10004;</span>All users undergo a stringent identity verification process to ensure a trusted and secure environment. </p>
                    </div>
                    <div className="section">
                        <h2>Transparent Terms</h2>
                        <p> <span className="check-symbol">&#10004;</span>Borrowers and investors benefit from clear and transparent terms, promoting fairness and trust.</p>
                    </div>
                    <button className="view-all-button">View All</button>
                </div>
            </div>
        </div>
    );
}

export default Peace;
