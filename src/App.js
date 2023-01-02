import React, { Component } from 'react'
import Navbar from './components/Navbar'
import TopStories from './components/TopStories'

export class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <TopStories />
      </>
    )
  }
}

export default App
