import React from 'react';
import { useMediaQuery } from 'react-responsive';


function Photo(props) {
    return (
        <div className="photo">
            <a href={props.href}>
                <img src={props.src} alt="" />
            </a>
        </div>
    )
}

function PhotoGrid(props) {
    
    let photoGridItems = props.photoGridItems
    const isMobile = useMediaQuery({ query: '(max-width: 960px'});

    let width_mobile;
    let width_desktop;
    let grid_gap;
    if (props.gridType === "logos") {
        width_mobile = "75px";
        width_desktop = "150px";
        grid_gap = "3em";
    } else if (props.gridType === "photos") {
        width_mobile = "150px";
        width_desktop = "250px";
        grid_gap = "0";
    }

    return (
        <div className="photogrid" style={{
            display: "grid",
            gridTemplateColumns: `repeat(auto-fill, minmax(${isMobile ? width_mobile : width_desktop}, 1fr))`,
            margin: "2em 0",
            gap: grid_gap
        }}>
            {
                photoGridItems.map((item, index) => {
                    return (
                        <Photo
                            src={item.src}
                            href={item.href}
                            photoURL={item.photoURL}
                            key={index}
                        />
                    )
                })
            }
        </div>
    )
}

export default PhotoGrid;