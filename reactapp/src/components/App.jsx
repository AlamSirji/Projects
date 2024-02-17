import React from "react";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
export default class App extends Component {
  state = {
    counter: 2, // change the counter value to see the effects
    url: "https://picsum.photos/200", // use to generate random image of 200x200
    lists: ["Delhi", "Mumbai", "Chennai"],
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
        <h3 className={this.getBadgeClasses()} style={this.styleObj}>
          Counter : {this.formatCounter()}
        </h3>
        <hr />
        <img className="m-2 p-2" src={this.state.url} />
        <p style={{ color: "blue", padding: 10, margin: 10 }}>Inline Styling</p>
        <p style={this.styleObj}>
          Custom styling with reactJS. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quia error consequuntur voluptatibus labore
          obcaecati repudiandae ullam fugiat alias illum eum, consequatur,
          incidunt sed iure suscipit eos consectetur molestiae? Nostrum, fugiat!
        </p>
        <hr />
        <ul>
          {this.state.lists.map((item) => (
            <li>item</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
  getBadgeClasses() {
    return this.state.counter === 0 ? "text-secondary" : "text-primary";
  }
  formatCounter() {
    return this.state.counter === 0 ? "zero" : this.state.counter;
  }
}
