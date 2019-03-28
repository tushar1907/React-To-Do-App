import React, {Component} from 'react';
import '../styles.css';

class App extends React.Component{

    newTodo() {
        alert('New ToDo button clicked and todo created!');
    }

    render() {
        return <div className="container center">
          <h1 className="center title">My TODO App</h1>
          <div className="flow-right controls">
            <span>Item count: <span id="item-count">0</span></span>
            <span>Unchecked count: <span id="unchecked-count">0</span></span>
          </div>
          <button className="button center" onClick={() => this.newTodo()}>New TODO</button>
          <ul id="todo-list" className="todo-list"></ul>
        </div>
      }
}

export default App;