import React, { Component } from "react";
import Header from './header';
import Card from './card';
export default class Home extends Component {
  render() {
    return (
      <div className="home">
        {Header()}
        <Card />


      </div>
    );
  }
}
