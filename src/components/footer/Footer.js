import React, { Component } from 'react';
import Contact from './contact/Contact';
import Social from './Social';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <Contact/>
                <Social/>
            </div>
        );
    }
}

export default Footer;