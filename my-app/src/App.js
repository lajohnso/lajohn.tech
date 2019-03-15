import React, { Component } from 'react';
import M from 'materialize-css';
import Projects from './projects/Projects'
import About from './about/About'
import Skills from './skills/Skills'
import Footer from './footer/Footer'

import laJohnLogo from './images/LaJohnLogo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <nav className="">
        <div className="nav-wrapper">
          <img id="logo"
            onClick={this.scrollToTop}
            className="left brand-logo"
            src={laJohnLogo}
            />
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
        </div>
      </nav>

        <div id="appHeader"
         className="App-header"
        >
          <h3>
          Welcome to my portfolio
          </h3>
          <p id="quote">
            “Walking on water and developing software from a specification
          </p>
          <p id="quote">
            are easy if both are frozen.” ―Edward V. Berard
          </p>
          <br/>
          <br/>
          <a target="_blank"
            href="https://www.linkedin.com/in/lars-august-johnson-a9245b180/"
            className="waves-effect wawes blue btn target=_blank">
            Get in touch
          </a>
          <div className="expand">
            <i className="medium material-icons">
              <a href="#about">expand_more</a>
            </i>
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
