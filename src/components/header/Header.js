import React, { Component } from 'react';
import './Header.css';
import HeaderPc from './HeaderPc';
import HeaderMobile from './HeaderMobile';

class Header extends Component {
    render() {
        
        return (
            <div>
                <HeaderPc/>
                <HeaderMobile/>
            </div>
        );
    }
}

export default Header;