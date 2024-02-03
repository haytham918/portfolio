import React from 'react'
import {HashRouter, Route, Routes} from 'react-router-dom'
import App from './App'
import Converter from './Converter/Converter'
// import Duplicate from './Duplicate'
// import { ETC } from './components/ETC'
const Main = () => {
  return (
    <HashRouter>
      <Routes>
      <Route exact path='/' Component={App}/>
      <Route exact path='/converter' Component={Converter}/>
      </Routes>
    </HashRouter>
  )
}

export default Main;