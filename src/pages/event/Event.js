import React from 'react';
import IconFields from '../../components/IconFields';
import Intro from '../../components/Intro';
import Button from '../../components/Button';
import PhotoGrid from '../../components/PhotoGrid';

import './Event.scss'
import bg from './Event.jpg';
import bg_cta from './CTA.jpg';

let iconFieldsValues = [
    {
        title: "When",
        icon: "fas fa-calendar-times",
        content: "24-26 November 2021"
    },
    {
        title: "Where",
        icon: "fas fa-map-marker-alt",
        content: "Warsaw School of Economics"
    },
    {
        title: "Who",
        icon: "fas fa-user",
        content: "CEMS MIM Students"
    }
]
let iconFieldsValues2 = [
    {
        title: "Case Studies",
        icon: "fas fa-paste",
        content: "The main goal of the case study is to show the students real-life business cases. Participants will solve the case under the guidance of consultants."
    },
    {
        title: "Mock Interview",
        icon: "fas fa-microphone-alt",
        content: "Our mock interview’s aim is to give participants an occasion to gain a fine professional experience."
    },
    {
        title: "Rotation Dinner",
        icon: "fas fa-utensils",
        content: "We will provide you with great entertainment and icebreaking opportunities to unwind after a day full of business case studies. There will be no place for boredom."
    }
]
let photoGridItems = [
    {
        href: "/images/photos2020/1.jpg"
    },
    {
        href: "/images/photos2020/2.jpg"
    },
    {
        href: "/images/photos2020/3.jpg"
    },
    {
        href: "/images/photos2020/4.jpg"
    },
    {
        href: "/images/photos2020/5.jpg"
    },
    {
        href: "/images/photos2020/6.jpg"
    },
    {
        href: "/images/photos2020/7.jpg"
    },
    {
        href: "/images/photos2020/8.jpg"
    }
]

function Event() {
    return (
        <>
        <Intro backgroundImage={bg} title="WARroom 2021"/>
        <section className="event-main">
            <div className="container">
                <h3 className="primary">The Event</h3>
                <div className="event-paragraph">
                    <h5>Warsaw Consulting Conference</h5>
                    <p>... is a reputable Management Consulting Conference in Poland gathering highly-talented CEMS MIM students from leading business schools. During the event, Participants will be faced with challenging case studies as well as networking possibilities. The event offers a possibility to obtain CEMS Skill Seminars.</p>
                </div>
                <div className="event-paragraph">
                    <h5>Form of the Conference 2021</h5>
                    <p>As everyone longs to meet new people, we strongly believe that this year's conference will be held on the spot in Warsaw. However, in the light of the COVID-19 pandemic, the event may be online. What we are certain of is that not only will participants take part in real business case studies organized by our corporate partners, but also they will have less formal occasions to interact.</p>
                </div>
                <IconFields
                    iconFieldsValues={iconFieldsValues}
                />
            </div>
        </section>
        <section className="event-cta" style={{
            backgroundImage: `url(${bg_cta})`
        }}>
            <div className="container">
                <h3 className="primary">Stay in Touch</h3>
                <p>For up to date information follow us on social media</p>
                <Button
                    buttonType="secondary"
                    buttonInnerText="Our Facebook"
                    buttonURL="https://www.facebook.com/thewarroomconference"
                />
            </div> 
        </section>
        <section className="event-description">
            <div className="container">
                <h3 className="primary">How will it look like?</h3>
                <IconFields
                    iconFieldsValues={iconFieldsValues2}
                />
            </div>
        </section>
        <section>
            <div className="container">
                <h3 className="primary">The WARroom 2019 highlights</h3>
                <PhotoGrid
                    photoGridItems={photoGridItems}
                    gridType="photos"
                />
            </div>
        </section>
        </>
    )
}

export default Event;