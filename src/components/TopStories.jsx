import React, { Component } from 'react'
import NewsCard from './NewsCard'
import Spinner from './Spinner'

export default class TopStories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            articles: [],
            page: 1,
            articleStart: 0,
            articleEnd: 9,
            section: "Home",
            validArticles: 100
        }
    }
    handleNextClick = () => {
        if (this.state.page < Math.ceil(this.state.articles.length / 9)) {
            window.scrollTo(0, 0)
            this.setState({
                page: this.state.page + 1,
                articleStart: this.state.articleEnd,
                articleEnd: (this.state.articleEnd + 9)
            })
            this.renderNews(this.state.articleStart, this.state.articleEnd)
        }
    }
    handlePrevClick = () => {
        if (this.state.page <= Math.ceil(this.state.articles.length / 9)) {
            window.scrollTo(0, 0)
            this.setState({
                page: this.state.page - 1,
                articleStart: (this.state.articleStart - 9),
                articleEnd: (this.state.articleEnd - 9)
            })
            this.renderNews(this.state.articleStart, this.state.articleEnd)
        }

    }
    renderNews(start, end) {
        return this.state.articles.slice(start, end).map((e) => {
            if (e.title === "" || e.abstract === "" || e.section === "admin") {
                return "";
            }
            else {
                let imgUrl;
                if (e.multimedia != null) {
                    for (let i = 0; i < e.multimedia.length; i++) {
                        if (i === 1) {
                            imgUrl = e.multimedia[i].url;
                        }
                    }
                }
                let formattedDate = new Date(e.published_date).toLocaleString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric',
                    timeZone: 'America/New_York'
                });
                return (
                    <div className='col-md-4' style={{ padding: '10px' }} key={e.uri}>
                        <NewsCard title={e.title} abstract={e.abstract} newsUrl={e.short_url} imgUrl={imgUrl} author={e.byline} date={formattedDate} />
                    </div>
                );
            }
        });
    }

    async componentDidMount() {
        let url = `https://api.nytimes.com/svc/topstories/v2/${this.props.section}.json?api-key=G0hi9JktPaMmV6i0GVcnNZXjoA4RXkQ9`;
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({ articles: parsedData.results, section: parsedData.section })
        document.title = `News Wallah - ${this.props.section === "home" ? '' : this.state.section} Headlines`
    }

    render() {
        return (
            <>
                {document.title = `News Wallah - ${this.props.section === "home" ? '' : this.state.section} Headlines`}
                {this.state.articles.length === 0 ? <Spinner /> :
                    <div className="container my-3" style={{ padding: "4rem" }}>
                        <h2 id="heading" className="text-center">News Wallah - {this.props.section === "home" ? '' : this.state.section} Headlines</h2>
                        <div className="row my-3">
                            {
                                this.renderNews(this.state.articleStart, this.state.articleEnd)
                            }
                        </div>
                        <div className="container d-flex justify-content-between">
                            <button type="button" className="btn btn-outline-danger" onClick={this.handlePrevClick} disabled={this.state.page <= 1}> &larr; Previous</button>
                            <button type="button" className="btn btn-outline-danger" disabled={this.state.page === (Math.ceil(this.state.articles.length / 9)) || this.state.validArticles <= 9} onClick={this.handleNextClick}>Next &rarr;</button>
                        </div>
                    </div>}
            </>
        )
    }
}

