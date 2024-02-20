import React from "react";
import { Component } from "react";
import Tasks from "./Tasks";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
export default class App extends Component {
  state = {
    name: "ToDo App",
    taskList: [
      {
        id: this.getRandomId(),
        category: "Main Task Table",
      },
      {
        id: this.getRandomId(),
        category: "Temp TT",
      },
      {
        id: this.getRandomId(),
        category: "Misc Entry",
      },
    ],
  };

  getRandomId() {
    return Math.floor(Math.random() * 10000);
  }

  deleteHandler = (itemId) => {
    console.log(this.state.taskList);
    console.log("I will delete from the app section : " + itemId);
    const updatedTaskList = this.state.taskList.filter((c) => c.id !== itemId);
    console.log(updatedTaskList);
    this.setState({ taskList: updatedTaskList });
  };

  render() {
    return (
      <React.Fragment>
        <header>
          <nav className="m-2 p-2 navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">
              {this.state.name}
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
          {this.state.taskList.map((item) => (
            <Tasks
              key={item.id}
              value={item.category}
              id={item.id}
              onDelete={() => {
                this.deleteHandler(item.id);
              }}
            />
          ))}
        </main>
        <footer className="bg-dark text-light m-2 p-2">
          Database last synced on : <span className="badge">{Date()}</span>
        </footer>
      </React.Fragment>
    );
  }
}
