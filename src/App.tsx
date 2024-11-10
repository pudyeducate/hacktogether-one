import Login from '@pages/Login'
import './App.scss'

import ViewModel from '@pages/ViewModel'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ReactTogether } from 'react-together'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<ViewModel />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
