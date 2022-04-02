import { Component } from "react";

class ErrorBoudary extends Component {
   state = {
      error: false
   }

   static getDerivedStateFromError() {
      return { error: true }
   }

   render() {
      
      if (this.state.error) {
         return <h1>Что-то не так</h1>
      }

      return this.props.children;
   }
}

export default ErrorBoudary;