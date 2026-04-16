import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Sponsor from './pages/Sponsor'
import Thanks from './pages/Thanks'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/omos' element={<AboutUs/>} />
        <Route path='/sponsering' element={<Sponsor/>} />
        <Route path='/takker' element={<Thanks/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
