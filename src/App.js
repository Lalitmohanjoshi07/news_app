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
    let pageSize=5;
    return (
      <div>
        <Router>
          <Nav search={this.search}/>
          <Routes>
            <Route exact path='/' element={<NewsContainer key={'home'} pgsize={pageSize}  apiKey={this.apiKey} heading='Daily Top headlines' catagory=""/>}> </Route>
            <Route exact path='/entertainment' element={<NewsContainer key={'entertainment'} pgsize={pageSize} apiKey={this.apiKey} heading='Entertainment news' catagory="&category=entertainment"/>}> </Route>
            <Route exact path='/business' element={<NewsContainer key={'business'} pgsize={pageSize} apiKey={this.apiKey} heading='Buisness news' catagory="&category=business"/>}> </Route>
            <Route exact path='/sports' element={<NewsContainer key={'sports'} pgsize={pageSize} apiKey={this.apiKey} heading='Sports news' catagory="&category=sports"/>}> </Route>
            <Route exact path='/science' element={<NewsContainer key={'science'} pgsize={pageSize} apiKey={this.apiKey} heading='Science news' catagory="&category=science"/>}> </Route>
            <Route exact path='/general' element={<NewsContainer key={'general'} pgsize={pageSize} apiKey={this.apiKey} heading='General news' catagory="&category=general"/>}> </Route>
            <Route exact path='/technology' element={<NewsContainer key={'technology'} pgsize={pageSize} apiKey={this.apiKey} heading='Technology news' catagory="&category=technology"/>}> </Route>
            <Route exact path='/health' element={<NewsContainer key={'health'} pgsize={pageSize} apiKey={this.apiKey} heading='Health  news' catagory="&category=health"/>}> </Route>
            <Route exact path={`/custom`} element={<NewsContainer key={'custom'} pgsize={pageSize} apiKey={this.apiKey}country='' heading={this.state.access} topic="everything" q={`q=${this.state.access}&language=en`}/>}> </Route>
          </Routes>
        </Router>
      </div>
    )
  }
}