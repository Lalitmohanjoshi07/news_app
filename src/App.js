import './App.css';
import React, { Component } from 'react';
import Nav from './components/navbar';
import NewsContainer from './components/NewsContainer';
import {BrowserRouter as Router, 
  Route,
  Routes
} from 'react-router-dom';

export default class App extends Component {
  apiKey=process.env.REACT_APP_API_KEY;
  state={
    access:'naruto uzumaki'
  }
  search=(par)=>{
    this.setState({access: par});
    // console.log(this.state.access);
  }

  render() {
    return (
      <div>
        <Router>
          <Nav search={this.search}/>
          <Routes>
            <Route exact path='/' element={<NewsContainer key={'home'} pgsize={5} apiKey={this.apiKey} catagory=""/>}> </Route>
            <Route exact path='/entertainment' element={<NewsContainer key={'entertainment'} pgsize={5} apiKey={this.apiKey} catagory="&category=entertainment"/>}> </Route>
            <Route exact path='/business' element={<NewsContainer key={'business'} pgsize={5} apiKey={this.apiKey} catagory="&category=business"/>}> </Route>
            <Route exact path='/sports' element={<NewsContainer key={'sports'} pgsize={5} apiKey={this.apiKey} catagory="&category=sports"/>}> </Route>
            <Route exact path='/science' element={<NewsContainer key={'science'} pgsize={5} apiKey={this.apiKey} catagory="&category=science"/>}> </Route>
            <Route exact path='/general' element={<NewsContainer key={'general'} pgsize={5} apiKey={this.apiKey} catagory="&category=general"/>}> </Route>
            <Route exact path='/technology' element={<NewsContainer key={'technology'} pgsize={5} apiKey={this.apiKey} catagory="&category=technology"/>}> </Route>
            <Route exact path='/health' element={<NewsContainer key={'health'} pgsize={5} apiKey={this.apiKey} catagory="&category=health"/>}> </Route>
            <Route exact path={`/custom`} element={<NewsContainer key={'custom'} pgsize={5} apiKey={this.apiKey}country='' topic="everything" q={`q=${this.state.access}&language=en`}/>}> </Route>
          </Routes>
        </Router>
      </div>
    )
  }
}