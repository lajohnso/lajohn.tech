import React,{Component} from 'react';
import M from 'materialize-css';
import laJohnLogo from '../images/LaJohnLogo.png';
import "./navigation.css"

export default class Projetcs extends Component {
  render() {
    return (

    <div className="navigation">
      <nav className="nav-wrapper hide-on-med-and-down">
        <div className="container">
        <img id="logo"
            onClick={this.scrollToTop}
            className="left brand-logo"
            src={laJohnLogo} />

          <ul className="right hide-on-med-and-down">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
        </div>
      </nav>
    </div>
     )
  }
}
{/*
    />*/}
