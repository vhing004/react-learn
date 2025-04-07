import React, { Component } from "react";

class Form extends Component {
  state = {
    first_name: "",
    last_name: "",
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
          <lable>Age</lable>
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
      </div>
    );
  }
}

export default Form;
