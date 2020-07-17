import React, { Component } from 'react';
import './FactArea.css';
import { FaMouse } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { useElapsedTime } from "use-elapsed-time";


const easing = (t, b, c, d) => {
    return c * ((t = t / d - 1) * t * t + 1) + b;
};

const isPlaying = true;
const start = 40; // count from
const end = 300; // count to
const duration = 3; // for 3 seconds
const options = { duration };

const CountUpComponent = () => {
    const { elapsedTime } = useElapsedTime(isPlaying, options);
    const currentValue = easing(elapsedTime, start, end - start, duration);

    return <h3 style={{ fontSize: 46 }}>{Math.round(currentValue)}+</h3>;
};

class FactArea extends Component {
    render() {
        return (
            <div className="fact-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-12 content-fact-area">
                            <CountUpComponent />
                            <div><FaMouse /></div>
                            <p>App Download</p>
                        </div>
                        <div className="col-md-3 col-12 content-fact-area">
                            <CountUpComponent />
                            <div><FaUser /></div>
                            <p>Happy Clients</p>
                        </div>
                        <div className="col-md-3 col-12 content-fact-area">
                            <CountUpComponent />
                            <div><FaStar /></div>
                            <p>Active Accounts</p>
                        </div>
                        <div className="col-md-3 col-12 content-fact-area">
                            <CountUpComponent />
                            <div><FaHeart /></div>
                            <p>Positive Rating</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FactArea;