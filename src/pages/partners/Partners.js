import React from 'react';
import Intro from '../../components/Intro';
import PhotoGrid from '../../components/PhotoGrid';

import bg from './Partners.jpg';
import { partners2022 } from '../../content/partners2022';
import { partners2022Strategic } from '../../content/partners2022Strategic';

function Partners() {
    return (
      <>
        <Intro backgroundImage={bg} title="2022 Partners"></Intro>
        <section>
          <div className="container">
            <h3 className="primary">2022 Strategic Partners</h3>
            <PhotoGrid photoGridItems={partners2022Strategic} gridType="logos" />
          </div>
        </section>
        <section>
          <div className="container">
            <h3 className="primary">2022 Partners</h3>
            <PhotoGrid photoGridItems={partners2022} gridType="logos" />
          </div>
        </section>
      </>
    );
}

export default Partners;