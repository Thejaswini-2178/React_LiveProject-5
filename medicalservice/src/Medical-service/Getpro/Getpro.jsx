import React, { Component } from 'react';
import getProData from './getProData.json'; 

class Getpro extends Component {
    render() {
        return (
            <ul className="pro-features">
                <a className="get-pro" href="#">Get Pro</a>
                <li className="big-title">{getProData.bigTitle}</li>
                <li className="title">{getProData.featuresTitle}</li>
                {getProData.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
                <div className="button">
                    {getProData.buttons.map((button, index) => (
                        <a 
                            key={index} 
                            href={button.url} 
                            target={button.target} 
                            className="btn"
                        >
                            {button.text}
                        </a>
                    ))}
                </div>
            </ul>
        );
    }
}

export default Getpro;
