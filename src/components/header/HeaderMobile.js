import React, { Component } from 'react';
import './HeaderMobile.css';
import { slide as Menu } from 'react-burger-menu';
import MetisMenu from 'react-metismenu';
import logo from '../../images/logo.png';
import Headroom from 'react-headroom';

class Header extends Component {
    showSettings(event) {
        event.preventDefault();
    }
    render() {
        const content = [
            {
                label: 'Home',
                content: [
                    {
                        label: 'Home One',
                        to: '#another-link',
                    },
                    {
                        label: 'Home Two',
                        to: '#another-link',
                    },
                    {
                        label: 'Home Three',
                        to: '#another-link',
                    },
                    {
                        label: 'Home Four',
                        to: '#another-link',
                    },
                    {
                        label: 'Home Five',
                        to: '#another-link',
                    },
                ],
            },
            {
                label: 'About',
                to: '#whyBufet',
            },
            {
                label: 'Features',
                to: '#features',
            },
            {
                label: 'ScreenShots',
                to: '#screenShots',
            },
            {
                label: 'Pricing',
                to: '#slectPlan',
            },
            {
                label: 'Blog',
                content: [
                    {
                        label: 'Home One',
                        to: '#another-link',
                    },
                    {
                        label: 'Home Two',
                        to: '#another-link',
                    },
                    {
                        label: 'Home Three',
                        to: '#another-link',
                    },
                    {
                        label: 'Home Four',
                        to: '#another-link',
                    },
                    {
                        label: 'Home Five',
                        to: '#another-link',
                    },
                ],
            },
            {
                label: 'Pages',
                content: [
                    {
                        label: 'Home One',
                        to: '#another-link',
                    },
                    {
                        label: 'Home Two',
                        to: '#another-link',
                    },
                    {
                        label: 'Home Three',
                        to: '#another-link',
                    },
                    {
                        label: 'Home Four',
                        to: '#another-link',
                    },
                    {
                        label: 'Home Five',
                        to: '#another-link',
                    },
                ],
            },
            {
                label: 'Contact',
                to: '#another-link',
            },
        ];
        return (
            <div className="style-menu-mobile">
            <div className="container">
                <div className="style-logo">
                    <img src={logo} />
                </div>
                </div>
                <div id="outer-container">
                    <Menu>
                        <MetisMenu
                            content={content} activeLinkFromLocation
                            className="my-menu"
                            clasNameLink="my-menu-link"
                            iconNameStateVisible="minus"
                            iconNameStateHidden="plus"
                        />
                    </Menu>
                </div>
            </div>
        );
    }
}

export default Header;