import React from "react";
import './about.css';
import abvideo from './../images/abvideo.mp4';
import explore from './../images/check.png';
const About = () =>{
    return(
        <>
            <div className="amain">
                <video src={abvideo} autoPlay loop muted speed/>
                <div className="card">
                    <div className="blog-post">
                        <div className="blog-img">
                            <img src={explore} alt=""/>
                        </div>
                        <div className="blog-info">
                            <h2 className="title">Sample Text</h2>
                            <p className="btext"> 
                            In this video tutorial you will learn how to build a beautiful responsive news blog post card 
                            using html and css. We will be using many properties including flexbox to achieve our layout. You will also learn how 
                            to use media queries to make the card adapt to any screen size.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;