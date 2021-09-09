import React from 'react';
import FAQSection from '../../components/FAQSection';
import Intro from '../../components/Intro';

import bg from './FAQ.jpg';

let FAQSectionValues = [
    {
        question: "What is the WARroom?",
        answer: "Warsaw Consulting Conference 2021 is one of the biggest Management Consulting Conferences in Poland focused on CEMS MIM students. The WARroom bridges the gap between theory in the classroom & companies reality by confronting students with real business case studies. The event is also an opportunity to meet potential employers and discover new career paths.",
    },
    {
        question: "When does the WARroom take place?",
        answer: "The WARroom Consulting Conference 2021 begins on 24th and ends on 26th of November.",
    },
    {
        question: "Who can participate in the WARroom?",
        answer: "To be eligible for participation, you must be currently enrolled in CEMS Master in International Management.",
    },
    {
        question: "How can I apply?",
        answer: "You can complete the entire application process online. For more information go to the 'Register' bookmark.",
    },
    {
        question: "How much does it cost to participate?",
        answer: "In 2021, the conference fee is 50€ for only participation, and 100€ for participation and accommodation.",
    },
    {
        question: "Which language(s) will be used?",
        answer: "The conference will be held entirely in English.",
    },
    {
        question: "How are participants chosen for the WARroom conference?",
        answer: "They are chosen based on their application and CV.",
    },
    {
        question: "When will I be notified about the outcome of my application?",
        answer: "We aim to respond to your application as soon as possible. Due to the high volume of applicants anticipated for the WARroom conference, please allow a period of at least 2 weeks after the submission of your application.",
    },
    {
        question: "I have been selected but I won't be able to attend, what should I do?",
        answer: "All participants are asked to inform the organization team as early as possible, if they are no longer able to attend. This opens up the opportunity for another student to participate instead of them. The team can be contacted at: warroom@cemsclub.pl",
    },
    {
        question: "Do I have to take part in the whole event?",
        answer: "Yes, attendance in the activities matters, as you can get CEMS Skill Seminars. Only by taking part in all case studies it is possible to fully benefit from the educational and networking potential of the event.",
    },
    {
        question: "How can I get CEMS Skills Seminars?",
        answer: "To get CEMS Skill Seminars you have to attend all of the case studies - attendance will be verified.",
    },
    {
        question: "Will there be networking events with the companies?",
        answer: "Of course, we are preparing for you several networking opportunities. Participants and representatives of our Partners will take part in the innovative events such as Rotation Dinner, Wine Tasting and Consulting Coffee, and will have a chance to build new exciting relationships.",
    }

]

function FAQ() {
    return (
        <>
        <Intro backgroundImage={bg} title="FAQ"></Intro>
        <FAQSection
            FAQSectionValues={FAQSectionValues}
        />
        </>
    )
}

export default FAQ;