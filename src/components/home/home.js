import './home.css'
import React from 'react';
import bgvideo from './../images/fog.mp4';

const Home=()=>{ 
    return(
        <>
         <div className='main'>
            <div className="overlay"></div>
            <video src={bgvideo} autoPlay loop muted speed/>
            <div className="content">
                <h2>Keep Exploring</h2> 
                <h3>"NOT ALL THOSE WHO WANDER ARE LOST"</h3>
            </div>
        </div>
            
        </>
    );
};

export default Home;