import React from 'react';
import '../styles/Button.scss'

function Button(props) {
    return (
        <button className={`btn ${"btn-" + props.buttonType}`} href={props.buttonURL}>
            {props.buttonInnerText}
        </button>
    )
}

export default Button;