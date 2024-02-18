import React from "react";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
export default class App extends Component {
  details = {
    name: "ToDo App",
  };

  taskList = [
    {
      id: 1,
      task: "Update Backend Server of 160",
      reps: "SysAdmin Team",
      status: "Pending",
    },
    {
      id: 2,
      task: "Remove Backlogs and Temporariy Data",
      reps: "SysAdmin Team",
      status: "Done",
    },
    {
      id: 3,
      task: "Add New Server API by June 2024",
      reps: "Backend-developer S1",
      status: "Pending",
    },
  ];

  // cmnStyleObj = {
  //   margin: 5,
  //   padding: 5,
  // };

  state = {};

  handlerDelete = (taskId) => {
    // console.log(this.taskList.filter(this.checkTask(taskId)));
    // needs better delete operation
  };

  // checkTask(taskId) {
  //   return taskId;
  // }

  addTask = () => {
    this.setState({
      taskList: this.taskList.push({
        id: Math.floor(Math.random() * 10000),
        task: prompt("enter the task", "some random task ..."),
        reps: prompt("reps name : ", "some random reps."),
        status: "Pending",
      }),
    });
  };

  getStatusClass(status) {
    if (status == "Done") {
      return "bg-success";
    } else {
      return "bg-warning";
    }
  }

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
        <main className="m-2 p-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, atque
          cum? Repellendus ipsa optio ex sit quam numquam quas rem dicta, itaque
          debitis adipisci, nostrum libero cum quidem inventore quibusdam.
          <table className="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Task</th>
                <th scope="col">Reps.</th>
                <th scope="col">Status</th>
                <th scope="col">
                  <i
                    title="Add New Task"
                    className="fa fa-plus btn btn-success"
                    onClick={this.addTask}
                  ></i>
                </th>
              </tr>
            </thead>
            <tbody>
              {this.taskList.map((task) => (
                <tr key={task.id}>
                  <th>{task.id}</th>
                  <th>{task.task}</th>
                  <th>{task.reps}</th>
                  <th className={this.getStatusClass(task.status)}>
                    {task.status}
                  </th>
                  <th>
                    <i
                      title="Delete this task"
                      className="fa fa-trash btn btn-danger"
                      onClick={() => {
                        this.handlerDelete(task.id);
                      }}
                    ></i>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
        <footer className="bg-dark text-light m-2 p-2">
          Database last synced on : <span className="badge">{Date()}</span>
        </footer>
      </React.Fragment>
    );
  }
}
