import React, { Component } from 'react'

export default class Newsbody extends Component {
    render() {
        let { title, abstract, imgUrl, newsUrl } = this.props;
        return (
            <>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={imgUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{abstract}</p>
                        <a href={newsUrl} className="btn btn-primary btn-sm" target="_blank" rel='noreferrer'>Read More</a>
                    </div>

                </div>
            </>
        )
    }
}
