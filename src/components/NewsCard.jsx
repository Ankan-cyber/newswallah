import React, { Component } from 'react'
import Image from '../Images/default.png'

export default class Newsbody extends Component {
    render() {
        let { title, abstract, imgUrl, newsUrl, author, date } = this.props;
        return (
            <>
                <div className="card">
                    <img src={imgUrl == null ? Image : imgUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{abstract}</p>
                        <p className="card-text"><small className="text-muted"> {!author?"By Unknown": author} on {date}</small></p>
                        <a href={newsUrl} className="btn btn-outline-success btn-sm" target="_blank" rel='noreferrer'>Read More</a>
                    </div>

                </div>
            </>
        )
    }
}
