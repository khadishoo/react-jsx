import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Search from './components/Search'
import MovieDetaile from './components/MovieDetaile'
import MovieList from './components/MovieList'
import TextProvider from '../../reactJsx/src/components/TextProvider'
import Test from './components/Test'

function App() {
  // const [movies, setMovies] = useState([])
  // console.log("Appjsx movies: ", movies);
  let [text, setText] = useState('amjilt cyber akademy')
  return (
    <>
      <TextProvider>
        <Test/>
      </TextProvider>
      {/* <BrowserRouter>
        <Search nursSearch = {setMovies}/>
        <Routes>
          <Route path='/' element={<MovieList filmder={movies}/>}/>
          <Route path='/movies/:id' element={<MovieDetaile/>}/>
        </Routes>
      </BrowserRouter> */}
    </>
  )
}

export default App
