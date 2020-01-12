import React from 'react';
import List from './components/List'
import Input from './components/Input'
// import './App.css';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      todos: ['eat', 'sleep', 'coding']
    }
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(todo){
    const todos = this.state.todos
    todos.unshift(todo)
    this.setState({
      todos
    })
  }

  render() {
    const todos = this.state.todos
    return (
      <div className="App">
        <h1>Simple TODO List</h1>
        <Input counts = {todos.length+1} addTodo = {this.addTodo}/>
        <List todos={todos} />
      </div>
    );
  }
}

export default App;
