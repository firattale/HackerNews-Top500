import React, { Component } from "react";
import "./App.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CardList from "../CardList/CardList";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <CardList />
        <Footer />
      </div>
    );
  }
}

export default App;
