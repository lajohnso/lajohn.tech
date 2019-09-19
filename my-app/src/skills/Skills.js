import React, { Component } from "react";
import "./Skills.css";

import angular from "../images/angular.svg";
import python from "../images/python.png";
import react from "../images/react.png";
import js from "../images/js.png";
import sql from "../images/mysql_logo.png";
import html5 from "../images/html5.png";
import css3 from "../images/css.svg";
import scrum from "../images/scrum.png";
import asana from "../images/asana.png";
import github from "../images/github.svg";
import git from "../images/git-logo.png";
import wp from "../images/wp.png";
import firebase from "../images/firebase_logo.png";
import node from "../images/nodejs.png";

export default class Skills extends Component {
  render() {
    return (
      <div className="Skills">
        <div id="skills" className="row">
          <div className="col s12">
            <h3 id="title_skills"> My Skills </h3>
          </div>
          <div className="container">
            <div className="col s10 m10 l0 offset-l1 offset-m1 offset-s1">
              <div id="card" className="card-panel  white">
                <h5> Front - End </h5> <hr />
                <ul>
                  <li id="bilde">
                    <img
                      src={angular}
                      alt="Angular"
                      className="responsive-img"
                    />
                  </li>
                  <li id="bilde">
                    <img src={react} alt="React" className="responsive-img" />
                  </li>
                  <li id="bilde">
                    <img src={html5} alt="HTML5" className="responsive-img" />
                  </li>
                  <li id="bilde">
                    <img src={css3} alt="CSS3" className="responsive-img" />
                  </li>
                  <li id="bilde">
                    <img src={js} alt="JavaScript" className="responsive-img" />
                  </li>
                  <li id="bilde">
                    <img src={wp} alt="Wordpress" className="responsive-img" />
                  </li>
                </ul>
              </div>
            </div>
            <div
              id="cards"
              className="col s10 m10 l0 offset-l1 offset-m1 offset-s1 "
            >
              <div className="card-panel white">
                <h5> Back - End </h5> <hr />
                <ul>
                  <li id="bilde">
                    <img src={python} alt="Python" className="responsive-img" />
                  </li>
                  <li id="bilde_sql">
                    <img src={sql} alt="SQL" className="responsive-img" />
                  </li>
                  <li id="bilde_sql">
                    <img src={node} alt="Node" className="responsive-img" />
                  </li>
                  <li id="bilde_sql">
                    <img
                      src={firebase}
                      alt="Firebase"
                      className="responsive-img"
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col s10 m10 l10 offset-l1 offset-m1 offset-s1">
              <div className="card-panel  white">
                <h5> Project Management </h5> <hr />
                <ul>
                  <li id="bilde_asana">
                    <img src={asana} alt="Asana" className="responsive-img" />
                  </li>
                  <li id="bilde_scrum">
                    <img src={scrum} alt="Scrum" className="responsive-img" />
                  </li>
                  <li id="bilde">
                    <img src={git} alt="Git" className="responsive-img" />
                  </li>
                  <li id="bilde">
                    <img src={github} alt="Github" className="responsive-img" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
