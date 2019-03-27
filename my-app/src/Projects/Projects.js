import React, { Component } from 'react';
import M from 'materialize-css';
import './Projects.css';


import fiskinfo from '../images/FiskInfo.gif';
import todo from '../images/todo.png';
import github from '../images/github.svg';
import posicom from '../images/posicom.png';
import portfolio from '../images/portfolio.png';
import weather from '../images/weather.png';


export default class Projetcs extends Component {
  render() {
    return (

      <div className="Projects">
        <div id="projects" className="">
          <br />
          <h3 id="titles">Previous projects</h3>
          <div className="col s12 ">
          </div>
          <div id="aboutProject" className="row">
            <div class="col s12 m12 l6 offset-l1">
              <p id="p_title">FiskInfo - SINTEF Digital</p>
              <img id="ProjectImg"
                src={fiskinfo}
                className="project_img"
              />
              <br />
              <i id="visability" class="material-icons">visibility_off</i> Source code protected by NDA


            </div>
            <div className="col s8 m8 l4 offset-s2 offset-m2">
              <div className="textContainer">
                <p id="abouttxt">
                  My bachelor thesis project is called FiskInfo. Through the course IT2901 a group of seven students were hired by SINTEF Digital to develop the application FiskInfo. The application’s purpose is to aggregate, gather and display useful information for the fishing industry using coordinated views to connect the data of graphs and maps. The project delivered a functional proof of concept build with development quality.
                </p>
              </div>
            </div>
          </div>
          <hr className="pageSep" />
          <div id="aboutProject" class="row">
            <div class="col s12 m12 l6 offset-l1">
              <p id="p_title"> My Portfilio (This page)</p>
              <img id="ProjectImg"
                src={portfolio}
                className="project_img"
              />
              <br />
              <i id="visability" class="material-icons">visibility</i> Source code available
              <br />
              <a target="_blank"
                href="https://github.com/lajohnso/lajohn.tech"
                className= "floating pulse">
                <img id="tiny"
                  src={github}
                  className=""
                  >
                </img>
              </a>

            </div>
            <div className="col s8 m8 l4 offset-s2 offset-m2">
              <div>
                <p id="abouttxt">
                  This project was created to present my previous work as a web developer. It is a responsive website that uses the grid from Materilize.css to ensure a smooth fit to any screen size. This site was created with ReactJS and it is hosted through Netlify. Visit my GitHub to have a closer look at my way of working, and the source code of this project.
                </p>
              </div>
            </div>
          </div>
          <hr className="pageSep" />
          <div id="aboutProject" class="row">
            <div class="col s12 m6 l6 offset-l1 offset-m3">
              <p id="p_title">Posicom.no</p>
              <img id="ProjectImg"
                src={posicom}
                className="project_img"
              />
              <br />
              <i id="visability" class="material-icons">visibility_off</i> Source code private
            </div>

            <div class="col s8 m8 l4 offset-s2 offset-m2">
              <div>
                <p id="abouttxt">
                  I have created the website for Posicom AS. In 2017 I had just finished the first year of my computer science education, which led me to my first web development project. Posicom AS needed to update their website, which was outdated. They asked me to delelop in Wordpress, to limit maintaince costs. In this project I got experience with customer-client communication, wordpress, php and more.
                </p>
              </div>
            </div>
          </div>
          <hr className="pageSep" />
          <div id="aboutProject"  class="row">
            <div class="col s12 m6 l6 offset-l1 offset-m3">
              <p id="p_title">Weather application - Private Project</p>
              <img id="ProjectImg"
                src={weather}
                className="project_img"
              />
              <br />
              <i id="visability" class="material-icons">visibility</i> Source code available
              <br />
              <a target="_blank"
                href="https://github.com/lajohnso/lajohn.tech"
                className= "floating pulse">
                <img id="tiny"
                  src={github}
                  className=""
                  >
                </img>
              </a>
            </div>
            <div class="col s8 m8 l4 offset-s2 offset-m2">
              <div className="adjust">
                <p id="abouttxt">
                  The project "Weather application" was all about learning how to communicate with an external API. In this case, I collected the data from
                   <a id="link"
                  href="https://wwww.openweathermap.org"
                   target="_blank">
                  openweathermap.org
                  </a>
                  by using a personal API key. In my project I converted the data to json objects. Inspiration from github user hamza-mirza.
                </p>
                <p id="abouttxt">Relevant technologies used are ReactJS, API, json.</p>
              </div>
            </div>
          </div>
        </div>

        <div id= "upwards" className="col1 offset s11">
          <i id="up" className="medium material-icons"><a href="#App">expand_less</a></i>
        </div>
      </div>


    )
  }
}
