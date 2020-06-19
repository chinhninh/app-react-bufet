import React, { Component } from 'react';
import './ExplainBufet.css';
import {Media} from 'react-bootstrap';
import work1 from '../../../../images/work-1.png';
import work2 from '../../../../images/work-2.png';
import work3 from '../../../../images/work-3.png';

class ExplainBufet extends Component {
    render() {
        return (
            <div className="explain-bufet">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-12 left-explain-bufet">
                            <h1>Why Bufet is <br/>Best for your Business?</h1>
                            <p>
                            Mistaken idea of denouncing pleasure and praising 
                            pain was born and I will give you a complete account of the system, 
                            and expound. mistaken you a complete account.
                            </p>
                            <p>
                            Mistaken idea of denouncing pleasure and praising pain was 
                            born and I will give you a complete account of the system.
                            </p>
                            <button className="btn">READ MORE</button>
                        </div>
                        <div className='col-md-1'></div>
                        <div className="col-md-5 col-12 right-explain-bufet">
                        <Media>
                            <img src={work1}/>
                            <Media.Body>
                            <h3>Login First</h3>
                                <p>
                                Lorem ipsum dolor sit amet, consectet adop adipisicing elit, 
                                eased do eiusmod temporara incididunt ugt labore.
                                </p>
                            </Media.Body>
                        </Media>
                        <Media>
                            <img src={work2}/>
                            <Media.Body>
                            <h3>Data Analysis</h3>
                                <p>
                                Lorem ipsum dolor sit amet, consectet adop adipisicing elit, 
                                eased do eiusmod temporara incididunt ugt labore.
                                </p>
                            </Media.Body>
                        </Media>
                        <Media>
                            <img src={work3}/>
                            <Media.Body>
                            <h3>Show Result</h3>
                                <p>
                                Lorem ipsum dolor sit amet, consectet adop adipisicing elit, 
                                eased do eiusmod temporara incididunt ugt labore.
                                </p>
                            </Media.Body>
                        </Media>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ExplainBufet;