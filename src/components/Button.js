import React from 'react';
import '../styles/Button.scss'

function Button(props) {
    return (
        <a style={{"marginRight": "1em"}} className={`btn ${"btn-" + props.buttonType}`} href={props.buttonURL}>
            {props.buttonInnerText}
        </a>
    )
}

export default Button;  