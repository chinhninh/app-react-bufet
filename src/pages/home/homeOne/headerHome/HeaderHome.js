import React, { Component } from 'react';
import './HeaderHome.css';
import mobile from '../../../../images/screen-1.png';
import ReactImageVideoLightbox from 'react-image-video-lightbox';

class HeaderHome extends Component {
    render() {
        return (
            <div className="header-home">
            {/* <ReactImageVideoLightbox
        data={[
            { url: 'https://placekitten.com/450/300', type: 'photo', altTag: 'some image' },
            { url: 'https://www.youtube.com/embed/ScMzIvxBSi4', type: 'video', altTag: 'some video' },
            { url: 'https://placekitten.com/550/500', type: 'photo', altTag: 'some other image' },
            { url: 'https://www.youtube.com/embed/ScMzIvxBSi4', type: 'video', altTag: 'some other video' }
        ]}
        startIndex={0}
        showResourceCount={true}
        onCloseCallback={this.callbackFunction} /> */}
                <div className="container">
                    <h1 className="title-header-home">
                        Best Mobile App <br />Landing Page for you !
                    </h1>
                    <p>
                        Best Mobile App Landing Page for you !
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor anagi icdunt ut labore et dolore magna aliqua.
                    </p>
                    <div className="btn-download">
                        <a href="#">
                            DOWNLOAD
                    </a>
                    </div>
                    {/* image mobile */}
                    <div className="img-header-home">
                        <img src={mobile}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderHome;