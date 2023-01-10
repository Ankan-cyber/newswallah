import React, { Component } from 'react'

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      categories: ["Arts", "Automobiles", "Books", "Business", "Fashion", "Food", "Health", "Insider", "Magazine", "Movies", "Nyregion", "Obituaries", "Opinion", "Politics", "RealEstate", "Science", "Sports", "Sundayreview", "Technology", "Theater", "T-magazine", "Travel", "Upshot", "Us", "World"]
    }
    this.inputElement = React.createRef();
  }
  handleSubmit = (event) =>{
    event.preventDefault();
    let inputValue = this.inputElement.current.value;
    console.log(inputValue)
    // send inputValue to /search with query parameter ?q=inputValue
  }
  render() {
    return (
      <>
        <nav className="navbar navbar-dark bg-dark fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">News Wallah</a>
            {/* <svg stroke="black"
          fill="white" strokeWidth="0" viewBox="0 0 16 16" className="hidden md:block text-purple-700 mt-1 ml-2 cursor-pointer dark:text-white" height="28" width="28" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z">
              </path>
              <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"></path>
            </svg> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">News Wallah</h5>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/about">About Us</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Categories
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark">
                      {
                        this.state.categories.map((e) => {
                          if (e === "RealEstate") {
                            return <li key={e}><a className="dropdown-item" href={`/categories/${e.toLowerCase()}`}>Real Estate</a></li>
                          }
                          return <li key={e}><a className="dropdown-item" href={`/categories/${e.toLowerCase()}`}>{e}</a></li>
                        })
                      }
                    </ul>
                  </li>
                </ul>
                <form className="d-flex mt-3" role="search" action="/search" method="get" onSubmit={this.handleSubmit}>
                  <input ref={this.inputElement} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-success" type="submit">Search</button>
                </form>
              </div>
            </div>
          </div>
        </nav>
      </>
    )
  }
}
