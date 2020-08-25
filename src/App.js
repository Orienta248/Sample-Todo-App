import React, { Component } from 'react';
import TodoItem from './TodoItem';
import todoData from './todoData';

class App extends Component {
  constructor() {
    super()
    this.state = {
      todo: todoData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodo = prevState.todo.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
      return {
        todo: updatedTodo
      }
    })
  }

  render() {
    const todoItems = this.state.todo.map(item => <TodoItem item={item} handleChange={this.handleChange} />)

    return(
      <div className="todo-list">
        {todoItems}
      </div>
    )
  }
}


export default App;
