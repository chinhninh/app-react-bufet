import React, { Component } from 'react';
import './Blog.css';
import sectionIcon from '../../../../images/section-icon.png';
import blog1 from '../../../../images/blog-1.jpg';
import blog2 from '../../../../images/blog-2.jpg';
import blog3 from '../../../../images/blog-3.jpg';
import { FaUserAlt } from 'react-icons/fa';
import { FaComment } from 'react-icons/fa';
import ScrollableAnchor from 'react-scrollable-anchor';

class Blog extends Component {
    render() {
        return (
            <ScrollableAnchor id={'blog'}>
            <div className="blog">
                <div className="container">
                    <div className="title-Blog">
                        <h1>Latest Blog Post</h1>
                        <img src={sectionIcon} />
                        <p>
                            Lorem ipsum madolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor coli incididunt ut labore Lorem ipsum madolor sit
                            amet, consectetur adipisicing incididunt.
                        </p>
                    </div>
                    {/* content */}
                    <div className="row content-blog">
                        <div className="col-lg-4 col-12">
                            <div className="in-content-blog">
                                <div className="img-blog">
                                    <a href="#">
                                        <img src={blog1} />
                                        <div className="seen-blog">
                                            +
                                    </div>
                                    </a>
                                </div>
                                <div className="body-content-blog">
                                    <strong>
                                        <FaUserAlt />
                                        <i>Feb 01.2017</i>
                                    </strong>
                                    <span>
                                        <FaComment />
                                        <i>(23)</i>
                                    </span>
                                </div>
                                <div className="btn-blog">
                                    <a href="#">
                                        Beautiful Place for your Great Journey
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <div className="in-content-blog">
                                <div className="img-blog">
                                    <a href="#">
                                        <img src={blog2} />
                                        <div className="seen-blog">
                                            +
                                    </div>
                                    </a>
                                </div>
                                <div className="body-content-blog">
                                    <strong>
                                        <FaUserAlt />
                                        <i>Feb 01.2017</i>
                                    </strong>
                                    <span>
                                        <FaComment />
                                        <i>(23)</i>
                                    </span>
                                </div>
                                <div className="btn-blog">
                                    <a href="#">
                                        Beautiful Place for your Great Journey
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <div className="in-content-blog">
                                <div className="img-blog">
                                    <a href="#">
                                        <img src={blog3} />
                                        <div className="seen-blog">
                                            +
                                    </div>
                                    </a>
                                </div>
                                <div className="body-content-blog">
                                    <strong>
                                        <FaUserAlt />
                                        <i>Feb 01.2017</i>
                                    </strong>
                                    <span>
                                        <FaComment />
                                        <i>(23)</i>
                                    </span>
                                </div>
                                <div className="btn-blog">
                                    <a href="#">
                                        Beautiful Place for your Great Journey
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </ScrollableAnchor>
        );
    }
}

export default Blog;