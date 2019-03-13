import React, { Component } from 'react';
import M from 'materialize-css';
import background1 from './assets/background1.jpg';
import fiskinfo from './assets/FiskInfo.gif';
import background2 from './assets/background2.jpg';
import background3 from './assets/background3.jpg';
import laJohnLogo from './assets/LaJohnLogo.png';


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
          “Walking on water and developing software from a specification are easy if both are frozen.”
          </p>
          <p id="quoter">
          ―Edward V. Berard
          </p>
              <br />
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

        {/* lager en rad av 3 er 4/12 store */}
        <div id="about" className="row">
          <div className="row">
            <div class="col s12">
              <h3 id="title">#About Lars-August</h3>
            </div>
          </div>
          <div class="col s4">
            <img src={fiskinfo} className=""/>
            <br />
            <i class="material-icons">visibility_off</i>
            <p>source private</p>
          </div>
          <div class="col s4">
            heihopp
          </div>
          <div class="col s4">
            heihopp
          </div>
        </div>
        {/* lager en rad av 3 er 4/12 store */}
        <div id="skills" class="row">
          <div class="col s4">
            <img src={fiskinfo} className=""/>
            <br />
            <i class="material-icons">visibility_off</i>
          </div>
          <div class="col s4">
            heihopp
          </div>
          <div class="col s4">
            heihopp
          </div>
        </div>
        {/* lager en rad av 3 er 4/12 store */}
        <div id="projects" className="row">
          <div class="col s4">
            <img src={fiskinfo} className=""/>
            <br />
            <i class="material-icons">visibility_off</i>
          </div>
          <div class="col s4">
            heihopp
          </div>
          <div class="col s4">
            heihopp
          </div>
        </div>
        <div className="col12">
          <i id="up" className="medium material-icons"><a href="#logo">expand_less</a></i>
        </div>






{/*app closer*/}
      </div>
    );
  }
}

export default App;
