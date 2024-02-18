import React from "react";
import { Component } from "react";
export default class Tasks extends Component {
  render() {
    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }

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

  handlerDelete = (taskId) => {
    alert("under development");
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
}
