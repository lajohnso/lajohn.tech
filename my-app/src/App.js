import React, { Component } from 'react';
import M from 'materialize-css';


import laJohnLogo from './images/LaJohnLogo.png';
import angular from './images/angular.svg';
import python from './images/python.jpg';
import react from './images/react_logo.png';
import db from './images/db.png';
import js from './images/js.png';
import sql from './images/sql.png';
import html5 from './images/html5.png';
import css3 from './images/css.svg';
import scrum from './images/scrum.png';
import asana from './images/asana.png';
import github from './images/github.svg';
import ol from './images/OL.png';
import git from './images/git-logo.png';
import wp from './images/wp.png';

import Projects from './Projects/Projects'
import About from './about/About'
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

        {/* lager en rad av 3 er 4/12 store */}
        <div id="skills" class="row">
          <div  class="col s12">
            <h3 id="titles2">My Skills</h3>
          </div>
          <div id="cards" class="col s12 m2">
            <div class="card-panel white">
              <ul>
                <li id="title_box">< img id="db" src={db}className=""/>Back-End</li>
                <li id="bilde">< img src={python}className="responsive-img"/></li>
                <li id="bilde">< img src={sql}className="responsive-img"/></li>
                <li id="bilde">< img src={angular}className="responsive-img"/></li>
                <li id="bilde">< img src={angular}className="responsive-img"/></li>

              </ul>
            </div>
          </div>
          <div  class="col s12 m2">
            <div id="card" class="card-panel white">
              <ul>
                <li id="title_box"><i className="small material-icons">code</i>Front-End</li>
                <li id="bilde">< img src={angular}className="responsive-img"/></li>
                <li id="bilde">< img src={react}className="responsive-img"/></li>
                <li id="bilde">< img src={html5}className="responsive-img"/></li>
                <li id="bilde">< img src={css3}className="responsive-img"/></li>
                <li id="bilde">< img src={js}className="responsive-img"/></li>
                <li id="bilde">< img src={wp}className="responsive-img"/></li>
              </ul>
            </div>
          </div>
          <div  class="col s12 m2">
            <div class="card-panel white">
              <ul>
                <li id="title_box"><i className="small material-icons">people</i>Project management</li>
                <li id="bilde">< img src={asana}className="responsive-img"/></li>
                <li id="bilde">< img src={scrum}className="responsive-img"/></li>
                <li id="bilde">< img src={github}className="responsive-img"/></li>
                <li id="bilde">< img src={git}className="responsive-img"/></li>

              </ul>
            </div>
          </div>
        </div>

        <Projects />
        <footer className="page-footer">
          <div class="footer-copyright">
            <div class="container">
              © 2019 Copyright reserved Lars-August Johnson
              <a class="grey-text text-lighten-4 right" href="#!"></a>
            </div>
          </div>
        </footer>


{/*app closer*/}
      </div>
    );
  }
}

export default App;
