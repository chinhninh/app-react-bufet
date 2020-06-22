import React, { Component } from 'react';
import './Testimonials.css';
import sectionIcon from '../../../../images/section-icon.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Media} from 'react-bootstrap';
import testimonialIcon1 from '../../../../images/testimonial-icon-1.png';
import testimonialIcon2 from '../../../../images/testimonial-icon-2.png';
import {FaStar} from 'react-icons/fa';

class Testimonials extends Component {
    render() {
        var settings = {
            // dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 569,
                    settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
            ]
        };

        return (
            <div className="testimonials">
                <div className="container">
                    <div className="title-testimonials">
                        <h1>Testimonials</h1>
                        <img src={sectionIcon} />
                        <p>
                            Lorem ipsum madolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor coli incididunt ut labore Lorem ipsum madolor sit
                            amet, consectetur adipisicing incididunt.
                    </p>
                    </div>

                    {/* slider testimonials */}
                    <div className="slider-testimonials">
                        <Slider {...settings}>
                            <div className="content-testimonials">
                                <div className="point-profile">
                                    99
                                </div>
                                <div className="info-profile">
                                    <Media>
                                        <img src={testimonialIcon1}/>
                                        <Media.Body>
                                        <h4>M S Newaz</h4>
                                            <span>
                                            UI Designer at Marveltheme
                                             </span>
                                        </Media.Body>
                                    </Media>
                                </div>
                                <div className="description-profile">
                                    <p>
                                    “Lorem ipsum dolor sit amet, sectetur adip mayal tempor eiusmod tempor 
                                    incubtconsectetur aliqua. Ultra enddim ad nim veniam, quis nostrud exercitation ullamco”
                                    </p>
                                    <span>
                                    <FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStar/>
                                    </span>
                                </div>
                            </div>
                            <div className="content-testimonials">
                                <div className="point-profile">
                                    99
                                </div>
                                <div className="info-profile">
                                    <Media>
                                        <img src={testimonialIcon2}/>
                                        <Media.Body>
                                        <h4>Anika Mollik</h4>
                                            <span>
                                            UI Designer at Marveltheme
                                             </span>
                                        </Media.Body>
                                    </Media>
                                </div>
                                <div className="description-profile">
                                    <p>
                                    “Lorem ipsum dolor sit amet, sectetur adip mayal tempor eiusmod tempor 
                                    incubtconsectetur aliqua. Ultra enddim ad nim veniam, quis nostrud exercitation ullamco”
                                    </p>
                                    <span>
                                    <FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStar/>
                                    </span>
                                </div>
                            </div>
                            <div className="content-testimonials">
                                <div className="point-profile">
                                    99
                                </div>
                                <div className="info-profile">
                                    <Media>
                                        <img src={testimonialIcon1}/>
                                        <Media.Body>
                                        <h4>M S Newaz</h4>
                                            <span>
                                            UI Designer at Marveltheme
                                             </span>
                                        </Media.Body>
                                    </Media>
                                </div>
                                <div className="description-profile">
                                    <p>
                                    “Lorem ipsum dolor sit amet, sectetur adip mayal tempor eiusmod tempor 
                                    incubtconsectetur aliqua. Ultra enddim ad nim veniam, quis nostrud exercitation ullamco”
                                    </p>
                                    <span>
                                    <FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStar/>
                                    </span>
                                </div>
                            </div>
                            <div className="content-testimonials">
                                <div className="point-profile">
                                    99
                                </div>
                                <div className="info-profile">
                                    <Media>
                                        <img src={testimonialIcon2}/>
                                        <Media.Body>
                                        <h4>Anika Mollik</h4>
                                            <span>
                                            UI Designer at Marveltheme
                                             </span>
                                        </Media.Body>
                                    </Media>
                                </div>
                                <div className="description-profile">
                                    <p>
                                    “Lorem ipsum dolor sit amet, sectetur adip mayal tempor eiusmod tempor 
                                    incubtconsectetur aliqua. Ultra enddim ad nim veniam, quis nostrud exercitation ullamco”
                                    </p>
                                    <span>
                                    <FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStar/>
                                    </span>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }
}

export default Testimonials;