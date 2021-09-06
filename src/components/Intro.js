import React from 'react';
import '../styles/Intro.scss'

function Intro(props) {
    return (
        <section className={`intro ${props.isHigh ? "intro-high" : ""}`} style={{
            backgroundImage: `url(${props.backgroundImage})`
        }}>
            <div className="container">
                <h1 className="intro-title">
                    {props.title}
                </h1>
                {props.subtitle ? 
                <h2 className='intro-subtitle'>{props.subtitle}</h2> : null}
            </div>
        </section>
    )
}

export default Intro;