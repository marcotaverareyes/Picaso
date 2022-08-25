import React from "react";
import styled from "styled-components";
import price1 from "../../assets/price1.png";
import price2 from "../../assets/price2.png";
import price3 from "../../assets/price3.png";
import price4 from "../../assets/price4.png";
import bitcoin from "../../assets/bitcoin.png";
import ethereum from "../../assets/ethereum.png";
import ggcoin from "../../assets/ggcoin.png";
import p1 from "../../assets/P1.png"
import p2 from "../../assets/P2.png"
import p3 from "../../assets/P3.png"
import p4 from "../../assets/P4.png"
import p5 from "../../assets/P5.png"
import p6 from "../../assets/P6.png"

export default function DailyPrices() {
  const data = [
    {
      name: "Bitcoin",
      image: bitcoin,
      short: "BTC",
      price: "$33,592.99",
      change: "+4.3%",
      marketCap: "$635.14B",
      chart: price1,
    },
    {
      name: "Ethereum",
      image: ethereum,
      short: "ETH",
      price: "$2,273.19",
      change: "+2.1%",
      marketCap: "$267.12B",
      chart: price2,
    },
    {
      name: "GGCoin",
      image: ggcoin,
      short: "GGC",
      price: "$349.47",
      change: "-7.9%",
      marketCap: "$57.16B",
      chart: price3,
    },
    {
      name: "Bitcoin",
      image: bitcoin,
      short: "BTC",
      price: "$0.9434",
      change: "0.0%",
      marketCap: "$27.12B",
      chart: price4,
    },
  ];
  const getPriceChangeClassName = (change) => {
    const changeNum = change[0];
    if (changeNum === "+") return "green";
    else if (changeNum === "-") return "red";
    else return;
  };
  return (
    <Section className="flex gap-2 column" style={{overflow:'hidden'}}>
      <div style={{flex:1,backgroundColor:'transparent',justifySelf:'center',alignSelf:'center',marginTop:30}}>
          <h1 style={{fontSize:18,fontFamily:'GroteskBlack',color:'#828590'}}>WHO WE WORK WITH</h1> 
      </div>
      <div className="services flex j-center a-center gap" style={{flex:1,backgroundColor:'transparent',justifySelf:'center',alignSelf:'center',marginBottom:40,marginTop:10}}>
        <div style={{flex:1,backgroundColor:'transparent',justifySelf:'center',alignSelf:'center'}} >
            <img src={p1} style={{width:530/2.5,height:86/2.5,marginBottom:6}} />
        </div>
        <div style={{flex:1,backgroundColor:'transparent',justifySelf:'center',alignSelf:'center'}}>
            <img src={p2} style={{width:530/2.5,height:86/2.5,marginBottom:6}} />
        </div>
        <div style={{flex:1,backgroundColor:'transparent',justifySelf:'center',alignSelf:'center'}}>
            <img src={p3} style={{width:530/2.5,height:86/2.5,marginBottom:6}} />
        </div>
        <div style={{flex:1,backgroundColor:'transparent',justifySelf:'center',alignSelf:'center'}}>
            <img src={p4} style={{width:530/2.5,height:86/2.5,marginBottom:6}} />
        </div>
        <div style={{flex:1,backgroundColor:'transparent',justifySelf:'center',alignSelf:'center'}}>
            <img src={p5} style={{width:530/2.5,height:86/2.5,marginBottom:6}} />
        </div>
      </div>

    </Section>
  );
}

const Section = styled.section`
  
  background-color: #ffffff10;
  border-radius: 1rem;
  .header {
    border-bottom: 1px solid #ffffff42;
    padding-bottom: 1rem;
    padding: 2rem;
    span {
    }
  }
  .header,
  .data > .row {
    display: grid;
    grid-template-columns: 0.5fr 2fr 1fr 1fr 1fr 0.5fr;
  }

  .data {
    padding: 0 2rem 2rem 2rem;
    .row {
      .name {
        display: flex;
      }
    }
  }

  span {
    display: block;
  }
  .green {
    color: var(--green);
  }

  .red {
    color: var(--red);
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    max-width: 90vw;
    overflow-y: auto;
    border-radius: 1rem;
    ::-webkit-scrollbar {
      height: 1px;
    }
    .container {
      width: 780px;
      .header {
      }
      .name {
        flex-direction: row;
      }
    }
  }
`;
