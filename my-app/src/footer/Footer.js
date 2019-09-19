import React, { Component } from "react";
import "./Footer.css";

export default class Projetcs extends Component {
  render() {
    return (
      <footer className="page-footer">
        <div className="footer-copyright">
          <div className="container">
            © 2019 Copyright reserved Lars-August Johnson 👨‍💻
            <a className="grey-text text-lighten-4 right" href="{App}"></a>
          </div>
        </div>
      </footer>
    );
  }
}
