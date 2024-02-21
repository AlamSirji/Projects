import React from "react";
import { Component } from "react";
export default class Tasks extends Component {
  render() {
    console.log("Tasks Component rendering...");
    const { data, onDelete } = this.props;
    return (
      <React.Fragment>
        <h3>
          {data.category} : {data.id}
        </h3>
        <span
          title="Remove TaskList completely"
          className="btn btn-sm btn-danger p-2 m-2"
          onClick={() => {
            onDelete(data.id);
          }}
        >
          <i className="fa fa-trash"></i>
        </span>
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
            {this.state.taskList.map((task) => (
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
      </React.Fragment>
    );
  }

  constructor() {
    super();
    console.log("Tasks component loaded");
  }

  componentDidMount() {
    console.log("Task Component mounted");
  }

  componentWillUnmount() {
    console.log("Task component is deleting..");
  }

  getRandomId() {
    return Math.floor(Math.random() * 10000);
  }

  state = {
    taskList: [
      {
        id: this.getRandomId(),
        task: "Update Backend Server of 160",
        reps: "SysAdmin Team",
        status: "Pending",
      },
      {
        id: this.getRandomId(),
        task: "Remove Backlogs and Temporariy Data",
        reps: "SysAdmin Team",
        status: "Done",
      },
      {
        id: this.getRandomId(),
        task: "Add New Server API by June 2024",
        reps: "Backend-developer S1",
        status: "Pending",
      },
    ],
  };

  handlerDelete = (taskId) => {
    console.log(taskId);
    const updatedTaskList = this.state.taskList.filter((c) => c.id !== taskId);
    this.setState({ taskList: updatedTaskList });
  };

  addTask = () => {
    alert("Bug to be fixed for addition");
  };

  getStatusClass(status) {
    if (status == "Done") {
      return "bg-success";
    } else {
      return "bg-warning";
    }
  }
}
