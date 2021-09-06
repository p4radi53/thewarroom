import React, { useState } from 'react';
import '../styles/FAQSection.scss';

function FAQField(props) {
    const [isOn, toggleIsOn] = useState(false);

    return (
        <div className="faq-field">
            <h6 className={`faq-question ${isOn ? "active" : ""}`} onClick={() => toggleIsOn(!isOn)}>{props.question}</h6>
            <hr className="faq-hr" />
            <div className={`faq-hide ${isOn ? "active" : ""}`}>
                <p className="faq-answer">
                    {props.answer}
                </p>
            </div>
        </div>
    )
}

function FAQSection(props) {
    let FAQSectionValues = props.FAQSectionValues;
    return (
        <section className="faq-section">
            <div className="container">
            <h3 className="primary">The most popular questions</h3>
            {
                FAQSectionValues.map((item, index) => {
                    return (
                        <FAQField 
                        question={item.question}
                        answer={item.answer}
                        />
                    )
                })
            }
            </div>
        </section>
    )
}

export default FAQSection;