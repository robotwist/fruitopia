import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Fruits from './components/Fruits/Fruits'
import Navbar from './components/NavBar/NavBar'
import About from './components/About/About'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Fruits />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="search" element={<FruitSearch />} />
      </Routes>
      <Footer />
    </>
  )
}
  
export default App