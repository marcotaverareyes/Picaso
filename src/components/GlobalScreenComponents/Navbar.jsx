import React, { useState,useEffect } from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import Button from "../Button";
import logo from '../../assets/logo.png'
import * as Scroll from 'react-scroll';
import {Link} from 'react-scroll'
import { useNavigate,useLocation} from "react-router-dom";
import { PopupButton } from '@typeform/embed-react'

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const links = ["Home","Services", "Use cases", "See pricing", "About us"];
  const [isNavOpen, setIsNavOpen] = useState(false);
  const html = document.querySelector("html");
  html.addEventListener("click", (e) => setIsNavOpen(false));
  console.log(location.pathname)
  
  const [locationNow, setLocationNow] = useState(location.pathname);

  useEffect(() => {
    setLocationNow(location.pathname)
    console.log('------>'+locationNow)
    
  },[location.pathname]);
  
  const handleClick=()=> {
    if(location.pathname !== '/'){
      navigate('/');
      setLocationNow('/')
      setTimeout(() => {
        document.getElementById("LOL").click()
      }, 2000);
      
    }
  }
  
  const handleClick2=()=> {
    if(location.pathname !== '/'){
      navigate('/');
      setLocationNow('/')
      setTimeout(() => {
        document.getElementById("LOL2").click()
      }, 2000);
      
    }
  }
  
  return (
    <Nav state={isNavOpen ? 1 : 0} className="flex j-between a-center">
      <button style={{backgroundColor:'transparent',borderWidth:0}}><div className="brand"><img src={logo} style={{width:831/6,height:399/6,marginBottom:'10%'}} onClick={handleClick}/></div></button>
      {/* <div className="brand" >
          <img src={logo} style={{width:831/6,height:399/6,marginBottom:'10%'}} />
      </div> */}
      <div className="toggle">
        {isNavOpen ? (
          <MdClose style={{height:38,width:38}} onClick={() => setIsNavOpen(false)} />
        ) : (
          <GiHamburgerMenu
            style={{height:30,width:30}}
            onClick={(e) => {
              e.stopPropagation();
              setIsNavOpen(true);
            }}
          />
        )}
      </div>
      <div className={`links ${isNavOpen ? "show" : ""}`}>
        <ul className="flex gap-2">
        
          {links.map((link) => {
            if(link==='Use cases'){
              return ( 
                <li key={link}>
                  {/* color:locationNow==='/cases'?'blue':'blue' */}
                  <a to={"/cases"} style={{fontSize:20,fontFamily:'GroteskBlack',paddingRight:15,opacity:locationNow==='/cases'?1:.7}}href={"/cases"}>{link}</a>
                </li>
              )
            }
            if(link==='See pricing'){
              return ( 
                <li key={link}>
                  <a to={"/pricing"} style={{fontSize:20,fontFamily:'GroteskBlack',paddingRight:15,opacity:locationNow==='/pricing'?1:.7}}href={"/pricing"} >{link}</a>
                </li>
              )
            }
            if(link==='Home'){
              return ( 
                <li key={link}>
                  <a to={"/"} style={{fontSize:20,fontFamily:'GroteskBlack',paddingRight:15,opacity:locationNow==='/'?1:.7}}href={"/"} >{link}</a>
                </li>
              )
            }
            if(link==='About us'){
              return ( 
                <li key={link}>
                  <Link id='LOL' to={link} spy={true} smooth={true} offset={-30} duration={500} style={{fontSize:20,fontFamily:'GroteskBlack',paddingRight:15}}href={link} onClick={handleClick}>{link}</Link>
                </li>
              )
            }
            if(link==='Services'){
              return ( 
                <li key={link}>
                  <Link id='LOL2' to={link} spy={true} smooth={true} offset={-30} duration={500} style={{fontSize:20,fontFamily:'GroteskBlack',paddingRight:15}}href={link} onClick={handleClick2}>{link}</Link>
                </li>
              )
            }

            return (
              <li key={link}>
                <Link to={link} spy={true} smooth={true} offset={-30} duration={500} style={{fontSize:20,fontFamily:'GroteskBlack',paddingRight:15}}href={link} onClick={handleClick}>{link}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="auth flex gap-1">
      <PopupButton id="bMJOK1hd" style={{ backgroundColor:'transparent',borderWidth:0 }}>
        <Button text="Audit" subduedButton />
      </PopupButton>
       <PopupButton id="bMJOK1hd" style={{ backgroundColor:'transparent',borderWidth:0 }}>
        <Button text="Grow your app" />
      </PopupButton>
      </div>
    </Nav>
  );
}

const Nav = styled.nav`
  margin: 3rem 5rem;
  .brand {
    h2 {
      font-size: 2.5rem;
    }
  }
  .toggle {
    display: none;
  }
  .links {
    ul {
      // font-weight: bolder;
      li {
        cursor: pointer;
        &:first-of-type {
          a {
            opacity: 1;
          }
        }
        a {
          opacity: 0.7;
          transition: 0.5s ease-in-out;
          &:hover {
            opacity: initial;
          }
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    padding: 3rem 1rem;
    margin: 0;
    position: relative;
    z-index: 5;
    flex-direction: row;
    .brand {
      h2 {
        font-size: 2rem;
      }
    }
    .toggle {
      padding-right: 1rem;
      display: block;
      z-index: 51;
      svg {
        color: #2d69fd;
      }
    }
    .show {
      opacity: 1 !important;
      visibility: visible !important;
    }
    .links {
      z-index: 10;
      position: fixed;
      overflow-x: hidden;
      top: 0;
      right: 0;
      width: ${({ state }) => (state ? "60%" : "0%")};
      height: 100vh;
      background-color: white;
      opacity: 0;
      visibility: hidden;
      transition: 0.7s ease-in-out;
      ul {
        flex-direction: column;
        text-align: center;
        height: 100%;
        justify-content: center;
        li {
          a {
            color: #2d69fd;
          }
        }
      }
    }
    .auth {
      display: none;
    }
  }
`;
