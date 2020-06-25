import React, { Component } from 'react';
import './AdvanceFeatures.css';
import { FaTrophy } from 'react-icons/fa';
import { FaEye } from 'react-icons/fa';
import { FaVectorSquare } from 'react-icons/fa';
import { FaMagnet } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa';
import { Media } from 'react-bootstrap';
import ScrollableAnchor from 'react-scrollable-anchor';

class AdvanceFeatures extends Component {
    render() {
        return (
            <ScrollableAnchor id={'features'}>
            <div className="advance-features">
                <div className="container">
                    <div className="row">
                        {/* content left */}
                        <div className="col-md-3 col-12 left-advance">
                            <div>
                                <strong>
                                    <FaTrophy />
                                </strong>
                                <h5>High Resolution</h5>
                                <p>eiusmod temporara incididunta Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div>
                                <strong>
                                    <FaEye />
                                </strong>
                                <h5>High Resolution</h5>
                                <p>eiusmod temporara incididunta Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        {/* content center */}
                        <div className="col-md-3 col-12 left-advance right-advance">
                            <div>
                                <strong>
                                    <FaVectorSquare />
                                </strong>
                                <h5>High Resolution</h5>
                                <p>eiusmod temporara incididunta Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div>
                                <strong>
                                    <FaMagnet />
                                </strong>
                                <h5>High Resolution</h5>
                                <p>eiusmod temporara incididunta Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        {/* content right */}
                        <div className="col-md-6 col-12 right-advance">
                            <h1>Advance Features <br />That Give You Real Feel</h1>
                            <p className="content-right-advance">
                                Mistaken idea of denouncing pleasure and praising pain was born
                                and I will give you a complete account of the system, and expound. mistaken you a complete account.
                        </p>
                            <div className="check-bufet">
                                <Media>
                                    <h6>
                                        <FaCheck />
                                    </h6>
                                    <Media.Body>
                                        <p>
                                            Mistaken idea of denouncing pleasure and praising pain.
                                </p>
                                    </Media.Body>
                                </Media>
                                <Media>
                                    <h6>
                                        <FaCheck />
                                    </h6>
                                    <Media.Body>
                                        <p>
                                            Mistaken idea of denouncing pleasure and praising pain.
                                </p>
                                    </Media.Body>
                                </Media>
                                <Media>
                                    <h6>
                                        <FaCheck />
                                    </h6>
                                    <Media.Body>
                                        <p>
                                            Mistaken idea of denouncing pleasure and praising pain.
                                </p>
                                    </Media.Body>
                                </Media>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </ScrollableAnchor>
        );
    }
}
import './AdvanceFeatures.css';

export default AdvanceFeatures;