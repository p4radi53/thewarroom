import React from "react";
import Intro from "../../components/Intro";
import { useMediaQuery } from "react-responsive";

import "./Home.scss";
import IconFields from "../../components/IconFields";
import Button from "../../components/Button";
import PhotoGrid from "../../components/PhotoGrid";

import bg from "./Home.jpg";
import { partners2022 } from "../../content/partners2022";
import { partners2022Strategic } from "../../content/partners2022Strategic";

let iconFieldsValues = [
  {
    title: "What it is",
    icon: "fas fa-globe-europe",
    content:
      "The WARroom gathers CEMS MIM students from around the world to solve business case studies together, learn from consultants and exchange new ideas.",
    linkText: "Learn more about the event",
    linkURL: "/event",
  },
  {
    title: "How to register",
    icon: "fas fa-pen",
    content:
      "Grab an opportunity of gaining new skills, networking with the best companies and meeting new people. Sounds exciting?",
    linkText: "Learn how to register",
    linkURL: "/register",
  },
  {
    title: "Who we are",
    icon: "fas fa-users",
    content:
      "We are a group of students from SGH Warsaw School of Economics who are dedicated to creating a great event for our fellow CEMSies.",
    linkText: "Learn who we are",
    linkURL: "/about",
  },
];

function Home() {
  const isMobile = useMediaQuery({ query: "(max-width: 960px)" });

  return (
    <>
      <Intro
        backgroundImage={bg}
        isHigh={true}
        title={
          isMobile
            ? "WARroom 2022"
            : "WARroom | Warsaw Consulting Conference 2022"
        }
        subtitle={
          isMobile
            ? null
            : "November 23-25, 2022 | Warsaw School of Economics | GMT +2"
        }
      />
      <section className="home-cta">
        <div className="container">
          <h4
            style={{
              margin: "1em 0",
            }}
          >
            More Information
          </h4>
          <p>
            {
              //This year the WARroom Warsaw Consulting Conference will take place on 23-25 November 2022.<br/> The application will be open 27 September - 7 October.<br/>
            }
            For more information, check out our Facebook page.
          </p>
          {/*<Button 
                    buttonType="primary"
                    buttonInnerText="Register Here"
                    buttonURL="https://71ylq1bt2cv.typeform.com/to/HUdHPD9K"
                />*/}
          <Button
            buttonType="primary"
            buttonInnerText="Facebook"
            buttonURL="https://www.facebook.com/thewarroomconference"
          />
        </div>
      </section>
      <section>
        <div className="container">
          <IconFields iconFieldsValues={iconFieldsValues} />
        </div>
      </section>
      <section>
        <div className="container">
          <h3
            className="primary"
            style={{
              textAlign: "center",
            }}
          >
            2022 Strategic Partner
          </h3>
          <PhotoGrid photoGridItems={partners2022Strategic} gridType="logos" />
        </div>
      </section>
      <section>
        <div className="container">
          <h3
            className="primary"
            style={{
              textAlign: "center",
            }}
          >
            2022 Partners
          </h3>
          <PhotoGrid photoGridItems={partners2022} gridType="logos" />
        </div>
      </section>
      <section>
        <div className="container"></div>
      </section>
    </>
  );
}

export default Home;
