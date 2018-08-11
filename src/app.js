import React from "react";
import ReactDOM from "react-dom";

class HelloWorld extends React.Component {
  render() {
    return <h1>Hello World!!!</h1>;
  }
}

var app = document.getElementById('app');
ReactDOM.render(<HelloWorld />, app);

// console.log('hello');