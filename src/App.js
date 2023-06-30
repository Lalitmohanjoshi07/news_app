import './App.css';

import React, { Component } from 'react';
import Nav from './components/navbar';
import NewsContainer from './components/NewsContainer';

export default class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <NewsContainer/>
      </div>
    )
  }
}