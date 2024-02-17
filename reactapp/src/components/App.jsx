import React from "react";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
export default class App extends Component {
  state = {
    url: "https://picsum.photos/200", // use to generate random image of 200x200
  };
  styleObj = {
    fontSize: 20,
    color: "red",
    margin: 10,
    padding: 10,
    //fontSize: "20px"
  };
  render() {
    return (
      <React.Fragment>
        <h1 className="m-2 p-2">State Object</h1>
        <img className="m-2 p-2" src={this.state.url} />
        <p style={this.styleObj}>
          Custom styling with reactJS. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quia error consequuntur voluptatibus labore
          obcaecati repudiandae ullam fugiat alias illum eum, consequatur,
          incidunt sed iure suscipit eos consectetur molestiae? Nostrum, fugiat!
        </p>
      </React.Fragment>
    );
  }
}
