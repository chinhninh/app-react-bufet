import React, { Component } from 'react';
import './BodyContact.css';
import { FaSeedling } from 'react-icons/fa';
import GoogleMapReact from 'google-map-react';
import ScrollableAnchor from 'react-scrollable-anchor';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class BodyContact extends Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 1
    };

    render() {
        return (
            <ScrollableAnchor id={'contact'}>
            <div>
                <div className="container">
                    <div className=" row">
                        <div className="col-md-5 col-12 left-body-contact">
                            <h1>Contact Us</h1>
                            <form>
                                <input type="text" placeholder="Your Name*" />
                                <input type="text" placeholder="Email Address**" />
                                <input type="text" placeholder="Your Website*" />
                                <div style={{position: "relative"}}>
                                <textarea id="exampleFormControlTextarea1" rows="3" placeholder="Write message*" />
                                <button className="btn"><FaSeedling /></button>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-7 col-12 right-body-contact">
                            <div className="style-map">
                                <GoogleMapReact
                                    bootstrapURLKeys={{ key: "AIzaSyCaoyj1X62QaL4z3HOR4VjnXrPjwY4oIag" }}
                                    defaultCenter={this.props.center}
                                    defaultZoom={this.props.zoom}
                                >
                                    <AnyReactComponent
                                        lat={59.955413}
                                        lng={30.337844}
                                        text="My Marker"
                                    />
                                </GoogleMapReact>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </ScrollableAnchor>
        );
    }
}

export default BodyContact;