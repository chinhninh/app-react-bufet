import React, { Component, useState } from 'react';
import './ScollToTop.css';


// var mybutton = document.getElementById("myBtn");
//   window.onscroll = function () { scrollFunction() };

//   function scrollFunction() {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//       mybutton.style.display = "block";
//     } else {
//       mybutton.style.display = "none";
//     }
//   }
// const [showScroll, setShowScroll] = useState(false)

//   const checkScrollTop = () => {
//     if (!showScroll && window.pageYOffset > 400){
//       setShowScroll(true)
//     } else if (showScroll && window.pageYOffset <= 400){
//       setShowScroll(false)
//     }
//   };

//   window.addEventListener('scroll', checkScrollTop)

class ScollToTop extends Component {
    constructor(props){
        super(props);
        this.state = {
            intervalId: 0,
            hideBtn: false
        }
    }
    // checkScrollTop = () => {
    //     const [showScroll, setShowScroll] = useState([])
    //     if (!showScroll && window.pageYOffset > 400){
    //       setShowScroll(true)
    //     } else if (showScroll && window.pageYOffset <= 400){
    //       setShowScroll(false)
    //     }
    //   };

    // componentDidMount(){
        
    //     this.checkScrollTop()
        
    //       window.addEventListener('scroll',this.checkScrollTop())
    // }

    scrollStep() {
        if (window.pageYOffset === 0) {
            clearInterval(this.state.intervalId);
        }
        window.scroll(0, window.pageYOffset -50);
    }

    scrollToTop() {
        let intervalId = setInterval(this.scrollStep.bind(this), 16.66);
        this.setState({ intervalId: intervalId });
    }

    render() {
        const {hideBtn} = this.state
        console.log("long test: ", hideBtn)
        return (
            <div>
                <button id="myBtn" title='Back to top' className="scroll" 
                    onClick={() => { this.scrollToTop(); }}>
                    <span className='arrow-up glyphicon glyphicon-chevron-up'></span>
                </button>;
            </div>
        );
    }
}

export default ScollToTop;