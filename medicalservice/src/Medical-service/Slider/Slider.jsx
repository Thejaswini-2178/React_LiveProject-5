import React, { Component } from 'react';
import sliderData from './sliderData.json'; 

export class Slider extends Component {
    render() {
        return (
            <div>
                <section className="slider">
                    <div className="hero-slider">
                        {sliderData.map((slide, index) => (
                            <div 
                                className="single-slider" 
                                key={index} 
                                style={{ backgroundImage: `url(${slide.backgroundImage})` }}
                            >
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-7">
                                            <div className="text">
                                                <h1 dangerouslySetInnerHTML={{ __html: slide.heading }} />
                                                <p>{slide.description}</p>
                                                <div className="button">
                                                    {slide.buttons.map((button, btnIndex) => (
                                                        <a 
                                                            key={btnIndex} 
                                                            href={button.url} 
                                                            className={`btn ${button.class || ''}`}
                                                        >
                                                            {button.text}
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        );
    }
}

export default Slider;
