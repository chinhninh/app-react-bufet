import React, { Component } from 'react';
import './HeaderHome.css';
import mobile from '../../../../images/screen-1.png';
import QueueAnim from 'rc-queue-anim';

class HeaderHome extends Component {
    render() {
        return (
            <div className="header-home">
                <div className="container">
                    <QueueAnim animConfig={{ translateY: [-50, 0] }} className="animation-title" interval={100} duration={1000}>
                        <h1 key="2" className="title-header-home">
                            Best Mobile App <br />Landing Page for you !
                    </h1>
                    </QueueAnim>
                    <QueueAnim animConfig={{ translateX: [100, 0] }} className="animation-under-title" interval={100} duration={1000}>
                        <p key="1">
                            Best Mobile App Landing Page for you !
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor anagi icdunt ut labore et dolore magna aliqua.
                    </p>
                    </QueueAnim>
                    <div className="btn-download">
                        <a href="#">
                            DOWNLOAD
                    </a>
                    </div>
                    {/* image mobile */}
                    <QueueAnim animConfig={{ translateX: [-50, 0] }} className="animation-img" interval={100} duration={1000}>
                        <div key="3" className="img-header-home">
                            <img src={mobile} />
                        </div>
                    </QueueAnim>
                </div>
            </div>
        );
    }
}

export default HeaderHome;