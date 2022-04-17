import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='footer-btm'>
            <footer className='text-center mt-5 bg-secondary h-100 ' >
                <h3 className='pt-3'>All Rights Reserved by <span className='text-white'>Mr. Photographer</span></h3>
                <p><small>copyright <FontAwesomeIcon className='text-white' icon={faCopyright} /> {year} </small></p>
                <p className='text-white pb-3 '>Feel Free to Contact anytime</p>
            </footer>
        </div>
    );
};

export default Footer;