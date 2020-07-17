import React, { Component } from 'react';
import './AppMobile.css';
import { Media } from 'react-bootstrap';
import { FaApple } from 'react-icons/fa';
import { FaAndroid } from 'react-icons/fa';
import QueueAnim from 'rc-queue-anim';
import ReactWOW from 'react-wow';


class AppMobile extends Component {
    render() {
        return (
            <div className="style-app-mobile">
                <div className="app-mobile">
                    <p>
                        Bufet is Awesome ! <br />It’s <strong>Free</strong> to Download for Everyone
                </p>
                </div>
                <div className="btn-app-mobile row">
                    <div className="col-md-6 col-12">
                    <ReactWOW delay='0.5s' animation='fadeInLeft'>
                        <div className="btn-android btn-left">
                            <a href="#">
                                <span className="icon-android"><FaAndroid /></span>
                                <p>
                                    <span>available on</span><br />
                                    <strong>Google Store</strong>
                                </p>
                            </a>
                        </div>
                        </ReactWOW>
                    </div>
                    <div className="col-md-6 col-12">
                    <ReactWOW delay='0.5s' animation='fadeInRight'>
                        <div className="btn-android btn-apple">
                            <a href="#">
                                <span className="icon-android"><FaApple /></span>
                                <p>
                                    <span>available on</span><br />
                                    <strong>Apple Store</strong>
                                </p>
                            </a>
                        </div>
                        </ReactWOW>
                    </div>
                </div>
            </div>
        );
    }
}

export default AppMobile;