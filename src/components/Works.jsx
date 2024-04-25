import React from 'react';
import { ICONS } from '../assets/images';
import '../assets/css/works.css';


function Works() {
    return (
        <div className="container">
            <div className="content">

                <img src={ICONS.works} alt="ECB Image" className='content-img' />
            </div>
        </div>
    );
}

export default Works;
