import React, { Component } from "react";
import ChildCPN from "./ChildCPN";

class Form extends Component {
  state = {
    first_name: "",
    last_name: "",
    arrJobs: [
      { id: 1, title: "Dev", salary: "500" },
      { id: 2, title: "Tester", salary: "400" },
      { id: 3, title: "Manager", salary: "600" },
    ],
  };

  handleFirstName = (e) => {
    this.setState({
      first_name: e.target.value,
    });
  };

  handleLastName = (e) => {
    this.setState({
      last_name: e.target.value,
    });
  };

  handleSublit = () => {
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <form>
          <lable>Name</lable>
          <br />
          <input
            type="text"
            value={this.state.first_name}
            onChange={(e) => this.handleFirstName(e)}
          />
          <br />
          <label>Age</label>
          <br />
          <input
            type="text"
            value={this.state.last_name}
            onChange={(e) => this.handleLastName(e)}
          />
          <br />
          <input
            type="button"
            value="Submit"
            onClick={() => this.handleSublit()}
          />
        </form>

        {/* PROPS */}
        <ChildCPN name={"Huu Vinh"} age={25} arrJobs={this.state.arrJobs} />
      </div>
    );
  }
}

export default Form;
