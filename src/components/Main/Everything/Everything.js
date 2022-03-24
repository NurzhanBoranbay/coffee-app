import { Component } from "react";
import AfterTitle from "../../AfterTitle/AfterTitle";
import './Everything.css'

class Everything extends Component {
   render() {
      return (
         <section className="everything">
            {/*<img src="main-bg.jpg" alt="Main Introduction Img" />*/}
            <div className="container">
               <div className="everything__title">
                  Everything You Love About Coffee
               </div>
               
               <AfterTitle src="after-title-white.png" nameClass="after-img" />

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