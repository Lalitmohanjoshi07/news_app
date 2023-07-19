import React, { Component } from "react";
import NewsBox from "./NewsBox";
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from 'prop-types'
const burl="http://localhost:5000/api/getNews";

export class NewsContainer extends Component {
  static defaultProps = {
    country:'&country=in',
    pgsize: 5,
    topic: "top-headlines",
    q:'',
    catagory:''
  }
  static propTypes = {
    country: PropTypes.string,
    pgsize: PropTypes.number,
    catagory: PropTypes.string,
    apiKey: PropTypes.string.isRequired,
    q: PropTypes.string,
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
  title=this.props
  
  async componentDidMount() {
    this.setTitle(this.props.heading);
    let url = `https://newsapi.org/v2/${this.props.topic}?${this.props.q}${this.props.country}${this.props.catagory}&sortBy=publishedAt&apiKey=${this.props.apiKey}&pageSize=${this.props.pgsize}&page=${this.state.page}`;
    const response = await fetch(burl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({url:url})
    });
    
    // let data = await fetch(url);
    let datalog = await response.json();//data.json();
    this.setState({
      articles: datalog.articles,
      totalres: datalog.totalResults,
      loading: false,
    });
    // console.log("cdm", datalog);
  }
  
  setTitle=(x)=>{
    document.title= `SamacharNews-${x}`
  }
  
  
  
  //to add infinite scroll
  update = async () => {
    let url = `https://newsapi.org/v2/${this.props.topic}?${this.props.q}${this.props.country}${this.props.catagory}&sortBy=publishedAt&apiKey=${this.props.apiKey}&pageSize=${this.props.pgsize}&page=${this.state.page + 1}`;
    
    const response = await fetch(burl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({url:url})
    });

    let datalog = await response.json();
    this.setState({
      articles: this.state.articles.concat(datalog.articles),
      page: this.state.page + 1,
    });
    // console.log("cdm", datalog);
  };
  
  render() {
    return (
      <div className="container my-2">
        <h1 className="my-3"><center style={{marginTop:"100px"}}>Samachar News : {this.props.heading}</center></h1>

        {/* if the webpage is empty */}
        {this.state.loading && <center>loding.....</center>}

        {/* if the article have any news then only render this data*/}
        {(this.state.articles.length>0 || !this.state.loading)&& 
        /*added infinite scroll*/<InfiniteScroll
          style={{display:"contents"}}
          dataLength={this.state.articles.length}
          next={this.update}
          //condition for loading
          hasMore={this.state.articles.length!==this.state.totalres}
          loader={<p>Loading...</p>}
          endMessage={<center>you have reached the end of news.</center>}
        >
          <div className="row ">
            {this.state.articles && this.state.articles.map((element) => {
              return (
                <div key={element.url} className="col-md-4">
                  <NewsBox
                    title={element.title}
                    imageLink={element.urlToImage}
                    url={element.url}
                    desc={element.description}
                    date={element.publishedAt}
                    source={element.source.name}
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
