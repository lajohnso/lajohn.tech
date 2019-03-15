import React, { Component } from 'react';
import M from 'materialize-css';
import "./Skills.css"

import angular from '../images/angular.svg';
import python from '../images/python.jpg';
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


export default class Skills extends Component {
  render() {
    return (
    <div className="Skills">
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
    </div>


    )
  }
}
