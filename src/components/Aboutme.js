import React from 'react'

import styled, { keyframes } from "styled-components";
import { Container } from '@mui/material';
// import ParticleComponent from '../subComponents/ParticleComponent';
// import BigTitle from '../subComponents/BigTitlte'
import astronaut from "../images/spaceman.png";
import Direction from './Direction'
import { Animated } from "react-animated-css";
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`;
const Spaceman = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  animation: ${float} 4s ease infinite;
  img {
    width: 100%;
    height: auto;
  }
`;

export default function Aboutme() {

  return (
    <Container>

      <div className="box">
        <Direction />

        <Spaceman>
          <img src={astronaut} alt="spaceman" />
        </Spaceman>
        <Animated animationIn="pulse" animationOut="shake" animationInDuration={2000} animationOutDuration={1000} isVisible={true} animateOnMount>

          <div className="my_information">
            <div>
              <p> Name_____Thu Trang Le π§ </p>
              <p> Hometown__Phu Yen, Viet Nam π</p>
              <p> Age______20 years old β</p>
              <p> Major_____Software Engineering π©π»βπ» </p>
              <p> School_____FPT University π«  </p>
              <p> Email_____lthutrang17@gmail.com π§ </p>
              <p> Hobbies___ </p><p>πΈ Photography π΄ Sleep π³Nature
                ποΈBeach π Pizza  π΅ Cup of Tea </p>
            </div>

            <div className="my_tech">
              <p>My skills___</p>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain-wordmark.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain-wordmark.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />
            </div>
          </div>
        </Animated>

        {/* <BigTitle text="ABOUT" top="10%" left="5%" /> */}
      </div>
    </Container>
  )
}
