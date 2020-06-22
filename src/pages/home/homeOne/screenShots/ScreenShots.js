import React, { Component } from 'react';
import './ScreenShots.css';
import sectionIcon from '../../../../images/section-icon.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import screenShot1 from '../../../../images/screenshort-1.jpg';
import screenShot2 from '../../../../images/screenshort-2.jpg';
import screenShot3 from '../../../../images/screenshort-3.jpg';
import screenShot4 from '../../../../images/screenshort-4.jpg';

class ScreenShots extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [
                {
                  breakpoint: 569,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                  }
                },
                {
                  breakpoint: 414,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        };

        return (
            <div className="screen-shots">
                <div className="container">
                    <div className="title-screenShot">
                        <h1>App Screenshots</h1>
                        <img src={sectionIcon} />
                        <p>
                            Lorem ipsum madolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor coli incididunt ut labore Lorem ipsum madolor sit
                            amet, consectetur adipisicing incididunt.
                    </p>
                    </div>

                    {/* slider */}
                    <div className="slider-screen-shot">
                        <Slider {...settings}>
                            <div className="img-screen-shot">
                                <img src={screenShot1} />
                            </div>
                            <div className="img-screen-shot">
                                <img src={screenShot2} />
                            </div>
                            <div className="img-screen-shot">
                                <img src={screenShot3} />
                            </div>
                            <div className="img-screen-shot">
                                <img src={screenShot4} />
                            </div>
                            <div className="img-screen-shot">
                                <img src={screenShot2} />
                            </div>
                            <div className="img-screen-shot">
                                <img src={screenShot1} />
                            </div>
                            <div className="img-screen-shot">
                                <img src={screenShot4} />
                            </div>
                            <div className="img-screen-shot">
                                <img src={screenShot3} />
                            </div>
                            <div className="img-screen-shot">
                                <img src={screenShot2} />
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }
}

export default ScreenShots;