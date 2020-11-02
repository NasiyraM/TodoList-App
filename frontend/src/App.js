import React, {Component} from 'react';
import Todos from './Todos';
import AddTodos from './AddTodos';

class App extends Component{
    state={
      'todos':[
              {'name':'Learn React', 'id': 0},
              {'name':'Master Regular Expressions', 'id': 1},
              {'name':'Learn Material-UI Framework', 'id': 2}
            ]
    }
    addTodos=(newTodo)=>{
      newTodo.id=this.state.todos[this.state.todos.length-1].id+1;
      let todos=[...this.state.todos,newTodo]
      this.setState({
        todos: todos
      })
    }
    deleteTodos=(id)=>{
      let todos=this.state.todos.filter(todo=>{
        return todo.id!==id;
      })
      this.setState({
        todos: todos
      })
    }
    render(){
      return(
        <div>
          <h1>To-do list app using React</h1>
            <AddTodos  addTodos={this.addTodos}></AddTodos>
            <Todos deleteTodos={this.deleteTodos} todos={this.state.todos}></Todos>
          </div>
        
      )
    }
}

export default App;