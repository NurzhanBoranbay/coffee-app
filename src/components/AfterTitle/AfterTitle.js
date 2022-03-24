import { Component } from "react";
import './AfterTitle.css';

class AfterTitle extends Component {
   render() {
      const {src, nameClass} = this.props;
      return (
         <div className={nameClass}>
            <span className="after-1"></span>
            <img src={src} alt="" />
            <span className="after-2"></span>
         </div>
      )
   }
}

export default AfterTitle;