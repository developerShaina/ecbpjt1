
import React from 'react';
import { Card } from 'react-bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/partner.css';
import { ICONS } from '../assets/images';

function Partners() {
  return (
    <>
    <div className="partners-container">
    <h2 className="partners-heading">Our Partners</h2>
      <div className="left-slide">
        <Card className="card">
          <Card.Img src={ICONS.gopay} alt="Second slide" />
        </Card>
        <Card className="card">
          <Card.Img src={ICONS.paypal} alt="Third slide" />
        </Card>
        <Card className="card">
          <Card.Img src={ICONS.paypal1} alt="Fourth slide" />
        </Card>
        <Card className="card">
          <Card.Img src={ICONS.visa} alt="Fifth slide" />
        </Card>
        <Card className="card">
          <Card.Img src={ICONS.pay} alt="Sixth slide" />
        </Card>
      </div>
      <div className="right-slide">
        <Card className="card">
          <Card.Img src={ICONS.pay} alt="Sixth slide" />
        </Card>
        <Card className="card">
          <Card.Img src={ICONS.visa} alt="Fifth slide" />
        </Card>
        <Card className="card">
          <Card.Img src={ICONS.paypal1} alt="Fourth slide" />
        </Card>
        <Card className="card">
          <Card.Img src={ICONS.paypal} alt="Third slide" />
        </Card>
        <Card className="card">
          <Card.Img src={ICONS.gopay} alt="Second slide" />
        </Card>
      </div>
    </div></>
    
  );
}

export default Partners;



