import React, { Component } from 'react';
import './Questions.css';
import sectionIcon from '../../../../images/section-icon.png';
import mobile1 from '../../../../images/screen-1.png';
import { FaAngleDown } from 'react-icons/fa';
import { connect } from 'react-redux';
import { toggleShowContentQuestion } from '../../../../redux/actions/questions/actionCreators';
import { Button, Card, Accordion } from 'react-bootstrap';

class Questions extends Component {
    render() {
        var { data, handleToggleShow, toggleShow, } = this.props;
        console.log(toggleShow)
        return (
            <div className="questions">
                <div className="container">
                    <div className="title-questions">
                        <h1>Frequently asked questions</h1>
                        <img src={sectionIcon} />
                        <p>
                            Lorem ipsum madolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor coli incididunt ut labore Lorem ipsum madolor sit
                            amet, consectetur adipisicing incididunt.
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-12 img-mobile2">
                            <img src={mobile1} />
                        </div>
                        <div className="col-lg-6 col-12 right-question">
                            {/* {data.map((item, index) => {
                                return (
                                    <div key={index} className="ask-question">
                                        <div  onClick={handleToggleShow}>
                                            <h4>
                                                {item.title}
                                                <span><FaAngleDown /></span>
                                            </h4>
                                            <div className={`ask-question-content ${toggleShow ? 'show-content' : ""}`}>
                                                <p className={`content-question ${toggleShow ? 'show-content-p' : ""}`}>
                                                    {item.paragraph}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                            )} */}
                            <Accordion>
                                <Card>
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                        <span>
                                        1. Sedeiusmod tempor inccsetetur aliquatraiy?
                                            </span>
                                            <i>
                                            <FaAngleDown />
                                            </i>
                                 </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>
                                        Lorem ipsum dolor sit amet consectetur adipisicing  sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing 
                                        elitLorem ipsum dolor sit amet consectetur adipisicing elit Eveniet natus sint provident vel ab reprehenderit cum soluta,
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                        <span>
                                        2. Lorem ipsum dolor amet, consect adipisicing elit?
                                            </span>
                                            <i>
                                            <FaAngleDown />
                                            </i>
                                 </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                        Lorem ipsum dolor sit amet consectetur adipisicing  sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing 
                                        elitLorem ipsum dolor sit amet consectetur adipisicing elit Eveniet natus sint provident vel ab reprehenderit cum soluta,
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                        <span>
                                        3. Lorem ipsum dolor amet, consect adipisicing elit?
                                            </span>
                                            <i>
                                            <FaAngleDown />
                                            </i>
                                 </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="2">
                                    <Card.Body>
                                        Lorem ipsum dolor sit amet consectetur adipisicing  sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing 
                                        elitLorem ipsum dolor sit amet consectetur adipisicing elit Eveniet natus sint provident vel ab reprehenderit cum soluta,
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="3">
                                        <span>
                                        4. Lorem ipsum dolor amet, consect adipisicing elit?
                                            </span>
                                            <i>
                                            <FaAngleDown />
                                            </i>
                                 </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="3">
                                    <Card.Body>
                                        Lorem ipsum dolor sit amet consectetur adipisicing  sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing 
                                        elitLorem ipsum dolor sit amet consectetur adipisicing elit Eveniet natus sint provident vel ab reprehenderit cum soluta,
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {

        data: state.questionReducer.data,
        toggleShow: state.questionReducer.toggleShow
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleToggleShow: () => dispatch(toggleShowContentQuestion())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Questions);