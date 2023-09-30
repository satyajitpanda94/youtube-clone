import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ChannelDetails, Feed, Navbar, SearchResults, VideoDetails } from './components'

export default function App() {
  return (
    <BrowserRouter basename='/youtube-clone'>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Feed/>}/>
        <Route path='/search/:id' element={<SearchResults/>}/>
        <Route path='/video/:id' element={<VideoDetails/>}/>
        <Route path='/channel/:id' element={<ChannelDetails/>}/>
      </Routes>
    </BrowserRouter>
  )
}
