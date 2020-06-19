import React, { Component } from 'react';
import './Social.css';
import { FaTwitter } from 'react-icons/fa';
import { FaPinterestP } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaTumblr} from 'react-icons/fa';

class Social extends Component {
    render() {
        return (
            <div>
                <ul className="list-group list-group-horizontal icon-social">
                    <li>
                        <a href="#"><FaTwitter/></a>
                    </li>
                    <li>
                        <a href="#"><FaPinterestP/></a>
                    </li>
                    <li>
                        <a href="#"><FaFacebookF/></a>
                    </li>
                    <li>
                        <a href="#"><FaTumblr/></a>
                    </li>
                </ul>
                <div className="copyright">
                Copyright @ 2019 <a href="#">marveltheme</a> all right resurved.
                </div>
            </div>
        );
    }
}

export default Social;