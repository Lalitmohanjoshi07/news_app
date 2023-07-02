import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export default class navbar extends Component {
  // static propTypes = {
    
  // }

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
                <a className="nav-link active" aria-current="page" href="/">Home</a>
                <a className="nav-link active" aria-current="page" href="/">business</a>
                <a className="nav-link active" aria-current="page" href="/">entertainment</a>
                <a className="nav-link active" aria-current="page" href="/">general</a>
                <a className="nav-link active" aria-current="page" href="/">health</a>
                <a className="nav-link active" aria-current="page" href="/">science</a>
                <a className="nav-link active" aria-current="page" href="/">sports</a>
                <a className="nav-link active" aria-current="page" href="/">technology</a>
              </div>
            </div>
          </div>
        </nav>
       </div>
    )
  }
}
