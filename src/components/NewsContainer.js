import React, { useEffect, useState } from "react";
import NewsBox from "./NewsBox";
import InfiniteScroll from "react-infinite-scroll-component";
// import PropTypes from 'prop-types'
const burl =
    "http://192.168.69.1:5000/api/getNews" ||
  /*"http://localhost:5000/api/getNews"||*/ process.env.REACT_APP_SERVER_URL;

const NewsContainer = (props) => {
    const [state, setState] = useState({
        articles: [],
        loading: true,
        page: 0,
        totalres: 0,
    });

    //using use effect as componentDidMount
    useEffect(() => {
        setTitle(props.heading);
        update();
        // eslint-disable-next-line
    }, []);

    const setTitle = (x) => {
        document.title = `SamacharNews-${x}`;
    };

    //to add infinite scroll
    const update = async () => {
        let url = `https://newsapi.org/v2/${props.topic}?${props.q}${props.country
            }${props.catagory}&sortBy=publishedAt&apiKey=${props.apiKey}&pageSize=${props.pgsize
            }&page=${state.page + 1}`;

        const response = await fetch(burl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ url: url }),
        });

        let datalog = await response.json();
        setState({
            articles: state.articles.concat(datalog.articles),
            page: state.page + 1,
        });
    };

    return (
        <div className="container my-2">
            <h1 className="my-3">
                <center style={{ marginTop: "100px" }}>
                    Samachar News : {props.heading}
                </center>
            </h1>

            {/* if the webpage is empty */}
            {state.loading && <center>loding.....</center>}

            {/* if the article have any news then only render this data*/}
            {(state.articles.length > 0 || !state.loading) && (
        /*added infinite scroll*/ <InfiniteScroll
                    style={{ display: "contents" }}
                    dataLength={state.articles.length}
                    next={update}
                    //condition for loading
                    hasMore={state.articles.length !== state.totalres}
                    loader={<p>Loading...</p>}
                    endMessage={<center>you have reached the end of news.</center>}
                >
                    <div className="row ">
                        {state.articles &&
                            state.articles.map((element) => {
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
                </InfiniteScroll>
            )}
            {/*infinite scroll ended */}
        </div>
    );
};

NewsContainer.defaultProps = {
    country: "&country=in",
    pgsize: 5,
    topic: "top-headlines",
    q: "",
    catagory: "",
};

export default NewsContainer;
