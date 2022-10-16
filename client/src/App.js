import './App.css';
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Post from './components/recipe/post/Post'
import CardDetail from './components/recipe/card/CardDetail'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route exact path = '/' element = {<Home />}/>
        <Route exact path = '/post' element = {<Post />}/>
        <Route exact path = '/detail/:id' element = {<CardDetail />}/>
      </Routes>  
    </div>
    </BrowserRouter>
  );
}

export default App;