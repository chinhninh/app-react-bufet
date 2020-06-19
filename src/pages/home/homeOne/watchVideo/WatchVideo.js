import React, { Component } from 'react';
import './WatchVideo.css';
import { FaPlay } from 'react-icons/fa';

class WatchVideo extends Component {
    render() {
        return (
            <div className="watch-video">
                <div className="container">
                    <div className="row">
                        <div className='col-12'>
                            <div className="icon-play">
                                <a href="#"><FaPlay /></a>
                            </div>
                        </div>
                        <div className='col-12'>
                            <p>Watch Video</p>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default WatchVideo;