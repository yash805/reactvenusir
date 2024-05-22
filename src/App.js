import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Navbar from './components/Navbar'
import User from './components/User'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>    
        <Navbar/>
         <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/user/:name" element={<User />}/>
            <Route path="/*" element={<Home />}/>
         </Routes>        
      </BrowserRouter>
    </div>
  )
}

export default App
