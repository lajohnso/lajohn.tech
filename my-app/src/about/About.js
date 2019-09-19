import React, { Component } from "react";
import "./About.css";
import pbilde from "../images/P-bilde.png";

export default class Projetcs extends Component {
  render() {
    return (
      <div className="About" id="About" ref={this.myRef}>
        <div id="about" className="row">
          <div className="col s12">
            <h3 id="titles">About Lars-August</h3>
          </div>
          <div
            id="pbilde"
            className="col s3 m2 l1 offset-m5 offset-s5 offset-l2 "
          >
            <img src={pbilde} alt="profile" className="circle responsive-img" />
          </div>
          <div className="col s8 m8 l6 offset-s3 offset-m2">
            <p id="abouttxt">
              Hey, I’m Lars-August. I've finished a bachelor's degree in
              informatics/computer science from NTNU Trondheim. I’m currently
              studying for a master's degree in Programming and System
              Architecture at UiO. Throughout my education I have studied
              software development, web development, digital design and more. I
              have especially grown to love front-end development. I created
              this portfolio to display some of my skills as a developer through
              previous projects. I'm at the point in my career where I look to
              gain more experience in the industry. I have lived in Norway all
              my life, but I would be happy to relocate and explore other parts
              of the world!
            </p>
            <p id="abouttxt">
              In my spare time I enjoy playing volleyball and video games. I was
              new to volleyball when I first started at University, and now it
              is a huge part of my life. Furthermore I enjoy traveling, and I
              was recently lucky enough to visit Japan for three weeks. As a
              person I am hard working, eager to learn and develop new skills,
              dedicated to deliver quality products, and I have a positive
              outlook on life.
            </p>
            <br />
          </div>
        </div>
      </div>
    );
  }
}
