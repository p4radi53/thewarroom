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
                <div style={{
                    "display": "grid",
                    "gridTemplateColumns": "repeat(2, 50px)",
                    "gap": ".5em"
                }}>
                    <a href="https://www.facebook.com/thewarroomconference" className="footer-link"><i className="fab fa-facebook-square"></i></a>
                    <a href="#" className="footer-link"><i className="fab fa-linkedin"></i></a>
                </div>
                <p className="footer-copyright">
                © Copyright CEMS Club Warsaw 2021
                </p>
            </div>
        </footer>
    )
}

export default Footer;