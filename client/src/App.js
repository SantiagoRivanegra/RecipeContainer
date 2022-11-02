import './App.css';
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthContextProvider } from './components/firebase/context/AuthContext'
import Protected from './components/firebase/protected/Protected'
import Home from './components/Home'
import Post from './components/recipe/post/Post'
import CardDetail from './components/recipe/card/CardDetail'
import PostUser from './components/user/post/PostUser'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <AuthContextProvider>
        <Routes>
          <Route exact path = '/' element = {<Home />}/>
          <Route exact path = '/post' element = {<Protected>
                                                    <Post/>
                                                  </Protected>}
          />
          <Route exact path = '/detail/:id' element = {<CardDetail />}/>
          <Route exact path = '/user' element = {<PostUser />}/>

        </Routes>  
      </AuthContextProvider>
    </div>
    </BrowserRouter>
  );
}

export default App;