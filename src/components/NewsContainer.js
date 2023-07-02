import React, { Component } from "react";
import NewsBox from "./NewsBox";
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from 'prop-types'


export class NewsContainer extends Component {
  static defaultProps = {
    country:'in',
    pgsize: 5,
  }
  static propTypes = {
    country: PropTypes.string,
    pgsize: PropTypes.number,
    catagory: PropTypes.string,
    apiKey: PropTypes.string.isRequired,
  }
  

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalres: 0,
    };
    // this.next = this.next.bind(this);
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catagory}&apiKey=${this.props.apiKey}&pageSize=${this.props.pgsize}&page=${this.state.page}`;
    let data = await fetch(url);
    let datalog = await data.json();
    this.setState({
      articles: datalog.articles,
      totalres: datalog.totalResults,
      loading: false,
    });
    // console.log("cdm", datalog);
  }



  //to add infinite scroll
  update = async () => {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catagory}&apiKey=${this.props.apiKey}&pageSize=${this.props.pgsize}&page=${this.state.page + 1}`;
      let data = await fetch(url);
      let datalog = await data.json();
      this.setState({
        articles: this.state.articles.concat(datalog.articles),
        page: this.state.page + 1,
      });
      // console.log("cdm", datalog);
  };

  render() {
    return (
      <div className="container my-2">
        <h1 className="my-3"><center>Samachar News : Daily top headlines</center></h1>

        {/* if the webpage is empty */}
        {this.state.loading && <center>loding.....</center>}

        {/* if the article have any news then only render this data*/}
        {(this.state.articles.length>0 || !this.state.loading)&& 
        /*added infinite scroll*/<InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.update}
          //condition for loading
          hasMore={this.state.articles.length!==this.state.totalres}
          loader={<p>Loading...</p>}
          endMessage={<center>you have reached the end of news.</center>}
        >
          <div className="row container">
            {this.state.articles && this.state.articles.map((element) => {
              return (
                <div key={element.url} className="col-md-4">
                  <NewsBox
                    title={element.title}
                    imageLink={element.urlToImage}
                    url={element.url}
                    desc={element.description}
                  />
                </div>
              );
            })}
          </div>
        </InfiniteScroll>}
        {/*infinite scroll ended */}
      </div>
    );
  }
}

export default NewsContainer;
