import React from "react";
import Header from "./containers/header";
import Main from "./containers/main";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

class App extends React.Component {
  render() {
    return (<div>
      <Header />
      <Main />
    </div>);
  }
}

var app = document.getElementById('app');
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('app'));