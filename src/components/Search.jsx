import React, { useState, useEffect } from 'react'
import Spinner from './Spinner';
import NewsCard from './NewsCard';
import { useNavigate } from 'react-router-dom';

const Search = (props) => {
    const queryParameters = new URLSearchParams(window.location.search)
    const [articles, setarticles] = useState([])
    const [query] = useState(queryParameters.get("query"))
    const navigate = useNavigate()
    document.title = `${query} - News Wallah`

    useEffect(() => {
        if (query == null || query.length === 0) {
            navigate('/')
        }
        else {
            (async () => {
                let url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${props.apiKey}`;
                let data = await fetch(url);
                let parsedData = await data.json();
                setarticles(parsedData.response.docs);
            })();
        }
        //eslint-disable-next-line
    }, [query])


    const renderNews = () => {
        return articles.map((e) => {
            if (e.title === "" || e.abstract === "" || e.section === "admin") {
                return "";
            }
            else {
                let imgUrl;
                if (e.multimedia != null) {
                    for (let i = 0; i < e.multimedia.length; i++) {
                        if (i === 1) {
                            imgUrl = `https://nytimes.com/${e.multimedia[i].url}`;
                        }
                    }
                }
                let formattedDate = new Date(e.pub_date).toLocaleString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric',
                    timeZone: 'America/New_York'
                });
                return (
                    <div className='col-md-4' style={{ padding: '10px' }} key={e.uri}>
                        <NewsCard title={e.headline.main} abstract={e.abstract} newsUrl={e.web_url} author={e.byline.original} date={formattedDate} imgUrl={imgUrl} />
                    </div>
                );
            }
        })
    }

    return (
        <>
            {articles.length === 0 ? <Spinner /> :
                <div className="container my-3" style={{ padding: "4rem" }}>
                    <h2 id="heading" className="text-center">News Wallah - Search:  {query}</h2>
                    <div className="row my-3" key={Math.random() + 1}>
                        {renderNews()}
                    </div>
                </div>
            }
        </>
    )
}

export default Search
