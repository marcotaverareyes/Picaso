import React from "react";
import styled from "styled-components";
import { FaChevronCircleRight } from "react-icons/fa";
import home from "../../assets/home.png";
import badgePercent from "../../assets/badge-percent.png";
import Button from "../Button";
import { PopupButton } from '@typeform/embed-react'
import {Link} from 'react-scroll'

export default function Home() {
  return (
    <Section className="flex j-center a-center gap">
      <div className="content flex column gap-2">
        <div className="subtitle">
          <h3 className="flex a-center gap-1 blue">
            <span>
              <img src={badgePercent} style={{marginTop:3}}alt="badgepercent" />
            </span>{" "}
            App store optimization made easy
          </h3>

          {/* <PopupButton id="bMJOK1hd" style={{ fontSize: 20 }} className="my-button">click to open form in popup</PopupButton> */}
        </div>
        <div className="title">
          <h1 id="titleMain" style={{fontFamily: 'GroteskLight',fontWeight:1}}>Simplist way for your apps</h1>
          <h1 id="titleMain" style={{fontFamily: 'GroteskRegular',fontWeight:900}}>to increase in store visibility</h1>
          <h1 id="titleMain" style={{fontFamily: 'GroteskRegular',fontWeight:900}}>and improve conversion rates</h1>
        </div>
        <div className="description" style={{marginRight:'30%'}}>
          <p className="subdue">We equip product and marketing teams with the skills and knowledge they need to grow apps ~ or we simply picaso it for them.</p>
        </div>
        <div className="buttons flex gap-1">
          <PopupButton id="bMJOK1hd" style={{ backgroundColor:'transparent',borderWidth:0 }}>
            <Button text="Free consultation" icon={<FaChevronCircleRight />} />
          </PopupButton>
          <Link to={'road'} spy={true} smooth={true} offset={-30} duration={500} style={{fontSize:20,fontFamily:'GroteskBlack',paddingRight:15}}>
            <Button text="How it works?" subduedButton />
          </Link>
        </div>
      </div>
      <div className="image">
        <img src={home} alt="home" className="half-width" />
      </div>
    </Section>
  );
}

const Section = styled.section`
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .subtitle {
      h3 {
        flex-direction: row;
      }
    }
    .buttons {
      flex-direction: row;
      margin: 2rem 0;
      gap: 1rem;
    }
  }
`;
