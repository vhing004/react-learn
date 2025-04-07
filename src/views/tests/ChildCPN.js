import { Component } from "react";

class ChildCPN extends Component {
  state = {};
  render() {
    // Dịnh nghĩa nhanh nhiều props
    let { name, age } = this.props;

    return (
      <>
        <p>
          My nameis {name} - {age} years old
        </p>
      </>
    );
  }
}

export default ChildCPN;
