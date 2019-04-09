import React, { Component } from 'react';
import M from 'materialize-css';
import Projects from './Projects/Projects'
import About from './about/About'
import Skills from './skills/Skills'
import Footer from './footer/Footer'
import Navigation from './navigation/navigation'

import Typed from 'react-typed'

import laJohnLogo from './images/logo3.png';
import background from './images/background.png';
import background2 from './images/background2.jpg';

import './App.css';

class App extends Component {

  componentDidMount(){
    document.getElementById('appHeader').scrollIntoView();
    }
    constructor(props) {
       super(props)
       this.myRef = React.createRef()   // Create a ref object
   }

   scrollToMyRef = () => window.scrollTo(0, this.myRef.current.offsetTop)

  render() {
    return (

      <div className="App" id="App">
        <div className="background">
          <img id="logo"
            onClick={this.scrollToMyRef}
            className="left brand-logo"
            src={laJohnLogo}
          />
            <div id="appHeader"
             className="App-header"
             ref={this.myRef}
            >
              <p id="title">Welcome to my<span id="space"></span>
              <Typed
                  strings={[
                  ' ^1000 portfolio ^1000',
                  ' ReactJS Application ^1000',
                  ' web page ^1000',
                  ' portfolio '
                  ]}
                  value='stop'
                  typeSpeed={70}
                  backSpeed={90}
              />
              </p>
              <p id="small_title">Welcome to my portfolio!</p>
              <div id="row_nogap" className="row">
                <div className="col l12 s9 offset-s1 ">
                  <p id="quote">
                    “Walking on water and developing software from a specification
                  </p>
                  <p id="quote">
                    are easy if both are frozen.” ―Edward V. Berard
                  </p>
                </div>
              </div>
              <a id="get_in_touch" className="button" href="https://www.linkedin.com/in/lars-august-johnson-a9245b180/" target="_blank">Get in touch</a>
              <div className="expand">
                <i className="medium material-icons">
                  <a href="#About">expand_more</a>
                </i>
              </div>
            </div>
          </div>
          {/*<Navigation />*/}
          <About />
          <Skills />
          <Projects />
          <Footer />
        {/*app closer*/}
      </div>
    );
  }
}

export default App;
