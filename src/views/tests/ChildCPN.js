import { Component } from "react";

class ChildCPN extends Component {
  state = {};
  render() {
    // Dịnh nghĩa nhanh nhiều props
    let { name, age, arrJobs } = this.props;

    return (
      <>
        <p>
          My nameis {name} - {age} years old
        </p>
        <ul>
          {arrJobs.map((item) => (
            <li key={item.id}>
              {item.title} - {item.salary} $
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default ChildCPN;
