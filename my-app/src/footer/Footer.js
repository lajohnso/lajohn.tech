import React, { Component } from 'react';
import M from 'materialize-css';
import './Footer.css'

export default class Projetcs extends Component {
  render() {
    return (
    <div className="Footer">
      <footer className="page-footer">
        <div class="footer-copyright">
          <div class="container">
            © 2019 Copyright reserved Lars-August Johnson
            <a class="grey-text text-lighten-4 right" href="#!"></a>
          </div>
        </div>
      </footer>
    </div>
    )
  }
}
