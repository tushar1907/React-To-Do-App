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
        listofToDo: [],
        todoItem: '',
        totalToDo: 0,
        uncheckedToDo: 0
      }
    } 

    newTodo() {
      event.preventDefault();

        var newTodo = {
          id: uuidv1(),
          title: this.refs.todoItem.value,
          isChecked: false
        }
    
        this.state.listofToDo.push(newTodo);
    
        this.setState({
          listofToDo: this.state.listofToDo,
          totalToDo: this.state.totalToDo + 1,
          uncheckedToDo: this.state.uncheckedToDo + 1
        });

        event.target.reset();
    }

    checkToDo(id) {
      for(var i=0; i<this.state.listofToDo.length; i++) {
        
        if(this.state.listofToDo[i].id === id) {
          this.state.listofToDo[i].isChecked = !this.state.listofToDo[i].isChecked;
  
          if(this.state.listofToDo[i].isChecked) {
            this.setState({
              listofToDo: this.state.listofToDo,
              uncheckedToDo: this.state.uncheckedToDo - 1,
            })
          } else {
            this.setState({
              listofToDo: this.state.listofToDo,
              uncheckedToDo: this.state.uncheckedToDo + 1,
            })
          }
  
          break;
        }
      }    
    }

    displayToDo() {
      var items;
  
      if(this.state.listofToDo.length > 0) {
        items = this.state.listofToDo.map(todo => {
          return <li className={classNames.TODO_ITEM} key={todo.id}>
          <input type="checkbox" ref="checkItem" className={classNames.TODO_CHECKBOX} onChange={() => this.checkToDo(todo.id)} />
          <span className={classNames.TODO_TEXT}>{todo.title}</span>
          <button className={classNames.TODO_DELETE} onClick={() => this.deleteToDo(todo.id)}>DELETE TODO</button>
          </li>
        });
      } else {
        items = <p className="align-center">Please add todos</p>
      }
  
      return items;
    }

    deleteToDo(id) {
      for(var i=0; i<this.state.listofToDo.length; i++) {
        if(this.state.listofToDo[i].id === id) {
          if(this.state.listofToDo[i].isChecked) {
            this.setState({
              listofToDo: this.state.listofToDo,
              totalToDo: this.state.totalToDo - 1
            })
          } else {
            this.setState({
              listofToDo: this.state.listofToDo,
              totalToDo: this.state.totalToDo - 1,
              uncheckedToDo: this.state.uncheckedToDo - 1
            })
          }              
  
          this.state.listofToDo.splice(i, 1);      
          break;
        }
      }
    }

    render() {
        const {listofToDo, totalToDo, uncheckedToDo} = this.state;
        return <div className="container center">
                  <h1 className="center title">My TODO App</h1>
                  <div className="flow-right controls">
                  <span>Item count: <span id="item-count">{totalToDo}</span></span>
                  <span>Unchecked count: <span id="unchecked-count">{uncheckedToDo}</span></span>
                  </div>
                  <form className="form-elements" onSubmit={this.newTodo.bind(this)}>
                    <input type="text" ref="todoItem" placeholder="Enter Todo Item" required />
                    <input type="submit" value="New TODO" className="button center" />
                  </form>
                  <ul id="todo-list" className="todo-list">
                      {
                      this.displayToDo()
                    }
                  </ul>
              </div>
      }
}

export default App;