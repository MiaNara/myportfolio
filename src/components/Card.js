import React from 'react'
import { Animated } from "react-animated-css";
export default function Card() {

    return (
        <div className="card">
            <div className="left ">

                <div className=" four_part ">
                    <Animated animationIn="slideInDown" animationOut="zoomOutDown" animationInDuration={1500} animationOutDuration={1000} isVisible={true}>
                        <a href="#"><h2>About me</h2></a>
                    </Animated>

                </div>
                <div className=" four_part ">
                    <Animated animationIn="slideInUp" animationOut="zoomOutDown" animationInDuration={1500} animationOutDuration={1000} isVisible={true}>
                        <a href="#"><h2>About me</h2></a>
                    </Animated>
                </div>
            </div>


            <div >
                <Animated animationIn="zoomIn" animationOut="zoomOutDown" animationInDuration={1500} animationOutDuration={1000} isVisible={true}>
                    <img src="mypic.jpg" alt=""></img>
                </Animated>
            </div>
            <div className="right ">
                <div className=" four_part ">
                    <Animated animationIn="slideInRight" animationOut="zoomOutDown" animationInDuration={1500} animationOutDuration={1000} isVisible={true}>
                        <a href="#"><h2>About me</h2></a>
                    </Animated>
                </div>
                <div className=" four_part ">
                    <Animated animationIn="slideInRight" animationOut="zoomOutDown" animationInDuration={1500} animationOutDuration={1000} isVisible={true}>
                        <a href="#"><h2>About me</h2></a>
                    </Animated>
                </div>
            </div>
        </div>
    )
}
