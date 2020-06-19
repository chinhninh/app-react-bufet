import React, { Component } from 'react';
import {FaHeadphonesAlt} from 'react-icons/fa';
import {FaLocationArrow} from 'react-icons/fa';
import {FaEnvelope} from 'react-icons/fa';
import './FooterContact.css';

class FooterContact extends Component {
    render() {
        return (
            <div>
                <div className="container footer-contact">
                    <div className="row">
                        <div className="col-md-4 col-12 icon-contact">
                            <div>
                            <FaHeadphonesAlt/>
                            </div>
                            <p>
                            <a href="">+145987565</a>
                            </p>
                        </div>
                        <div className="col-md-4 col-12 icon-contact">
                        <div>
                            <FaLocationArrow/>
                            </div>
                            <p>
                            28 Green Tower, Street Name, New York City, USA
                            </p>
                        </div>
                        <div className="col-md-4 col-12 icon-contact">
                        <div>
                            <FaEnvelope/>
                            </div>
                            <p>
                            <a href="">www.marveltheme.com</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FooterContact;