import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class NewsBox extends Component {
  static defaultProps={
    date: "",
  }
  static propTypes={
    date : PropTypes.string,
  }

  getTime=(x)=>{
    let sec=(x-(x%1000))/1000
    let min=(sec-(sec%60))/60;
    if(min > 0){
      let hr = (min-(min%60))/60;
      if(hr > 0){
        let day= (hr-(hr % 24))/24;
        if(day > 0){
          let mo= (day - (day % 30))/30;
          if(mo > 0){
            let y = (mo- (mo % 12))/12;
            if(y>0){
              return y.toString()+"years";
            }
            return mo.toString()+"months"
          }
          return day.toString()+"days"
        }
        return hr.toString()+"hours"
      }
      return min.toString()+"minutes"
    }
    return sec.toString()+"seconds"
  }

  render() {
    let {title,desc,imageLink,url,date,source}=this.props;
    return (
      <div className="card my-2 ">
        <div style={{direction: 'rtl'}}>
          <span className="position-absolute top-1 badge rounded-pill bg-danger" style={{fontSize:'80%'}}>
          {source}
          </span>
          <img src={imageLink ? imageLink : "https://www.moroylab.org/wp-content/uploads/2018/05/news-2444778_640.jpg"} className="card-img-top" alt="news"/>
        </div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          {date && <sub>{this.getTime(new Date()-new Date(date))} ago</sub>}
          <p className="card-text">{desc}</p>
          <a href={url} target="_blank" rel="noreferrer" className="btn btn-sm  btn-dark">read more...</a>
        </div>
      </div>
    )
  }
}

export default NewsBox
