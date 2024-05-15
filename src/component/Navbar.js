import React, { Component } from "react";
import logo from "../Images/Logo.png";
import "./Navbar.css";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

class Navbar extends Component {
  state={clicked:false};
  handleClick=()=>{
    this.setState({clicked:!this.state.clicked})
  }
  render(){
  return (
    <div>
      <nav>
        <a href="/" className="nav-logo" target="_blank">
          <img  src={logo} alt="" />
        </a>
        <div>
          <ul id="navbar" className={this.state.clicked?"#navbar active":"#navbar"}>
            <li>
              <a className="active" href="/" >Home</a>
            </li>
            <li>
              <a href="/financing" >Financing</a>
            </li>
            <li>
              <a href="/purchasing">Purchasing</a>
            </li>
            <li>
              <a href="/contract">Selling</a>
            </li>
            <li>
              <a href="/repair">Repair</a>
            </li>
            <li>
              <a href="/insurance">Insurance</a>
            </li>
            <li>
              <a href="/network">Networks</a>
            </li>
            <li>
              <a href="/login"target="_blank">Login</a>
            </li>
          </ul>
        </div>
        <div id="mobile" onClick={this.handleClick}>
          <i id="bar">{this.state.clicked?<CloseIcon/>:<MenuIcon/>}</i>
        </div>
      </nav>
    </div>
  );
}
}

export default Navbar;
