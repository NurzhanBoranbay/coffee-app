
import { Component } from 'react';
import './Products.css';
import Card from './Card/Card';
import solimo from '../../../images/products-img-1.jpg';
import presto from '../../../images/products-img-2.jpg';
import aromistico from '../../../images/products-img-3.jpg';

class Products extends Component {

   state = {
      cardsData: [
         {src: solimo, alt: "Solimo Coffee", price: "10.73$", text: "Solimo Coffee Beans 2 kg", id: 1},
         {src: presto, alt: "Presto Coffee", price: "15.99$", text: "Presto Coffee Beans 1 kg", id: 2},
         {src: aromistico, alt: "AROMISTICO Coffee", price: "6.99$", text: "AROMISTICO Coffee 1 kg", id: 3}
      ]
   }

   render() {
      const elements = this.state.cardsData.map(item => {
         return <Card key={item.id.toString()} {...item} />
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