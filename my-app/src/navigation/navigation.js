import React,{Component} from 'react';
import M from 'materialize-css';
import "./navigation.css"
import laJohnLogo from '../images/LaJohnLogo.png';

export default class Projetcs extends Component {
  render() {
    return (

    <div className="navigation">
      <nav className="nav-wrapper hide-on-med-and-down">
        <div className="container">
          <ul className="right hide-on-med-and-down">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
        </div>
      </nav>
    </div>
     )
  }
}

{/*utforsker potensielle menyfunskjoner*/}
{/*
  constructor(props) {
          super(props);

          this.state = {};

          this.handleScroll = this.handleScroll.bind(this);
      }

      handleScroll() {
          this.setState({scroll: window.scrollY});
      }

    componentDidMount() {
          const el = document.querySelector('nav');
          this.setState({top: el.offsetTop, height: el.offsetHeight});
          window.addEventListener('scroll', this.handleScroll);
      }

    componentDidUpdate() {
          this.state.scroll > this.state.top ?
              document.body.style.paddingTop = `${this.state.height}px` :
              document.body.style.paddingTop = 0;
      }
    />*/}
