import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import Inventory from "./pages/Inventory"
import AboutUs from './pages/AboutUs';
import ContactPage from './pages/ContactPage';
import Login from './pages/Login';

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
          <Route path="/login" element={<Login/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
