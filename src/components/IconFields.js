import React from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import '../styles/IconFields.scss';
import Partners from '../pages/partners/Partners';

function IconField(props) {
    return (
        <div className="iconfield">
            <div className="iconfield-wrap">
                <div className="iconfield-header">
                    <i className={`iconfield-icon ${props.icon}`}></i>
                    <h4 className="iconfield-title">{props.title}</h4>
                </div>
                <p>{props.content}</p>
            </div>
            {
                props.linkURL ?
                <div className="iconfield-link-wrapper">
                <Link to={props.linkURL}>{props.linkText}</Link>
                </div> :
                null
            }
            
            
        </div>
    )
}

function IconFields(props) {
    let iconFieldsValues = props.iconFieldsValues;
    let nCols = iconFieldsValues.length;

    const isMobile = useMediaQuery({ query: '(max-width: 960px'});

    return (
        <div className={`iconfields ${isMobile ?
        "mobile" : ""}`} style={{
            "gridTemplateColumns": `repeat(${nCols}, 1fr)`,
        }}>
        {
            iconFieldsValues.map((item, index) => {
            return (
                <IconField
                    title={item.title}
                    icon={item.icon}
                    content={item.content}
                    linkText={item.linkText}
                    linkURL={item.linkURL}
                    key={index}
                />
            )
        })

        }
        </div>
    )
}

export default IconFields;