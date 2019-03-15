import React, { Component } from 'react';
import M from 'materialize-css';
import pbilde from '../images/P.Bilde.jpg';



export default class Projetcs extends Component {
  render() {
    return (

    /* lager en rad av 3 er 4/12 store */
    <div className="About">
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
</div>




    )

  }
}
