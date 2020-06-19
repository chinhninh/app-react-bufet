import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import HomeOne from './pages/home/homeOne/HomeOne';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <HomeOne/>
        <Footer/>
      </div>
    );
  }
}

export default App;
