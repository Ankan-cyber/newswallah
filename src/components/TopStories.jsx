import React, { useState, useEffect } from 'react'
import NewsCard from './NewsCard'
import Spinner from './Spinner'

function TopStories(props) {
    const [articles, setArticles] = useState([])
    const [page, setPage] = useState(1)
    const [articleStart, setArticleStart] = useState(0)
    const [articleEnd, setArticleEnd] = useState(9)
    const [section, setSection] = useState("Home")

    const handleNextClick = () => {
        if (page < Math.ceil(articles.length / 9)) {
            setPage(page + 1)
            setArticleStart(articleEnd)
            setArticleEnd(articleEnd + 9)
            renderNews(articleStart, articleEnd)
            setTimeout(() => {
                window.scrollTo(0, 0)
            }, 100);
        }
    }
    const handlePrevClick = () => {
        if (page <= Math.ceil(articles.length / 9)) {
            setPage(page - 1)
            setArticleStart(articleStart - 9)
            setArticleEnd(articleEnd - 9)
            renderNews(articleStart, articleEnd)
            setTimeout(() => {
                window.scrollTo(0, 0)
            }, 100);
        }

    }

    const renderNews = (start, end) => {
        return articles.slice(start, end).map((e) => {
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

    useEffect(() => {
        document.title = `${props.section === "home" ? '' : section} Headlines - News Wallah`
        async function fetchData() {
            try {
                let url = `https://api.nytimes.com/svc/topstories/v2/${props.section}.json?api-key=${props.apiKey}`;
                let data = await fetch(url);
                let parsedData = await data.json()
                setArticles(parsedData.results)
                setSection(parsedData.section)
                document.title = `News Wallah - ${props.section === "home" ? '' : section} Headlines`
            }
            catch (error) {
                console.log(error)
            }
        }
        fetchData();
    }, [props.apiKey, props.section, section]);


    return (
        <>
            {articles.length === 0 ? <Spinner /> :
                <div className="container my-3" style={{ padding: "4rem" }}>
                    <h2 id="heading" className="text-center">News Wallah - {props.section === "home" ? '' : section} Headlines</h2>
                    <div className="row my-3">
                        {
                            renderNews(articleStart, articleEnd)
                        }
                    </div>
                    <div className="container d-flex justify-content-between">
                        <button type="button" className="btn btn-outline-danger" onClick={handlePrevClick} disabled={page <= 1}> &larr; Previous</button>
                        <button type="button" className="btn btn-outline-danger" disabled={page === (Math.ceil(articles.length / 9))} onClick={handleNextClick}>Next &rarr;</button>
                    </div>
                </div>}
        </>
    )
}

export default TopStories
