import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import About from './components/About'
import Navbar from './components/Navbar'
import TopStories from './components/TopStories'
import NotFound from './components/NotFound'

export class App extends Component {
  constructor(){
    super()
    this.state = {
      categories : ["Arts", "Automobiles", "Books", "Business", "Fashion", "Food", "Health", "Insider", "Magazine", "Movies", "Nyregion", "Obituaries", "Opinion", "Politics", "RealEstate", "Science", "Sports", "Sundayreview", "Technology", "Theater", "T-magazine", "Travel", "Upshot", "Us", "World"]
    }
  }
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<TopStories section="home"/>}></Route>
            <Route exact path='/about' element={<About />}></Route>
            <Route exact path='*' element={<NotFound/>}></Route>
            {
              this.state.categories.map((e)=>{
                return <Route exact path={`/categories/${e.toLowerCase()}`} element={<TopStories section={e.toLowerCase()}/>}></Route>
              })
            }
          </Routes>
        </Router>
      </>
    )
  }
}

export default App
