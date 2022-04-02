import { Component } from 'react';
import ReactDOM from 'react-dom'

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Hello from '../Hello/Hello';
import ErrorBoudary from '../ErrorBoundary/ErrorBoundary';

import './App.css';

class App extends Component {

   render() {

      return (
         <div className="App">
            <HelloPortal>
               <Hello />
            </HelloPortal>
            <Header/>
            <ErrorBoudary>
               <Main />
            </ErrorBoudary>
            <Footer />
         </div>
      );
   }
}

class HelloPortal extends Component{
   el = document.createElement('div');
      
   componentDidMount() {
      document.body.append(this.el);
   }

   componentWillUnmount() {
      document.body.remove(this.el);
   }

   render() {   
      return ReactDOM.createPortal(this.props.children, this.el)
   }
   
}

export default App;
