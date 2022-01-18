import React from 'react';
import './intro.css';

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is </h2> 
                    <h1 className ="i-name">Adrián Rodríguez</h1>   
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">IT Analyst</div>
                            <div className="i-title-item">UI/UX Designer</div>
                            <div className="i-title-item">Python Developer</div>
                            <div className="i-title-item">Android</div>
              
                        </div>                        
                    </div>
                    <div className="i-desc">
                        
                    </div>
                </div>
            </div>
            <div className="i-right">right</div>
        </div>
    )
}

export default Intro
