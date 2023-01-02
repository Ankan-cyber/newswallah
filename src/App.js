import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import About from './components/About'
import Navbar from './components/Navbar'
import TopStories from './components/TopStories'

export class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<TopStories />}></Route>
            <Route exact path='/about' element={<About />}></Route>
          </Routes>
        </Router>
      </>
    )
  }
}

export default App
