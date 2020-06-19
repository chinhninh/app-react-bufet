import React, { Component } from 'react';
import HeaderContact from './HeaderContact';
import BodyContact from './BodyContact';
import FooterContact from './FooterContact';

class Contact extends Component {
    render() {
        return (
            <div>
                <HeaderContact/>
                <BodyContact/>
                <FooterContact/>
            </div>
        );
    }
}

export default Contact;