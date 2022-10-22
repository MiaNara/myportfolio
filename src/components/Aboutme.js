import React from 'react'

import styled, { keyframes } from "styled-components";
import { Container } from '@mui/material';
// import ParticleComponent from '../subComponents/ParticleComponent';
// import BigTitle from '../subComponents/BigTitlte'
import astronaut from "../images/spaceman.png";
import Direction from './Direction'

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
    
      <div className="my_information">
        <div>
      
        <p> Name_____Thu Trang Le 👧 </p> 
        <p> Hometown__Phu Yen, Viet Nam 🌎</p>
        <p> Age______20 years old ♉</p>
        <p> Major_____Software Engineering 👩🏻‍💻 </p> 
        <p> School_____FPT University 🏫  </p>
        <p> Email_____lthutrang17@gmail.com 📧 </p>
        <p> Hobbies___ </p><p>📸 Photography 😴 Sleep 🌳Nature 
         🏖️Beach 🍕 Pizza  🍵 Cup of Tea </p>
        
        </div>
       
       
      <div  className="my_tech">

      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />  
      <img   src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
      <img   src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
      <img   src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" />
       <img   src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain-wordmark.svg" />  
       <img   src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg" />
       <img   src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain-wordmark.svg" />
       <img   src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" />
       <img   src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
       <img   src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />

          
      </div>
        
          
        
          
      
      </div>
    
      {/* <BigTitle text="ABOUT" top="10%" left="5%" /> */}
    </div>
    </Container>
  )
}
