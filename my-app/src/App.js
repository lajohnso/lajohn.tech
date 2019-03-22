import React, { Component } from 'react';
import M from 'materialize-css';
import Projects from './Projects/Projects'
import About from './about/About'
import Skills from './skills/Skills'
import Footer from './footer/Footer'
import Typed from 'react-typed'

import laJohnLogo from './images/LaJohnLogo.png';
import background from './images/background.png';
import background2 from './images/background2.jpg';

import './App.css';

class App extends Component {

  componentDidMount(){
    document.getElementById('appHeader').scrollIntoView();
    }

  render() {



    return (

      <div className="App">
      <div className="background">


        <div id="appHeader"
         className="App-header"
        >
          <p id="title">Welcome to my<span id="space"></span>
          <Typed
              strings={[
              ' ^1000 portfolio ^2000',
              ' ReactJS Application ^2000',
              ' web page ^2000',
              ' portfolio ^2000'


              ]}
              typeSpeed={70}
              backSpeed={90}

          />
          </p>
          <p id="quote">
            “Walking on water and developing software from a specification
          </p>
          <p id="quote">
            are easy if both are frozen.” ―Edward V. Berard
          </p>
          <br/>
          <div>

                <br/>

            </div>
          <br/>

          <a className="button" href="https://www.linkedin.com/in/lars-august-johnson-a9245b180/" target="_blank">Get in touch</a>
          <div className="expand">
            <i className="medium material-icons">
              <a href="#About">expand_more</a>
            </i>
          </div>
        </div>

        </div>
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
