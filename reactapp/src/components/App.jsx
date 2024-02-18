import React from "react";
import { Component } from "react";
import Tasks from "./Tasks";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
export default class App extends Component {
  details = {
    name: "ToDo App",
  };

  render() {
    return (
      <React.Fragment>
        <header>
          <nav className="m-2 p-2 navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">
              {this.details.name}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-item nav-link active" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
                <a className="nav-item nav-link" href="#">
                  Features
                </a>
                <a className="nav-item nav-link" href="#">
                  Pricing
                </a>
                <a className="nav-item nav-link disabled" href="#">
                  Disabled
                </a>
              </div>
            </div>
          </nav>
        </header>
        <main className="m-2 p-2 alert alert-info">
          Rreact JS uses Components based architecture hence components can be
          composed according to needs. here Tasks component are used twice to
          demonstrate independent state of different components.
          <hr />
          <h3>First Task List</h3>
          <Tasks />
          <h3>Second Task List</h3>
          <Tasks />
        </main>
        <footer className="bg-dark text-light m-2 p-2">
          Database last synced on : <span className="badge">{Date()}</span>
        </footer>
      </React.Fragment>
    );
  }
}
