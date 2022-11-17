import React from 'react';
import Intro from '../../components/Intro';
import PhotoGrid from '../../components/PhotoGrid';

import bg from './Partners.jpg';
import { partners2022 } from '../../content/partners2022';

function Partners() {
    return (
        <>
        <Intro backgroundImage={bg} title="2022 Partners"></Intro>
        <section>
            <div className="container">
                <h3 className="primary">
                    2022 Partners
                </h3>
                <PhotoGrid
                    photoGridItems={partners2022}
                    gridType="logos"
                />
            </div>
        </section>
        </>
    )
}

export default Partners;