import React, { Component } from 'react';
import M from 'materialize-css';
import "./Skills.css"

import angular from '../images/angular.svg';
import python from '../images/python.png';
import react from '../images/react_logo.png';
import db from '../images/db.png';
import js from '../images/js.png';
import sql from '../images/sql.png';
import html5 from '../images/html5.png';
import css3 from '../images/css.svg';
import scrum from '../images/scrum.png';
import asana from '../images/asana.png';
import github from '../images/github.svg';
import ol from '../images/OL.png';
import git from '../images/git-logo.png';
import wp from '../images/wp.png';
import firebase from '../images/firebase.png';


export default class Skills extends Component {
  render() {
    return (
    <div className="Skills">
      <div id="skills" class="row">
        <div  class="col s12">
          <h3 id="titles2">My Skills</h3>
        </div>
        <div className="container">

          <div  class="col s2 m10 ">
            <div id="card" class="card-panel  grey lighten-2">
              <i className="small material-icons">code</i><p className="boxTitle"> Front-End</p>
              <ul>
                <li id="bilde">< img src={angular}className="responsive-img"/></li>
                <li id="bilde">< img src={react}className="responsive-img"/></li>
                <li id="bilde">< img src={html5}className="responsive-img"/></li>
                <li id="bilde">< img src={css3}className="responsive-img"/></li>
                <li id="bilde">< img src={js}className="responsive-img"/></li>
                <li id="bilde">< img src={wp}className="responsive-img"/></li>
              </ul>
            </div>
          </div>
          <div id="cards" class="col s2 m10">
            <div class="card-panel grey lighten-2">
            < img id="db" src={db}className=""/> <p className="boxTitle"> Back-End</p>
              <ul>
                <li id="bilde">< img src={python}className="responsive-img"/></li>
                <li id="bilde">< img src={sql}className="responsive-img"/></li>
                <li id="bilde">< img src={firebase}className="responsive-img"/></li>
              </ul>
            </div>
          </div>

          <div  class="col s2 m10">
            <div class="card-panel  grey lighten-2">
              <i className="small material-icons">people</i><p className="boxTitle"> Project management</p>
              <ul>
                <li id="bilde">< img src={asana}className="responsive-img"/></li>
                <li id="bilde">< img src={scrum}className="responsive-img"/></li>
                <li id="bilde">< img src={github}className="responsive-img"/></li>
                <li id="bilde">< img src={git}className="responsive-img"/></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>


    )
  }
}
