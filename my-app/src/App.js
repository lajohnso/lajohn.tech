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
      <nav className="grey">
        <div className="nav-wrapper grey">
          <img id="logo" className="left brand-logo"src={laJohnLogo}></img>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="">About</a></li>
            <li><a href="">Skills</a></li>
            <li><a href="">Projects</a></li>
          </ul>
        </div>
      </nav>

        <header className="App-header">

          <p>
          Welcome to my portfolio
          </p>
          <a target="_blank" href="https://www.linkedin.com/in/lars-august-johnson-a9245b180/"
           className="waves-effect wawes blue btn target=_blank">
           Get in touch
          </a>
          <div className="expand">
            <i className="medium material-icons">expand_more</i>
          </div>


        </header>

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

        {/* lager en rad av 3 er 4/12 store */}
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
      </div>
    );
  }
}

export default App;
