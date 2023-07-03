import React, { Component } from 'react'

export class NewsBox extends Component {
  render() {
    let {title,desc,imageLink,url}=this.props;
    return (
      <div className="card my-2 ">
        <img src={imageLink ? imageLink : "https://www.moroylab.org/wp-content/uploads/2018/05/news-2444778_640.jpg"} className="card-img-top" alt="news"/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{desc}</p>
          <a href={url} target="_blank" rel="noreferrer" className="btn btn-sm  btn-dark">read more...</a>
        </div>
      </div>
    )
  }
}

export default NewsBox
