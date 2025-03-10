import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import Inventory from "./pages/Inventory"
import AboutUs from './pages/AboutUs'
import Login from './pages/Login'
import AdminDashboard from './pages/AdminDashboard'

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/inventory" element={<Inventory/>} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/admin-dashboard" element={<AdminDashboard/>} />
          </Routes>
          </div>
          <Footer />
      </div>
    </Router>
  )
}

export default App
