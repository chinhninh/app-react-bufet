import React, { Component } from 'react';
import './HeaderHome.css';
import mobile from '../../../../images/screen-1.png';

class HeaderHome extends Component {
    render() {
        return (
            <div className="header-home">
                <div className="container">
                    <h1>
                        Best Mobile App <br />Landing Page for you !
                    </h1>
                    <p>
                        Best Mobile App Landing Page for you !
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor anagi icdunt ut labore et dolore magna aliqua.
                    </p>
                    <div className="btn-download">
                        <a href="#">
                            DOWNLOAD
                    </a>
                    </div>
                    {/* image mobile */}
                    <div className="img-header-home">
                        <img src={mobile}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderHome;