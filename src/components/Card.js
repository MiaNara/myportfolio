import React from 'react'
import { Animated } from "react-animated-css";
import { Grid, Container } from '@mui/material';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import Direction from './Direction'

export default function Card() {
    return (
        <Container m={12}>
            <Grid container className="main">
                <Grid className="part1">
                        <Animated animationIn="wobble" animationOut="shake" animationInDuration={900} animationOutDuration={1000} isVisible={true} animateOnMount>
                            <div className="intro">
                                <span >
                                    <span >Hi, I am Trang!</span>
                                    <br />
                                    I'm currently a third year student at FPT University in Vietnam.
                                    <br />
                                    I purpose to be a front end developer in the future
                                    <br />
                                    so I am on my way.
                                    <br />
                                    Let's visit some of what I have learned!
                                </span>
                            </div>
                            <Direction/>
                        </Animated>
                   
                </Grid>
                <Grid className="part2">
                    <Animated animationIn="zoomIn" animationOut="zoomOutDown" animationInDuration={1500} animationOutDuration={1000} isVisible={true}>
                        <img className="avatar" src="mypic.jpg" alt=""></img>
                    </Animated>
                </Grid>
                {/* <div className="card">
            <div className="left ">
                
            </div> */}
                {/* s */}
                {/* <div className="right ">
                <div className=" four_part ">
                    <Animated animationIn="slideInRight" animationOut="zoomOutDown" animationInDuration={1500} animationOutDuration={1000} isVisible={true}>
                        <a href="#"><h4>My skill</h4></a>
                    </Animated>
                </div>
                <div className=" four_part ">
                    <Animated animationIn="slideInRight" animationOut="zoomOutDown" animationInDuration={1500} animationOutDuration={1000} isVisible={true}>
                        <a href="#"><h4>Certificate</h4></a>
                    </Animated>
                </div>
            </div> */}
                {/* </div> */}
            </Grid>
        </Container>

    )
}
