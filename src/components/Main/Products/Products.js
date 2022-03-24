
import { Component } from 'react';
import './Products.css';
import Card from './Card/Card';

class Products extends Component {

   state = {
      cardsData: [
         {src: "products-img-1.jpg", alt: "Solimo Coffee", price: "10.73$", text: "Solimo Coffee Beans 2 kg"},
         {src: "products-img-2.jpg", alt: "Presto Coffee", price: "15.99$", text: "Presto Coffee Beans 1 kg"},
         {src: "products-img-3.jpg", alt: "AROMISTICO Coffee", price: "6.99$", text: "AROMISTICO Coffee 1 kg"}
      ]
   }

   render() {
      const elements = this.state.cardsData.map(item => {
         return <Card {...item} />
      });
      return (
         <section className="products">
            <div className="container">
               <div className="products__title">Our best</div>
               <div className="products__cards">
                  
                  {elements}
                  
               </div>
            </div>
         </section>
      )
   }
}

export default Products;