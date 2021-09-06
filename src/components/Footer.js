import React from 'react';
import '../styles/Footer.scss';

function Footer() {
    return (
        <footer className="white">
            <div className="container">
                <h4>The WARroom</h4>
                <p>
                    Al. Niepodległości 162/66b <br/>
                    Warsaw, Poland <br />
                    warroom@cemsclub.pl
                </p>
                <p className="footer-copyright">
                © Copyright CEMS Club Warsaw 2021
                </p>
            </div>
        </footer>
    )
}

export default Footer;