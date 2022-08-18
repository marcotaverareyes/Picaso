import React from "react";
import styled from "styled-components";
import service1 from "../../assets/service1.png";
import service2 from "../../assets/service2.png";
import service3 from "../../assets/service3.png";

export default function Services() {
  const servicesData = [
    {
      image: service1,
      title: "ASO Intelligence",
      descrption:
        "Get your app store search keyword research, metadata optimization, localization, and UX screenshot insights.",
    },
    {
      image: service2,
      title: "App Intelligence",
      descrption:
        "Get data to compare your app or game's performance across countries or benchmark your market share against competitors.",
    },
    {
      image: service3,
      title: "Market Intelligence",
      descrption:
        "Identify new growth opportunities: Get all the data you need to acquire new customers or enter new markets.",
    },
  ];
  return (
    <Section className="flex column j-center a-center gap" id='Services'>
      <div className="title-container flex column gap-1">
        <div className="title text-center ">
          <h2>Start growing your app with us</h2>
        </div>
        <div className="subtitle text-center subdue">
          <h3>
            Increase your app's organic installs with a data-driven App Store Optimization strategies
          </h3>
        </div>
      </div>
      <div className="services flex j-center a-center gap">
        {servicesData.map(({ image, title, descrption }) => {
          return (
            <div className="service text-center flex column gap-1" key={title}>
              <div id="serviceImage" className="image">
                <img src={image} alt="servive" />
              </div>
              <h3 className="title">{title}</h3>
              <p className="description subdue">{descrption}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
const Section = styled.section`
  .services {
    padding: 0 5rem;
    gap: 10rem;
    .service {
      .title {
        font-size: 1.5rem;
      }
      .description {
        font-size: 1rem;
        line-height: 1.2rem;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .services {
      padding: 2rem 0rem;
      gap: 3rem;
      justify-items:center;
    }
    #serviceImage{
      margin: auto
    }
  }
`;
