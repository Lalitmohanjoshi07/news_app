import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

export default class navbar extends Component {
  // static propTypes = {
    
  // }
  ch=''
  state={text:""}
  entry=(par)=>{
    this.setState({text: par.target.value})
    this.props.search(this.state.text);
    if(this.state.text!==''){
      this.ch='custom'
    }else{
      this.ch=''
    }
  }

  activeStatus=(parm)=>{
    document.getElementById('one').className='nav-link';
    document.getElementById('two').className='nav-link';
    document.getElementById('three').className='nav-link';
    document.getElementById('four').className='nav-link';
    document.getElementById('five').className='nav-link';
    document.getElementById('six').className='nav-link';
    document.getElementById('seven').className='nav-link';
    document.getElementById('eight').className='nav-link';
    document.getElementById(parm).className='nav-link active';
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <span className="navbar-brand h1 mb-0">SamacharNews</span>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link className="nav-link " id='one' onClick={()=>{this.activeStatus('one')}} aria-current="page" to="/">Home</Link>
                <Link className="nav-link " id='two' onClick={()=>{this.activeStatus('two')}} aria-current="page" to="/business">Business</Link>
                <Link className="nav-link " id='three' onClick={()=>{this.activeStatus('three')}} aria-current="page" to="/entertainment">Entertainment</Link>
                <Link className="nav-link " id='four' onClick={()=>{this.activeStatus('four')}} aria-current="page" to="/general">General</Link>
                <Link className="nav-link " id='five' onClick={()=>{this.activeStatus('five')}} aria-current="page" to="/health">Health</Link>
                <Link className="nav-link " id='six' onClick={()=>{this.activeStatus('six')}} aria-current="page" to="/science">Science</Link>
                <Link className="nav-link " id='seven' onClick={()=>{this.activeStatus('seven')}} aria-current="page" to="/sports">Sports</Link>
                <Link className="nav-link " id='eight' onClick={()=>{this.activeStatus('eight')}} aria-current="page" to="/technology">Technology</Link>
              </div>
            </div>
            <div className="d-flex">
              <input className="form-control me-2" type="text" value={this.state.text} onChange={this.entry} placeholder="Search" aria-label="Search"/>
              <Link className="btn btn-outline-success" to={`/${this.ch}`}>Search</Link>
            </div>
          </div>
        </nav>
       </div>
    )
  }
}
