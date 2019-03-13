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

          <nav id="nav" className="grey">
            <div className="nav-wrapper grey">
              <img id="logo" className="left brand-logo"src={laJohnLogo}></img>
              <ul id="nav-mobile" className="right "> {/*enter when added alternative menu: hide-on-med-and-down*/}
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
              </ul>
            </div>
          </nav>

          <div id="container">
            <div className="landingPage">
              <div className="contentL">
                <p>
                  Welcome to my portfolio
                </p>
                <a target="_blank" href="https://www.linkedin.com/in/lars-august-johnson-a9245b180/"
                  className="waves-effect wawes blue btn target=_blank">
                  Get in touch
                </a>
              </div>
              <div id="expand" className="expand">
                <i id="arrow" className="medium material-icons"><a href="#about"> expand_more</a></i>
              </div>
            </div>

            <div id="about">
              <h1>About</h1>
            </div>

            <div id="skills">
              <h1>Skills</h1>
            </div>

            <div id="projects">
              <h1>Projects</h1>
            </div>
          </div>

        {/*
        <div className="parallax-container">
          <div className="parallax">
            <img src={background1} className="" />
          </div>
        </div>
        <div className="section white">
          <div className="row container">
            <h2 className="header">Parallax</h2>
            <p className="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
          </div>
        </div>
        <div className="parallax-container">
          <div className="parallax"><img src={background2} /></div>
        </div>




        <br />
        <br />


        <div class="row">
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
        */}
            {/* lager en rad av 3 er 4/12 store */}
      </div>
    );
  }
}

export default App;
