import React, { Component } from 'react';
import './Questions.css';
import sectionIcon from '../../../../images/section-icon.png';
import mobile1 from '../../../../images/screen-1.png';
import { FaAngleDown } from 'react-icons/fa';

class Questions extends Component {
    render() {
        return (
            <div className="questions">
                <div className="container">
                    <div className="title-questions">
                        <h1>Frequently asked questions</h1>
                        <img src={sectionIcon} />
                        <p>
                            Lorem ipsum madolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor coli incididunt ut labore Lorem ipsum madolor sit
                            amet, consectetur adipisicing incididunt.
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-12 img-mobile2">
                            <img src={mobile1} />
                        </div>
                        <div className="col-lg-6 col-12 right-question">
                            <div className="ask-question">
                                <h4>
                                    1. Sedeiusmod tempor inccsetetur aliquatraiy?
                                    <span><FaAngleDown /></span>
                                </h4>
                            </div>
                            <div className="ask-question">
                                <h4>
                                2. Lorem ipsum dolor amet, consect adipisicing elit?
                                    <span><FaAngleDown /></span>
                                </h4>
                            </div>
                            <div className="ask-question">
                                <h4>
                                3. Tempor inccsetetur aliquatraiy?
                                    <span><FaAngleDown /></span>
                                </h4>
                            </div>
                            <div className="ask-question">
                                <h4>
                                4. Consectetur adipisicing elit, sed do eiusmod tempor?
                                    <span><FaAngleDown /></span>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Questions;