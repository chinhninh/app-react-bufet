import React, { Component } from 'react';
import './WhyBufet.css';
import mobile2 from '../../../../images/mobile-2.png';
import { FaCheck } from 'react-icons/fa';
import { Media } from 'react-bootstrap';

class WhyBufet extends Component {
    render() {
        return (
            <div className="why-bufet">
                <div className="row">
                    {/* image mobile 2 */}
                    <div className="col-lg-6 col-12 img-mobile2">
                        <img src={mobile2} />
                    </div>
                    {/* content why bufet */}
                    <div className="col-lg-6 col-12">
                        <div className="title-bufet">
                            <h1>Why Bufet?</h1>
                            <p>
                                Mistaken idea of denouncing pleasure and praising
                                was born and I will give you a complete account of the system, and expound.
                                mistaken you a complete account.
                        </p>
                            <p>
                                Mistaken idea of denouncing pleasure and praising was born and I will give you a complete account of the system.
                        </p>
                        </div>
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
                                        Mistaken idea of denouncing pleasure and praising pain idea of idea of denouncing pleasure and praising
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
                        {/* button read more */}
                        <button className="btn btn-read">READ MORE</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default WhyBufet;