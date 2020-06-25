import React, { Component } from 'react';
import './AppMobile.css';
import { Media } from 'react-bootstrap';
import { FaApple } from 'react-icons/fa';
import { FaAndroid } from 'react-icons/fa';
import QueueAnim from 'rc-queue-anim';


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
                    <QueueAnim animConfig={{ translateX: [100, 0] }} className="animation-btn-left" interval={100} duration={1000}>
                        <div key="1" className="btn-android btn-left">
                            <a href="#">
                                <span className="icon-android"><FaAndroid /></span>
                                <p>
                                    <span>available on</span><br />
                                    <strong>Google Store</strong>
                                </p>
                            </a>
                        </div>
                        </QueueAnim>
                    </div>
                    <div className="col-md-6 col-12">
                    <QueueAnim animConfig={{ translateX: [-50, 0] }} className="animation-btn-right" interval={100} duration={1000}>
                        <div key="2" className="btn-android btn-apple">
                            <a href="#">
                                <span className="icon-android"><FaApple /></span>
                                <p>
                                    <span>available on</span><br />
                                    <strong>Apple Store</strong>
                                </p>
                            </a>
                        </div>
                        </QueueAnim>
                    </div>
                </div>
            </div>
        );
    }
}

export default AppMobile;