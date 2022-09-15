import React from "react";
import styled from "styled-components";
import { FaChevronCircleRight } from "react-icons/fa";

import about from "../../assets/about.png";
import Button from "../Button";
import { PopupButton } from '@typeform/embed-react'
export default function AboutUs() {
  return (
    <Section className="flex a-center gap" id='About us' name="myScrollToElement">
      <div className="content flex column gap">
        <div className="title-container flex column j-center a-center gap-1">
          <div className="subtitle subdue">
            <h3>About Us</h3>
          </div>
          <div className="title">
            <h2>Why would you choose Picaso?</h2>
          </div>
        </div>
        <div className="flex gap">
          <div className="info flex column gap a-start j-center">
            <p className="subdue">We increase your app's organic installs with a data-driven App Store Optimization strategies ~</p>
            <p className="subdue">
              Picaso is the best full-service App Store Optimization agency offering premium level ASO services.
              Picaso provides ASO solutions for some of the world's leading apps, utilizing our technologies and a wide array of services.
              Founded by both mobile and desktop organic search experts, Picaso has developed a dashboard and methods to enhance app visibility
              and conversions, resulting in exponential increases in organic downloads for our industry leading clients.
            </p>
            <PopupButton id="bMJOK1hd" style={{ backgroundColor: 'transparent', borderWidth: 0 }}>
              <Button text="Free consultation" icon={<FaChevronCircleRight />} />
            </PopupButton>
          </div>
          <div className="image">
            <img id="imageAbout" src={about} alt="about" className="half-width" />
          </div>
        </div>
      </div>
    </Section>
  );
}
const Section = styled.section`
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .title-container {
      text-align: center;
    }
    .image{
      align-self:center;
    }
    #imageAbout{
      padding-left:30px;
    }
  }
`;
