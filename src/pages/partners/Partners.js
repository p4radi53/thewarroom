import React from 'react';
import Intro from '../../components/Intro';
import PhotoGrid from '../../components/PhotoGrid';

import bg from './Partners.jpg';
import { partners2021 } from '../../content/partners2021';

function Partners() {
    return (
        <>
        <Intro backgroundImage={bg} title="2021 Partners"></Intro>
        <section>
            <div className="container">
                <h3 className="primary">
                    2021 Partners
                </h3>
                <PhotoGrid
                    photoGridItems={partners2021}
                    gridType="logos"
                />
            </div>
        </section>
        </>
    )
}

export default Partners;