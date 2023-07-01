import React, { Component } from 'react'
import NewsBox from './NewsBox'
// import PropTypes from 'prop-types'

export class NewsContainer extends Component {
//   static propTypes = {

//   }

  constructor(){
    super();
    this.state = {
      articles: [],
      loading: true
    }
  }

  async componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=8fca590d29ea447a93cb07e00913f768&pageSize=100";
    let data = await fetch(url);
    let datalog = await data.json();
    this.setState({articles : datalog.articles})
    console.log("cdm",datalog)
  }
  render() {
    return (
      <div className="container my-2">
        <div className="row">
          {this.state.articles.map((element)=>{
            return (
              <div key={element.url} className="col-md-4">
                <NewsBox title={element.title} imageLink={element.urlToImage} url={element.url} desc={element.description} />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default NewsContainer
