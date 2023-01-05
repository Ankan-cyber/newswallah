import React, { Component } from 'react'
import NewsCard from './NewsCard'

export default class TopStories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            articles: [],
            page: 1,
            maxPage: 1,
            articleStart: 0,
            articleEnd: 9,
            section : "Home",
            loading: false
        }

    }
    handleNextClick = () => {
        if (this.state.page < this.state.maxPage) {
            window.scrollTo(0, 0)
            this.setState({
                page: this.state.page + 1, 
                articleStart : this.state.articleEnd, 
                articleEnd : (this.state.articleEnd+9) 
            })
            this.renderNews(this.state.articleStart, this.state.articleEnd)
        }
    }
    handlePrevClick = () => {
        if(this.state.page <= this.state.maxPage){
            window.scrollTo(0, 0)
            this.setState({
                page : this.state.page - 1,
                articleStart : (this.state.articleStart-9),
                articleEnd : (this.state.articleEnd-9)
            })
            this.renderNews(this.state.articleStart, this.state.articleEnd)
        }
                
    }
    renderNews(start, end) {
        return this.state.articles.slice(start, end).map((e) => {
            if(e.title==="" || e.abstract===""){
                return "";
            }
            else{
            let imgUrl;
            if(e.multimedia!=null){
                for (let i = 0; i < e.multimedia.length; i++) {
                    if (i === 1) {
                        imgUrl = e.multimedia[i].url;
                    }
                }
            }
            return (
                <div className='col-md-4' style={{ padding: '10px' }} key={e.uri}>
                    <NewsCard title={e.title} abstract={e.abstract} newsUrl={e.short_url} imgUrl={imgUrl} />
                </div>
            );}
        });
    }
    async componentDidMount() {
        let url = `https://api.nytimes.com/svc/topstories/v2/${this.props.section}.json?api-key=G0hi9JktPaMmV6i0GVcnNZXjoA4RXkQ9`;
        let data = await fetch(url);
        let parsedData = await data.json()
        // console.log(parsedData)
        this.setState({ articles: parsedData.results, maxPage: Math.ceil(this.state.articles.length / 9), section: parsedData.section })
        console.log(this.state.articles)

    }

    render() {
        return (
            <>
                {document.title = `News Wallah - ${this.props.section==="home"?'':this.state.section} Headlines`}
                {this.state.articles.length === 0 ? '' :

                    <div className="container my-3" style={{ padding: "4rem" }}>
                        <h2>News Wallah - {this.props.section==="home"?'':this.state.section} Headlines</h2>
                        <div className="row my-3">
                            {
                                this.renderNews(this.state.articleStart, this.state.articleEnd)
                            }
                        </div>
                        <div className="container d-flex justify-content-between">
                            <button type="button" className="btn btn-outline-danger" onClick={this.handlePrevClick} disabled={this.state.page <= 1}> &larr; Previous</button>
                            <button type="button" className="btn btn-outline-danger" disabled={this.state.page===this.state.maxPage} onClick={this.handleNextClick}>Next &rarr;</button>
                        </div>
                    </div>}
            </>
        )
    }
}

