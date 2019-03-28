import React, {Component} from 'react';
import '../styles.css';


const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const uuidv1 = require('uuid/v1');


class App extends React.Component{

    constructor() {
      super();

      this.state = {
        listofToDo: []
      }
    } 

    newTodo() {
        alert('New ToDo button clicked and todo created!');

        var newTodo = {
          id: uuidv1(),
          title: 'My Todo'
        }
    
        this.state.listofToDo.push(newTodo);
    
        this.setState({
          listofToDo: this.state.listofToDo
        });

    }

    render() {
        const {listofToDo} = this.state;
        return <div className="container center">
                  <h1 className="center title">My TODO App</h1>
                  <div className="flow-right controls">
                    <span>Item count: <span id="item-count">0</span></span>
                    <span>Unchecked count: <span id="unchecked-count">0</span></span>
                  </div>
                  <input type="text" ref="todoItem" placeholder="Enter Todo Item" required />
                  <button className="button center" onClick={() => this.newTodo()}>New TODO</button>
                  <ul id="todo-list" className="todo-list">
                      {
                      listofToDo.map(todo => {
                        return <li className={classNames.TODO_ITEM} key={todo.id}><p className={classNames.TODO_TEXT}>{todo.title}</p></li>
                      })
                    }
                  </ul>
              </div>
      }
}

export default App;