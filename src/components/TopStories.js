import React, { Component } from 'react'
import NewsCard from './NewsCard'

export default class TopStories extends Component {
    constructor() {
        super()
        this.state = {
            articles: [],
            loading: false
        }
    }
    async componentDidMount() {
        let url = "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=G0hi9JktPaMmV6i0GVcnNZXjoA4RXkQ9";
        let data = await fetch(url);
        let parsedData = await data.json()
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
                            {this.state.articles.map((e) => {
                                let imgUrl;
                                for (let i = 0; i < e.multimedia.length; i++) {
                                    if (i === 1) {
                                        imgUrl = e.multimedia[i].url;
                                    }
                                }
                                return <div className='col-md-4' style={{ padding: '10px' }} key={e.uri}>
                                    <NewsCard title={e.title} abstract={e.abstract} newsUrl={e.short_url} imgUrl={imgUrl} /></div>
                            })}
                        </div>
                    </div>}
            </>
        )
    }
}