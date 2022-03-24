import { Component } from "react";

import './Header.css';



class Header extends Component {
   render() {
      return (
         <header className="header">
            <nav className="nav">
               <ul className="nav__list">
                  <li className="list__item list__item-1">
                     <img src="logo.png" alt="Logotip"/>
                     <a href="#">Coffee house</a>
                  </li>
                  <li className="list__item">
                     <a href="#">Our coffee</a>
                  </li>
                  <li className="list__item">
                     <a href="#">For your pleasure</a>
                  </li>
               </ul>
            </nav>
         </header>
      )
   }
}

export default Header;