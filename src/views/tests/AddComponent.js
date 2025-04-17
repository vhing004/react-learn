import React, { Component } from "react";
import ChildCPN from "./ChildCPN";

class Form extends Component {
  state = {
    title: "",
    salary: "",
  };

  handleTitle = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  handleSalary = (e) => {
    this.setState({
      salary: e.target.value,
    });
  };

  handleSublit = () => {
    console.log(this.state);

    if (!this.state.title || this.state.salary) {
      return;
    }

    this.props.addNewJob({
      id: Math.floor(Math.random() * 1000),
      title: this.state.title,
      salary: this.state.salary,
    });

    this.setState({
      title: "",
      salary: "",
    });
  };

  render() {
    return (
      <div>
        <form>
          <label>Title</label>
          <br />
          <input
            type="text"
            value={this.state.title}
            onChange={(e) => this.handleTitle(e)}
          />
          <br />
          <label>Salary</label>
          <br />
          <input
            type="text"
            value={this.state.salary}
            onChange={(e) => this.handleSalary(e)}
          />
          <br />
          <input
            type="button"
            value="Submit"
            onClick={() => this.handleSublit()}
          />
        </form>
      </div>
    );
  }
}

export default Form;
