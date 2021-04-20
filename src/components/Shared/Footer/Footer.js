import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const noNamed = []
    const ourAddress = [
        {name: "10, North Komolapur, Komolapur, Dhaka "}
       
    ]
    const services = [
        {name: "Male Grooming Packages" , link: "/grooming"},
        {name: "Hair repair" , link: "/repair"},
        {name: "Hair extensions" , link: "/extensions"},
        {name: "Male Bronzing" , link: "/bronzing"},
        {name: "Mens Eyebrow Re-shape" , link: "/eyebrow-reshape"}
    ]
    const extra = [
        {name: "Mens hair cut" , link: "/haircut"},
        {name: "Mens shaving" , link: "/shaving"},
        {name: "Mens facial" , link: "/facial"},
        {name: "Mens body massage" , link: "/massage"},
        {name: "Mens Skin Care" , link: "/skincare"},
        {name: "Mens hair color" , link: "/haircolor"}
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={""} menuItems={noNamed}/>
                    <FooterCol key={2} menuTitle="Our Features Services" menuItems={services}/>
                    <FooterCol key={3} menuTitle="Regular Services"  menuItems={extra}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-dark">01521564987</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;