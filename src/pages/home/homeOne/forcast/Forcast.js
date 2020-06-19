import React, { Component } from 'react';
import './Forcast.css';
import { FaVectorSquare } from 'react-icons/fa';
import { FaPaintRoller } from 'react-icons/fa';
import { FaLaptop } from 'react-icons/fa';

class Forcast extends Component {
    render() {
        return (
            <div className="forcast">
                <div className="container">
                    <div className="row">
                        {/* forcast sales */}
                        <div className="col-md-4 col-12">
                            <div className="icon-forcast">
                                <h1>01</h1>
                                <div className="style-icon-forcast">
                                    <FaVectorSquare />
                                </div>
                                <div className="btn-forcast">
                                    <a href="#">Forcast Sales</a>
                                </div>
                                <p>Adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amt, consectet incididunt ipsum lorem</p>
                            </div>
                        </div>
                        {/* Retargetion Customer */}
                        <div className="col-md-4 col-12">
                            <div className="icon-forcast">
                                <h1>02</h1>
                                <div className="style-icon-forcast">
                                    <FaPaintRoller />
                                </div>
                                <div className="btn-forcast">
                                    <a href="#">Retargetion Customer</a>
                                </div>
                                <p>Adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amt, consectet incididunt ipsum lorem</p>
                            </div>
                        </div>
                        {/* High Performance */}
                        <div className="col-md-4 col-12">
                            <div className="icon-forcast">
                                <h1>03</h1>
                                <div className="style-icon-forcast">
                                    <FaLaptop />
                                </div>
                                <div className="btn-forcast">
                                    <a href="#">High Performance</a>
                                </div>
                                <p>Adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amt, consectet incididunt ipsum lorem</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Forcast;