import React, { Component } from 'react';
import './HeaderContact.css';

class HeaderContact extends Component {
    render() {
        return (
            <div className="background-header-contact">
                <div className="container header-contact">
                    <div className="row">
                        <div className="col-4 left-header-contact">
                            SubscribE Now
                        </div>
                        <div className="col-8 right-header-contact">
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control" type="search" placeholder="Enter Your Email Address" aria-label="Search" />
                                <button className="btn my-2 my-sm-0" type="submit">GO</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderContact;