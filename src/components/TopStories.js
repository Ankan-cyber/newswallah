import React, { Component } from 'react'
import NewsCard from './NewsCard'

export default class TopStories extends Component {
    constructor() {
        super()
        this.state = {
            articles: [],
            page: 1,
            loading: false
        }
    }
    renderNews(start, end) {
        return this.state.articles.slice(start, end).map((e) => {
            let imgUrl;
            for (let i = 0; i < e.multimedia.length; i++) {
                if (i === 1) {
                    imgUrl = e.multimedia[i].url;
                }
            }
            return (
                <div className='col-md-4' style={{ padding: '10px' }} key={e.uri}>
                    <NewsCard title={e.title} abstract={e.abstract} newsUrl={e.short_url} imgUrl={imgUrl} />
                </div>
            );
        });
    }
    async componentDidMount() {
        let url = "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=G0hi9JktPaMmV6i0GVcnNZXjoA4RXkQ9";
        let data = await fetch(url);
        let parsedData = await data.json()
        // console.log(parsedData)
        this.setState({ articles: parsedData.results })
    }

    render() {
        return (
            <>
                {document.title = "News Wallah - Top Headlines"}
                {this.state.articles.length === 0 ? '' :

                    <div className="container my-3" style={{ padding: "4rem" }}>
                        <h2>News Wallah - Top Headlines</h2>
                        <div className="row my-3">
                            {
                                (() => {
                                    if (this.state.page === 1) {
                                        console.log(this.state.articles.length)
                                        return this.renderNews(0, 9)
                                    }
                                })()
                            }
                        </div>

                    </div>}
                <nav aria-label="Page navigation example" style={{padding:"1.5rem"}}>
                    <ul class="pagination justify-content-center">
                        <li class="page-item disabled">
                            <a class="page-link" href="#">Previous</a>
                        </li>
                        <li class="page-item active"><a class="page-link" href="#" onClick={this.setState({page:1})}>1</a></li>
                        <li class="page-item"><a class="page-link" href="#" onClick={this.setState({page:2})}>2</a></li>
                        <li class="page-item"><a class="page-link" href="#" onClick={this.setState({page:3})}>3</a></li>
                        <li class="page-item">
                            <a class="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
            </>
        )
    }
}

