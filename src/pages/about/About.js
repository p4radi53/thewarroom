import React from 'react'
import Intro from '../../components/Intro'

import './About.scss'
import bg from './About.jpg'

let teamMembers = [
    {
        name: "Zuzanna Brzozowska",
        position: "Project Coordinator",
        linkedin: "https://www.linkedin.com/in/zuzanna-brzozowska-2a7737205/",
        photoURL: "/images/team2021/zuzanna_brzozowska.jpg",
    },
    {
        name: "Anna Rode",
        position: "Head of Recruitment",
        linkedin: "https://www.linkedin.com/in/anna-rode/",
        photoURL: "/images/team2021/anna_rode.jpg",
    },
    {
        name: "Jakub Klicki",
        position: "Head of Partnerships",
        linkedin: "https://www.linkedin.com/in/jakub-klicki/",
        photoURL: "/images/team2021/jakub_klicki.jpg",
    },
    {
        name: "Dominik Mikulski",
        position: "Head of Entertainment",
        linkedin: "https://www.linkedin.com/in/dominik-mikulski-047998204/",
        photoURL: "/images/team2021/dominik_mikulski.jpg",
    },
    {
        name: "Zuzanna Dwojak",
        position: "Head of Marketing",
        linkedin: "https://www.linkedin.com/in/zuzanna-dwojak/",
        photoURL: "/images/team2021/zuzanna_dwojak.jpg",
    },
    {
        name: "Agnieszka Krakowiak",
        position: "Partnerships Team",
        linkedin: "https://www.linkedin.com/in/agnieszka-krakowiak/",
        photoURL: "/images/team2021/agnieszka_krakowiak.jpg",
    },
    {
        name: "Magdalena Nowacka",
        position: "Marketing Team",
        linkedin: "https://www.linkedin.com/in/magdalena-nowacka-868694169/",
        photoURL: "/images/team2021/magdalena_nowacka.jpg",
    },
    {
        name: "Michał Flis",
        position: "Logistics Team",
        linkedin: "https://www.linkedin.com/in/micha%C5%82-flis-947931213/",
        photoURL: "/images/team2021/michal_flis.jpg",
    },
    {
        name: "Mikołaj Hnatiuk",
        position: "Partnerships Team",
        linkedin: "https://www.linkedin.com/in/miko%C5%82aj-hnatiuk-6529b01a1/",
        photoURL: "/images/team2021/mikolaj_hnatiuk.jpg",
    },
    {
        name: "Natalia Chrapek",
        position: "Marketing Team",
        linkedin: "https://www.linkedin.com/in/natalia-chrapek-ba3409213/",
        photoURL: "/images/team2021/natalia_chrapek.jpg",
    },
    {
        name: "Tomasz Gawlikowski",
        position: "Partnerships Team",
        linkedin: "https://www.linkedin.com/in/tomasz-gawlikowski-7bb9821a2/",
        photoURL: "/images/team2021/tomasz_gawlikowski.jpg",
    },
    {
        name: "Weronika Mazur",
        position: "Recruitment Team",
        linkedin: "https://www.linkedin.com/in/weronika-mazur/",
        photoURL: "/images/team2021/weronika_mazur.jpg",
    },
    {
        name: "Wiktor Koszada",
        position: "Partnerships Team",
        linkedin: "https://www.linkedin.com/in/wiktor-koszada-bb6800203/",
        photoURL: "/images/team2021/wiktor_koszada.jpg",
    }, 
]

function TeamMember(props) {
    return (
        <div className="team-member">
            <img src={props.photoURL} alt="" className="team-member-pic" />
            <hr className="team-member-hr" />
            <span className="team-member-name">{props.name}</span>
            <span className="team-member-position">{props.position}</span>
            <a href={props.linkedin}><i className="fa fa-linkedin"></i></a>
        </div>
    )
}

function About() {
    return (
        <>
        <Intro backgroundImage={bg} title="About Us"></Intro>
        <section className="aboutus">
            <div className="container">
                <h3 className="primary">Our 2021 Team</h3>
                <p>We are a group of students from SGH Warsaw School of Economics who are members of CEMS Club Warsaw. We are dedicated to organize an unforgettable and valuable event for our fellow CEMSies. We would like to give y ou an opportunity of gaining new skills, expanding your professional as well as personal networks.</p>
                <div className="team-member-grid">
                    {
                        teamMembers.map((item,index) => {
                            return (
                                <TeamMember
                                    name={item.name}
                                    position={item.position}
                                    linkedin={item.linkedin}
                                    photoURL={item.photoURL}
                                    key={index}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </section>
        </>
    )
}

export default About;