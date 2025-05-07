import React, { Component } from "react";
import AddComponent from "./AddComponent";
import ChildCPN from "./ChildCPN";

class Form extends Component {
  state = {
    arrJobs: [
      { id: 1, title: "Dev", salary: "500" },
      { id: 2, title: "Tester", salary: "400" },
      { id: 3, title: "Manager", salary: "600" },
    ],
  };

  addNewJob = (job) => {
    this.setState({
      arrJobs: [...this.state.arrJobs, job],
    });
  };

  handleDeleteJob = (item) => {
    let currentJob = this.state.arrJobs;
    currentJob= currentJob.filter((job) => job.id !== item.id);
    this.setState({
      arrJobs: currentJob,
    });
  }

  render() {
    return (
      <div>
        <AddComponent addNewJob={this.addNewJob} />
        <ChildCPN arrJobs={this.state.arrJobs} handleDeleteJob={this.handleDeleteJob} />
      </div>
    );
  }
}

export default Form;
