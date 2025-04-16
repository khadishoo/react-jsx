import React, { useEffect, useState } from 'react'
import './App.css'
import TextProvider from './components/TextProvider'
import Test from './components/Test'

// import Login from './pages/Login'
// import Deshboard from './pages/Deshboard'
// import ProtectedRoute from './components/ProtectedRoute'
// import Main from './pages/Main'
// import PostDetail from './pages/PostDetail'
// import Posts from './pages/Posts'
// import Comments from './pages/Comments'
// import LoginForm from './components/LoginForm'
// import ApiAxios from './pages/ApiAxios'
// import AppProg from './components/AppProg'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'


export default function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false)
  return (
    <TextProvider>
        <Test/>
    </TextProvider>


    // <BrowserRouter>
    //     <Routes>
    //       <Route path='/' element={<Login isNurs ={setIsAuthenticated}/>}/>
    //       <Route path='/deshboard' element={
    //         <ProtectedRoute isAuth = {isAuthenticated}>
    //           <Deshboard/>
    //         </ProtectedRoute>
    //       }/>
    //     </Routes>
    // </BrowserRouter>


      // <BrowserRouter>
      //   <Routes>
      //     <Route path="/" element = {<Main/>}/>
      //     <Route path="/posts" element = {<Posts/>}/>
      //     <Route path="/posts/:id" element = {<PostDetail/>}>
      //       <Route path="comments" element = {<Comments/>}/>
      //     </Route>
      //   </Routes>
      // </BrowserRouter>
  )
}

