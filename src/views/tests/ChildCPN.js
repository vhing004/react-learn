import { Component } from "react";

class ChildCPN extends Component {
  state = {
    show: false,
  };

  handleShowHide = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  handleDelete = (job) => {
    this.props.handleDeleteJob(job);
  };

  render() {
    // Dịnh nghĩa nhanh nhiều props
    let { name, age, arrJobs } = this.props;

    return (
      <>
        {this.state.show ? (
          <>
            <p>
              My name is {name} - {age} years old
            </p>
            <ul>
              {arrJobs.map((item) => (
                <li key={item.id}>
                  {item.title} - {item.salary}${" "}
                  <span onClick={() => this.handleDelete(item)}>&times;</span>
                </li>
              ))}
            </ul>
            <button onClick={this.handleShowHide}>Hide information</button>
          </>
        ) : (
          <button onClick={this.handleShowHide}>Show information</button>
        )}
      </>
    );
  }
}

export default ChildCPN;
// so sánh sự khác nhau giăux class component và function component
// class component có state, có lifecycle, có this
// function component không có state, không có lifecycle, không có this
// function component có thể sử dụng hook để quản lý state, lifecycle
// function component dùng khi không cần quản lý state, lifecycle
