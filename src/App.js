import './App.css';

import React, { Component } from 'react';
import Nav from './components/navbar';
import NewsContainer from './components/NewsContainer';

export default class App extends Component {
  apiKey=process.env.REACT_APP_API_KEY;
  

  render() {
    return (
      <div>
        <Nav/>
        <NewsContainer pgsize={5} apiKey={this.apiKey} catagory="health"/>
      </div>
    )
  }
}