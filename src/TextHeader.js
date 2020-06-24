// import React, { Component } from 'react';
// import './Header.css';
// import Navbar from 'react-bootstrap/Navbar';
// import Form from 'react-bootstrap/Form';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Nav from 'react-bootstrap/Nav';
// import FormControl from 'react-bootstrap/FormControl';
// import Button from 'react-bootstrap/Button';
// import logo from '../../images/logo.png';
// import Headroom from 'react-headroom';
// import { FaAngleDown } from 'react-icons/fa';
// import { slide as Menu } from 'react-burger-menu';

// class Header extends Component {
//     showSettings(event) {
//         event.preventDefault();
//     }
//     render() {
//         return (
//             <div id="outer-container">
//                 {/* <Menu styles={ styles } pageWrapId={"page-wrap"} outerContainerId={"outer-container"} id={"sidebar"} className={"my-menu"} customBurgerIcon={<img src="img/icon.svg" />} /> */}
//                 {/* <main id="page-wrap"> */}
//                     <Menu>
//                         <a id="home" className="menu-item" href="/">Home</a>
//                         <a id="about" className="menu-item" href="/about">About</a>
//                         <a id="contact" className="menu-item" href="/contact">Contact</a>
//                         <a onClick={this.showSettings} className="menu-item--small" href="">Settings</a>
//                     </Menu>
//                 {/* </main> */}
//             </div>
//         );
//     }
// }

// export default Header;

import React, { Component } from 'react';
import './Header.css';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import logo from '../../images/logo.png';
import Headroom from 'react-headroom';
import {FaAngleDown} from 'react-icons/fa';

class Header extends Component {
    render() {
        return (
            <header className="header">
            <Headroom>
            <Navbar expand="lg" className="container">
                <Navbar.Brand href="#home">
                    <img src={logo} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="list-button-header">
                    <Nav className="">
                     {/* btn Home pc */}
                         <Nav.Link href="#home" className="btn-home">
                           <span>Home <i><FaAngleDown/></i></span>
                            <ul class="menu-btn-home">
                                        <li class="dropdown-item"><a href="archive-tech.html">Home one</a>
                                        </li>
                                        <li class="dropdown-item"><a href="post-tech.html">Home two</a></li>
                                        <li class="dropdown-item"><a href="single-post-tech.html">Home three</a></li>
                                        <li class="dropdown-item"><a href="archive-tech-needs.html">Home four</a>
                                        </li>
                                        <li class="dropdown-item"><a href="post-tech-needs.html">Home five</a>
                                        </li>
                                    </ul>
                         </Nav.Link>
                         {/* btn home mobile */}
                        <NavDropdown title="Home" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link href="#home">About</Nav.Link>
                        <Nav.Link href="#link">Features</Nav.Link>
                        <Nav.Link href="#home">ScreenShots</Nav.Link>
                        <Nav.Link href="#link">Pricing</Nav.Link>
                         {/* btn blog pc */}
                        <Nav.Link href="#" className="btn-home">
                           <span>Blog <i><FaAngleDown/></i></span>
                            <ul class="menu-btn-home">
                                        <li class="dropdown-item"><a href="archive-tech.html">Home one</a>
                                        </li>
                                        <li class="dropdown-item"><a href="post-tech.html">Home two</a></li>
                                        <li class="dropdown-item"><a href="single-post-tech.html">Home three</a></li>
                                        <li class="dropdown-item"><a href="archive-tech-needs.html">Home four</a>
                                        </li>
                                        <li class="dropdown-item"><a href="post-tech-needs.html">Home five</a>
                                        </li>
                                    </ul>
                         </Nav.Link>
                         {/* btn blog mobile */}
                        <NavDropdown title="Blog" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                            {/* btn pages pc */}
                        <Nav.Link href="#" className="btn-home">
                           <span>Pages <i><FaAngleDown/></i></span>
                            <ul class="menu-btn-home">
                                        <li class="dropdown-item"><a href="archive-tech.html">Home one</a>
                                        </li>
                                        <li class="dropdown-item"><a href="post-tech.html">Home two</a></li>
                                        <li class="dropdown-item"><a href="single-post-tech.html">Home three</a></li>
                                        <li class="dropdown-item"><a href="archive-tech-needs.html">Home four</a>
                                        </li>
                                        <li class="dropdown-item"><a href="post-tech-needs.html">Home five</a>
                                        </li>
                                    </ul>
                         </Nav.Link>
                         {/* btn pages mobile */}
                        <NavDropdown title="Pages" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#link">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </Headroom>
             </header>
        );
    }
}

export default Header;