import React from "react";

class Test extends React.Component {
  // State
  state = {
    name: "reading book",
    setName: [],
    old: 20,
    homwtown: "Bac Ninh",
  };
  handleName = () => {
    this.setState({
      setName: [...this.state.setName, this.state.name],
      name: "",
    });
  };
  render() {
    return (
      <>
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button onClick={() => this.handleName()}>Add</button>
        <ul>
          {this.state.setName.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default Test;

// import { useState } from "react";

// function Test() {
//   const [name, setName] = useState("");
//   const [todo, setTodo] = useState([]);

//   const handleClick = () => {
//     setTodo([...todo, name]);
//   };

//   return (
//     <>
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <button onClick={() => handleClick()}>Add</button>
//       <ul>
//         {todo.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

// export default Test;
