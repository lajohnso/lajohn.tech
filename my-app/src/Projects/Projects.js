import React, { Component } from 'react';
import M from 'materialize-css';
import './Projects.css';


import fiskinfo from './FiskInfo.gif';
import todo from './todo.png';
import github from './github.svg';


export default class Projetcs extends Component {
  render() {
    return (


      <div className="Projects">
        <div id="projects" className="row">
          <br />
          <h3 id="black">Previous Projects</h3>
          <br />
          <br />
          <br />
          <div class="col s12 ">
          </div>
          <div class="row">
            <div class="col s6 offset-s1">
              <p id="p_title">FiskInfo - SINTEF Digital</p>
              <img id="FiskInfo"
                src={fiskinfo}
                className="project_img"
              />
              <br />
              <i id="visability" class="material-icons">visibility_off</i> Source code protected NDA


            </div>
            <div class="col s4">
              <div>
                <p id="abouttxt">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut dui at nunc lacinia condimentum eget ut risus. Mauris egestas dignissim rutrum. Duis sit amet suscipit turpis. Fusce dui ante, semper nec purus ac, varius rhoncus enim. In in pellentesque arcu, sit amet luctus dolor. Mauris at eleifend nisl. Integer eget condimentum augue. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                  Integer tempor orci est, eu mollis sem egestas nec. Proin eu scelerisque arcu. Donec vitae lobortis massa, id efficitur neque. Sed bibendum est enim, vel luctus sapien faucibus vel. Sed pharetra, dolor a viverra consequat, arcu mauris molestie mauris, sed placerat nibh odio ac nisi. Suspendisse nulla odio, efficitur eleifend facilisis consequat, accumsan ac risus. Donec tempor et felis vitae efficitur. Donec et mollis sapien. Aenean consequat ornare enim sed sodales. Nulla   tempor velit nibh, a tempus dui maximus sed. Nulla eget vestibulum mi, eu laoreet ligula.
                </p>
              </div>
            </div>
          </div>
          </div>


          <div class="col s12 ">
          </div>
          <div class="row">
            <div class="col s6 offset-s1">
              <p id="p_title">ToDo - Private Project</p>
              <img id="FiskInfo"
                src={todo}
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
            <div class="col s4">
              <div>
                <p id="abouttxt">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut dui at nunc lacinia condimentum eget ut risus. Mauris egestas dignissim rutrum. Duis sit amet suscipit turpis. Fusce dui ante, semper nec purus ac, varius rhoncus enim. In in pellentesque arcu, sit amet luctus dolor. Mauris at eleifend nisl. Integer eget condimentum augue. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                  Integer tempor orci est, eu mollis sem egestas nec. Proin eu scelerisque arcu. Donec vitae lobortis massa, id efficitur neque. Sed bibendum est enim, vel luctus sapien faucibus vel. Sed pharetra, dolor a viverra consequat, arcu mauris molestie mauris, sed placerat nibh odio ac nisi. Suspendisse nulla odio, efficitur eleifend facilisis consequat, accumsan ac risus. Donec tempor et felis vitae efficitur. Donec et mollis sapien. Aenean consequat ornare enim sed sodales. Nulla   tempor velit nibh, a tempus dui maximus sed. Nulla eget vestibulum mi, eu laoreet ligula.
                </p>
              </div>
            </div>
          </div>

        <div className="col12">
          <i id="up" className="medium material-icons"><a href="#logo">expand_less</a></i>
        </div>
      </div>


    )
  }
}
