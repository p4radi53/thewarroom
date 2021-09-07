import React from 'react';
import { Link } from 'react-router-dom';
import Intro from '../../components/Intro';

import './Register.scss'

import bg from './Register.jpg';

function Register() {
    return (
        <>
        <Intro backgroundImage={bg} title="Register"></Intro>
        <section className="register-cta">
            <div className="container">
                <h3>Register in September</h3>
            </div>
        </section>
        <section className="register-description">
            <div className="container">
                <h3 className="primary">The Register Process</h3>
                <p>The WARroom welcomes CEMS MIM students from all around the world. This year the conference fee is 10€ and open to all applicants.</p>
                <div className="register-description-wrapper">
                    <h5>How to register?</h5>
                    <p>Submit your application by filling the form linked here once the application is open.</p>
                </div>
                <div className="register-description-wrapper">
                    <h5>Who is eligible?</h5>
                    <p>The WARroom welcomes CEMS MIM students from all around the world.</p>
                </div>
                <div className="register-description-wrapper">
                    <h5>What is the fee to participate?</h5>
                    <p>This year the conference fee is 10€ and open to all applicants. The application will be open soon.</p>
                </div>
                <div className="register-description-wrapper">
                    <h5>Want to know more?</h5>
                    <p>Take a look at our FAQ page {'>'} <Link to="/FAQ">"Frequently asked quetions"</Link></p>
                </div>
            </div>
        </section>
        </>
    )
}

export default Register;