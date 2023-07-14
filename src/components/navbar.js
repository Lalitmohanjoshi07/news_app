import React, { Component } from "react";
// import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import ActiveStatus from "./location";

export default class navbar extends Component {
  // static propTypes = {

  // }
  ch = "";
  state = { text: "" };
  entry = (par) => {
    this.setState({ text: par.target.value });
    this.props.search(this.state.text);
    if (this.state.text !== "") {
      this.ch = "custom";
    } else {
      this.ch = "";
    }
  };

  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <span className="navbar-brand h1 mb-0">SamacharNews</span>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <ActiveStatus />
              </div>
            </div>
            <div className="d-flex">
              <input
                className="form-control me-2"
                type="text"
                value={this.state.text}
                onChange={this.entry}
                placeholder="Search"
                aria-label="Search"
              />
              <Link className="btn btn-outline-success" to={`/${this.ch}`}>
                Search
              </Link>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
