import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import HomeOne from './pages/home/homeOne/HomeOne';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header/>
        <HomeOne/>
        <Footer/>
      </div>
    );
  }
}

export default App;

// import React from 'react';
// import Lightbox from 'react-lightbox-component';

// const App = () => (
//   <div>
//     <Lightbox images={ [
//       {
//         src: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Okataina.jpg',
//         title: 'Ropy pahoehoe',
//         description: 'By Tari Noelani Mattox. Licensed under Public Domain via Commons'
//       },
//       {
//         src: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Pyroclastic_flows_at_Mayon_Volcano.jpg',
//         title: 'Pyroclastic flows at Mayon Volcano',
//         description: 'By C.G. Newhall. Licensed under Public Domain via Commons'
//       },
//       {
//         src: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Okataina.jpg',
//         title: 'Okataina',
//         description: 'By Richard Waitt. Licensed under Public Domain via Commons'
//       }
//     ] }/>
//   </div>
// );

// export default App;


// import React, { Component } from 'react';
// import ReactImageVideoLightbox from 'react-image-video-lightbox';
// import img from './images/blog-1.jpg';
// import Lightbox from 'react-lightbox-component';


// class App extends Component {
//   render() {
   
    
//     return (
//       <div>
//      <Lightbox images={ [
//       {
//         src: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Ropy_pahoehoe.jpg',
//         title: 'Ropy pahoehoe',
//         description: 'By Tari Noelani Mattox. Licensed under Public Domain via Commons'
//       },
//       {
//         src: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Pyroclastic_flows_at_Mayon_Volcano.jpg',
//         title: 'Pyroclastic flows at Mayon Volcano',
//         description: 'By C.G. Newhall. Licensed under Public Domain via Commons'
//       },
//       {
//         src: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Okataina.jpg',
//         title: 'Okataina',
//         description: 'By Richard Waitt. Licensed under Public Domain via Commons'
//       }
//     ] }/>
//       </div>
//     );
//   }
// }

// export default App;
