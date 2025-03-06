import React from "react";

class Test extends React.Component {
  // State
  state = {
    name: "Vinh",
    old: 20,
    homwtown: "Bac Ninh",
  };
  handleName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  render() {
    return (
      <>
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => this.handleName(e)}
        />
        <h3>My name: {this.state.name}</h3>
        <p>My old: {this.state["old"]}</p>
        <p>My hometown: {this.state.homwtown}</p>
      </>
    );
  }
}

export default Test;
