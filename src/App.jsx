import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Skills from './Pages/Skills'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Projects from './Pages/Projects'
import FooterSection from './Components/FooterSection'

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
         <Route path='/projects' element={<Projects/>}></Route>
         <Route path='/skills' element={<Skills/>}></Route>
         <Route path='/about' element={<About/>}></Route>
         <Route path='/contact' element={<Contact/>}></Route>
         
      </Routes>
      <FooterSection></FooterSection>
    </div>
  )
}

export default App
