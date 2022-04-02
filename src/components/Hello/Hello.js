import React, { Component } from 'react';
import './Hello.css';

class Hello extends Component {

   constructor(props) {
      super(props);
      this.state = {
         isHelloShow: false
      }

      this.helloRef = React.createRef();
   }

   componentDidMount() {
      this.showHello();
      this.hideHello();
      this.removeHello = setTimeout(() => {
         this.helloRef.current.remove()
      }, 10000);
   }

   componentWillUnmount() {
      clearTimeout(this.removeHello);
   }

   showHello = () => {
      this.showHelloId = setTimeout(() => {
         this.helloRef.current.classList.add('show');
      }, 3000)
      this.setState(() => ({
         isHelloShow: true
      }))
   }

   hideHello = () => {
      this.hideHelloId = setTimeout(() => {
         this.helloRef.current.classList.remove('show');
      }, 7000)
   }

   render() {

      return (
         <div ref={this.helloRef} className='hello-wrapper'> 
            <div className="hello">
               <div className="hello-meassage">
                  <p>We are glad to see you on our website</p>
               </div>
            </div>
         </div>
      )
   }
}

export default Hello;