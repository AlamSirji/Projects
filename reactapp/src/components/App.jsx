import React from "react";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
export default class App extends Component {
  state = {
    url: "https://picsum.photos/200", // use to generate random image of 200x200
  };
  render() {
    return (
      <React.Fragment>
        <h1>State Object</h1>
        <img src={this.state.url} />
      </React.Fragment>
    );
  }
}
