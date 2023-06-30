import React, { Component } from 'react'
import NewsBox from './NewsBox'
// import PropTypes from 'prop-types'

export class NewsContainer extends Component {
//   static propTypes = {

//   }

  render() {
    return (
      <div className="container my-2">
        <div className="row">
          <div className="col-md-4">
            <NewsBox title="hello dosto"/>
          </div>
          <div className="col-md-4">
            <NewsBox title="hello dosto"/>
          </div>
          <div className="col-md-4">
            <NewsBox title="hello dosto"/>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsContainer
