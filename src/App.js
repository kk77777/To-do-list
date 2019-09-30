import React from "react";
import logo from "./to-do.svg";
import "./App.css";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: []
    }
  }


  addItem(todo) {
    if (todo !== "") {
      const newItem = {
        id: Date.now(),
        value: todo,
        isDone: false
      };
      const list = [...this.state.list];
      list.push(newItem);
      this.setState({
        list: list,
        newItem: ""
      });

    }
  }

  deleteItem(id) {
    const list = [...this.state.list];
    const changedlist = list.filter(item => item.id !== id);
    this.setState({ list: changedlist })

  }

  updateinput(input) {
    this.setState({ newItem: input });
  }

  render() {
    return (
      <div className="">
        <img src={logo} className="image" width="100" height="100" alt="" />
        <h1 className="app-title">To Do List</h1>
        <p className="add-item">Add an item...</p>
        <div className="container">
          <input type="text"
            className="input-text"
            placeholder="What to Do?"
            required
            value={this.state.newItem}
            onChange={e => this.updateinput(e.target.value)}
          />
          <button className="add-btn"
            onClick={() => this.addItem(this.state.newItem)}
            disabled={!this.state.newItem.length}
          >+</button>

          <div className="list">
            <ul className="ullist">
              {this.state.list.map(item => {
                return (
                  <li key={item.id}>
                    <input type="checkbox" name="isDone" id="" defaultChecked={item.isDone} />
                    {item.value}
                    <button className="del-btn"
                      onClick={() => this.deleteItem(item.id)}
                    >X</button>

                  </li>
                )
              })}
            </ul>
          </div>

        </div>
        <footer>Made and designed by kk</footer>
      </div>
    )
  }
}

export default App;