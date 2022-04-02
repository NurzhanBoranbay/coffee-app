import { Component } from "react";
import Navigation from "../Navigation/Navigation";
import logo from '../../images/logo.png';

import './Header.css';

class Header extends Component {
   render() {
      return (
         <header className="header">
            <Navigation src={logo} color="white"/>
         </header>
      )
   }
}

export default Header;