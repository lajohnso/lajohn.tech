import React, { Component } from 'react';
import M from 'materialize-css';
import pbilde from '../images/P.Bilde.jpg';
import "./About.css"
import laJohnLogo from '../images/LaJohnLogo.png';
import ReactDom from 'react';


export default class Projetcs extends Component {
  componentDidUpdate = () => { ReactDom.findDOMNode(this).scrollIntoView(); }


  render() {
    return (

    /* lager en rad av 3 er 4/12 store */
    <div className="About"
    id="About"
    ref={this.myRef}
    >
    {/*<nav>
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
    </nav>*/}
      <div id="about" className="row">
        <div class="col s12">
          <h3 id="titles">About Lars-August</h3>
        </div>
        <div id="pbilde" className="col s3 m2 l1 offset-m5 offset-s5 offset-l2 ">
            <img src={pbilde} className="circle responsive-img"/>
        </div>
        <div  class="col s8 m8 l6 offset-s3 offset-m2">
          <p id="abouttxt">
          Hey, I’m Lars-August.  I am a web developer and a student at NTNU. I have a bachelor’s degree in Informatics. Throughout my education I have studied software development, web development, digital design and more. I have grown to love (and prefer) web development. I created this portfolio to display my skills as a developer through previous projects.
          I'm at the point in my career where I look to gain more experience in the industry. I have lived in Norway all my life, but I would be happy to relocate and explore other parts of the world!
          </p>
          <p id="abouttxt">
          In my spare time I enjoy playing volleyball and video games. I was new to volleyball when I first started at University, and now it is a huge part of my life. Furthermore I enjoy traveling, and I was recently lucky enough to visit Japan for three weeks. As a person I am hard working, eager to learn and develop new skills, dedicated to deliver quality products, and I have a positive outlook on life.
          </p>
          <br />
        </div>
     </div>
</div>




    )

  }
}
