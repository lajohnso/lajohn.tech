import React, { Component } from 'react';
import M from 'materialize-css';

import background1 from './assets/background1.jpg';
import background2 from './assets/background2.jpg';
import background3 from './assets/background3.jpg';
import laJohnLogo from './assets/LaJohnLogo.png';
import pbilde from './assets/P.Bilde.jpg';
import angular from './assets/angular.svg';
import python from './assets/python.jpg';
import react from './assets/react_logo.png';
import db from './assets/db.png';
import js from './assets/js.png';
import sql from './assets/sql.png';
import html5 from './assets/html5.png';
import css3 from './assets/css.svg';
import scrum from './assets/scrum.png';
import asana from './assets/asana.png';
import github from './assets/github.svg';
import ol from './assets/OL.png';
import git from './assets/git-logo.png';
import wp from './assets/wp.png';

import Projects from './Projects/Projects'
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

        {/* lager en rad av 3 er 4/12 store */}
        <div id="about" className="row">
            <div class="col s12">
              <h3 id="titles">About Lars-August</h3>
            </div>
            <div id="pbilde" className="col s2 offset-s1">
                <img src={pbilde} className="circle responsive-img"/>
            </div>
            <div  class="col s6">
              <p id="abouttxt">
                Nam molestie quis ligula at varius. Nam id sapien diam.Sed ipsum enim, lobortis vel volutpat ornare, laoreet eget sapien. Quisque magna ante, pretium eu est in, dictum bibendum arcu.
                Nam id sapien diam. Sed ipsum enim, lobortis vel volutpat ornare, laoreet eget sapien. Quisque magna ante, pretium eu est in, dictum bibendum arcu.
              </p>
              <p id="abouttxt">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut dui at nunc lacinia condimentum eget ut risus. Mauris egestas dignissim rutrum. Duis sit amet suscipit turpis. Fusce dui ante, semper nec purus ac, varius rhoncus enim. In in pellentesque arcu, sit amet luctus dolor. Mauris at eleifend nisl. Integer eget condimentum augue. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                Integer tempor orci est, eu mollis sem egestas nec. Proin eu scelerisque arcu. Donec vitae lobortis massa, id efficitur neque. Sed bibendum est enim, vel luctus sapien faucibus vel. Sed pharetra, dolor a viverra consequat, arcu mauris molestie mauris, sed placerat nibh odio ac nisi. Suspendisse nulla odio, efficitur eleifend facilisis consequat, accumsan ac risus. Donec tempor et felis vitae efficitur. Donec et mollis sapien. Aenean consequat ornare enim sed sodales. Nulla   tempor velit nibh, a tempus dui maximus sed. Nulla eget vestibulum mi, eu laoreet ligula.</p>
              <br />
         </div>
      </div>

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
            <div class="card-panel white">
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
