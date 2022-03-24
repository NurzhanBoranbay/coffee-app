import { Component } from "react";
import AboutUs from "./AboutUs/AboutUs";
import Everything from "./Everything/Everything";
import Products from "./Products/Products";

import './Main.css'



class Main extends Component {
   render() {
      return (
         <main className="main">
            <Everything />
            <AboutUs />
            <Products />
         </main>
      )
   }
}

export default Main;