import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import Inventory from "./pages/Inventory"
import AboutUs from './pages/AboutUs';
import ContactPage from './pages/ContactPage';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/inventory" element={<Inventory/>} />
          <Route path="/contact" element={<ContactPage/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
