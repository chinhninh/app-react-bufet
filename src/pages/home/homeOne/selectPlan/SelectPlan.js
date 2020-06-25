import React, { Component } from 'react';
import './SelectPlan.css';
import sectionIcon from '../../../../images/section-icon.png';
import ScrollableAnchor from 'react-scrollable-anchor';

class SelectPlan extends Component {
    render() {
        return (
            <ScrollableAnchor id={'slectPlan'}>
            <div className="select-plan">
                <div className="container">
                    <div className="title-select-plan">
                        <h1>Select Your Plan</h1>
                        <img src={sectionIcon} />
                        <p>
                            Lorem ipsum madolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor coli incididunt ut labore Lorem ipsum madolor sit
                            amet, consectetur adipisicing incididunt.
                    </p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-12 content-plan">
                            <div className="in-content-plan">
                                <h2>Basic</h2>
                                <div className="body-content-plan">
                                    100 MB Disk Space<br />
                                    2 Subdomains<br />
                                    5 Email Accounts<br />
                                    Webmail Support
                            </div>
                                <div className="price">
                                    <strong><i>$</i>25 </strong>
                                    <span>/Annualy</span>
                                </div>
                                <div className="btn-purchas">
                                    <a href="#">PURCHASE</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12 content-plan">
                            <div className="in-content-plan">
                                <h2>Standard</h2>
                                <div className="body-content-plan">
                                    100 MB Disk Space<br />
                                    2 Subdomains<br />
                                    5 Email Accounts<br />
                                    Webmail Support
                            </div>
                                <div className="price">
                                <strong><i>$</i>25 </strong>
                                    <span>/Annualy</span>
                                </div>
                                <div className="btn-purchas">
                                    <a href="#">PURCHASE</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12 content-plan">
                            <div className="in-content-plan">
                                <h2>Premium</h2>
                                <div className="body-content-plan">
                                    100 MB Disk Space<br />
                                    2 Subdomains<br />
                                    5 Email Accounts<br />
                                    Webmail Support
                            </div>
                                <div className="price">
                                <strong><i>$</i>25 </strong>
                                    <span>/Annualy</span>
                                </div>
                                <div className="btn-purchas">
                                    <a href="#">PURCHASE</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </ScrollableAnchor>
        );
    }
}

export default SelectPlan;