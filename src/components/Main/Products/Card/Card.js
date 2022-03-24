import { Component } from "react";

class Card extends Component {
   render() {
      const {alt, src, text, price} = this.props;
      return (
         <div className="products__card">
            <div className="products__card-img">
               <img src={src} alt={alt} />
            </div>
            <div className="products__card-text">
               {text}
            </div>
            <div className="products__card-price">{price}</div>
      </div>
      )
   }
}

export default Card;