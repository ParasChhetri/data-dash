import './App.css'
import LoginPage from './pages/LoginPage'
import { Routes, Route } from 'react-router-dom';
import { SignupPage } from './pages/SignupPage';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';
function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
      </Routes>
      
    </>
  )
}

export default App
