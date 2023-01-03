import React, { Component } from 'react'

export default class NotFound extends Component {
    render() {
        return (
            <>
                {document.title = "404 Not Found"}
                <section className="notFound">
                    <div className="img">
                        <a href="#"><img src="https://assets.codepen.io/5647096/backToTheHomepage.png" alt="Back to the Homepage" /></a>
                        <a href="#"><img src="https://assets.codepen.io/5647096/Delorean.png" alt="El Delorean, El Doc y Marti McFly" /></a>
                    </div>
                    <div className="text">
                        <h1>404</h1>
                        <h2>PAGE NOT FOUND</h2>
                        <h3>BACK TO HOME?</h3>
                        <a href="/" className="yes">YES</a>
                        <a href="#">NO</a>
                    </div>
                </section>
            </>
        )
    }
}
