import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import Search from './components/Search'
import PlayingVideo from './components/PlayingVideo'
import { useAuth } from './context/AuthProvider'
import Loading from './loader/Loading'

function App() {
  const {loading} = useAuth()
  return (
    <>
    {
      loading && <Loading/>
    }
      <Navbar/>
      <Routes>
        <Route path='/'exact element = {<Home/>}></Route>
        <Route path='/search/:searchQuery' element = {<Search/>}></Route>
        <Route path='/video/:id' element = {<PlayingVideo/>}></Route>
      </Routes>
    </>
  )
}

export default App
