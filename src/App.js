import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import About from './components/About'
import Navbar from './components/Navbar'
import TopStories from './components/TopStories'
import NotFound from './components/NotFound'
// Search Feature is in pending after redux 
export class App extends Component {
  apiKey = "G0hi9JktPaMmV6i0GVcnNZXjoA4RXkQ9";
  constructor() {
    super()
    this.state = {
      categories: ["Arts", "Automobiles", "Books", "Business", "Fashion", "Food", "Health", "Insider", "Magazine", "Movies", "Nyregion", "Obituaries", "Opinion", "Politics", "RealEstate", "Science", "Sports", "Sundayreview", "Technology", "Theater", "T-magazine", "Travel", "Upshot", "Us", "World"]
    }
  }
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<TopStories apiKey={this.apiKey} section="home" />}></Route>
            <Route exact path='/about' element={<About />}></Route>
            <Route exact path='*' element={<NotFound />}></Route>
            {
              this.state.categories.map((e) => {
                return <Route key={e} exact path={`/categories/${e.toLowerCase()}`} element={<TopStories apiKey={this.apiKey} section={e.toLowerCase()} />}></Route>
              })
            }
          </Routes>
        </Router>
      </>
    )
  }
}

export default App
