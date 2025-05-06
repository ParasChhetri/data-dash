import './App.css'
import LoginPage from './pages/LoginPage'
import { Routes, Route } from 'react-router-dom';
import { SignupPage } from './pages/SignupPage';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { Footer } from './components/Footer';
import { AboutPage } from './pages/AboutPage';
import { ContactUs } from './pages/ContactUs';
function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/about' element={<AboutPage />}/>
        <Route path='/contact-us' element={<ContactUs />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
