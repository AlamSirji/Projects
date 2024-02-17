import React from "react";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
export default class App extends Component {
  render() {
    // Normal case for objects
    const address = {
      street: "Meera Bagh",
      city: "Delhi",
      country: "India",
    };

    console.log(address.street);
    console.log(address.city);
    console.log(address.country);

    //Now object desctructuring goes like this way ...

    // const { street, city, country } = address;
    // console.log(street);
    // console.log(city);
    // console.log(country);

    // OR

    const { street: st, city: ci, country: cn } = address;
    console.log(st);
    console.log(ci);
    console.log(cn);

    return (
      <React.Fragment>
        <h1>Example of Object Desctrucuring</h1>
      </React.Fragment>
    );
  }
  randomNumber() {
    return Math.floor(Math.random() * 1000);
  }
}
