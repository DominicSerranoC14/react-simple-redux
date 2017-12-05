import React, { Component } from 'react';
// import Clock from './components/Clock.js';
import PostList from './components/PostList.jsx';
import Store from './store';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PostList />
      </div>
    );
  }
}

export default App;
