
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import Switch from "react-router-dom"
import './App.scss'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import MovieDetails from './components/MovieDetails/MovieDetails'
import PageNotFound from './components/PageNotFound/PageNotFound'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <div className="app">
        <Router>
          <Header></Header>
          <div className="container">
            <Routes>
              <Route path='/' exact Component={Home} />
              <Route path='/movie/:imdbID' Component={MovieDetails} />
              <Route path='*' Component={PageNotFound} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </div>
    </>

  )
}

export default App
