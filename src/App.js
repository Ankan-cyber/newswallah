import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import About from './components/About'
import Navbar from './components/Navbar'
import TopStories from './components/TopStories'
import NotFound from './components/NotFound'

export class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<TopStories section="home"/>}></Route>
            <Route exact path='/about' element={<About />}></Route>
            <Route exact path='*' element={<NotFound/>}></Route>
          </Routes>
        </Router>
      </>
    )
  }
}

export default App
