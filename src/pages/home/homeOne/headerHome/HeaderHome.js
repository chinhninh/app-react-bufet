import React, { Component } from 'react';
import './HeaderHome.css';
import mobile from '../../../../images/screen-1.png';
import QueueAnim from 'rc-queue-anim';
import ReactWOW from 'react-wow';

class HeaderHome extends Component {
    render() {
        return (
            <div className="header-home">
                <div className="container">
                    <ReactWOW delay='1s' animation='fadeInUp'>
                        <h1 className="title-header-home">
                            Best Mobile App <br />Landing Page for you !
                    </h1>
                    </ReactWOW>
                    <ReactWOW delay='0.5s' animation='fadeInLeft'>
                        <p>
                            Best Mobile App Landing Page for you !
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor anagi icdunt ut labore et dolore magna aliqua.
                    </p>
                    </ReactWOW>
                    <div className="btn-download">
                        <a href="#">
                            DOWNLOAD
                    </a>
                    </div>
                    {/* image mobile */}
                    <ReactWOW delay='0.5s' animation='fadeInRight'>
                        <div className="img-header-home">
                            <img src={mobile} />
                        </div>
                    </ReactWOW>
                </div>
            </div>
        );
    }
}

export default HeaderHome;