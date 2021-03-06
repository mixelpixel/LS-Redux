import React, { Component } from 'react';

// import TodoList from '../containers/TodoList'
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

import logo from '../art/logo.svg';
import '../css/App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <nav className="navbar">
          <h2>THE TRUNK OF A DOM TREE GROWS FROM THE <a href="https://youtu.be/v2f8kd1d278?t=7s">ROOT</a> OF THE PROJECT</h2>
          <h4>index.html >>> src/index.js >>> src/App.js</h4>
        </nav> */}
        <div className="App-header">
          <h3>Welcome to Lambda School's LS-Redux Project</h3>
          <p>prepare to have your MIND === BLOWN !!!</p>
          <img src={logo}
               className="App-logo"
               alt="logo" />
          <h3>THE TRUNK OF A DOM TREE GROWS FROM THE <a href="https://youtu.be/v2f8kd1d278?t=7s">ROOT</a> OF THE PROJECT</h3>
          <p>index.html >>> src/index.js >>> src/App.js</p>
        </div>
        {/* <TodoList /> */}
        <AddTodo />
        <VisibleTodoList />
      </div>
    );
  }
}

export default App;
