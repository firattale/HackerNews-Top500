import React, { Component } from "react";
import "./App.css";
import Header from "../../components/Header/Header";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p>Hacker News Top500 Stories</p>
      </div>
    );
  }
}

export default App;
