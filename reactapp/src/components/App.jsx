import React from "react";
import { Component } from "react";
import Tasks from "./Tasks";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import Nav from "./common/Nav";
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
          <Nav totalTasks={this.state.taskList.length} />
        </header>
        <main className="m-2 p-2 alert alert-info">
          Rreact JS uses Components based architecture hence components can be
          composed according to needs. here Tasks component are used twice to
          demonstrate independent state of different components.
          <hr />
          {this.state.taskList.map((item) => (
            <Tasks
              key={item.id}
              onDelete={() => {
                this.deleteHandler(item.id);
              }}
              data={item}
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
