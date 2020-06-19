import React, { Component } from 'react';
import './FactArea.css';
import {FaMouse} from 'react-icons/fa';
import {FaUser} from 'react-icons/fa';
import {FaStar} from 'react-icons/fa';
import {FaHeart} from 'react-icons/fa';

class FactArea extends Component {
    render() {
        return (
            <div className="fact-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-12 content-fact-area">
                            <h3>0+</h3>
                            <div><FaMouse/></div>
                            <p>App Download</p>
                        </div>
                        <div className="col-md-3 col-12 content-fact-area">
                        <h3>0+</h3>
                            <div><FaUser/></div>
                            <p>Happy Clients</p>
                        </div>
                        <div className="col-md-3 col-12 content-fact-area">
                        <h3>0+</h3>
                            <div><FaStar/></div>
                            <p>Active Accounts</p>
                        </div>
                        <div className="col-md-3 col-12 content-fact-area">
                        <h3>0+</h3>
                            <div><FaHeart/></div>
                            <p>Positive Rating</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FactArea;