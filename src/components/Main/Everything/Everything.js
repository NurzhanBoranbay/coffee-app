import { Component } from "react";
import AfterTitle from "../../AfterTitle/AfterTitle";
import './Everything.css';
import imgWhite from '../../../images/after-title-white.png';

class Everything extends Component {
   render() {
      return (
         <section className="everything">
            <div className="container">
               <div className="everything__title">
                  Everything You Love About Coffee
               </div>
               
               <AfterTitle src={imgWhite} nameClass="after-img" />

               <div className="everything__text">
                  <div className="everything__text-1">We makes every day full of energy and taste</div>
                  <div className="everything__text-2">Want to try our beans?</div>
               </div>
               <div className="everything__more">
                  <a href="#">More</a>
               </div>
            </div>
         </section>
      )
   }
}

export default Everything;