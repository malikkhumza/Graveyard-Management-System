import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Servicesland from './components/Servicesland'
import Pricing from './components/Pricing'
import Obituaries from './components/Obituaries'
import Footer from './components/Footer'
import Login from './components/Login'
import Plans from './components/Plans/Plans'
import Signup from './components/Signup'
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';function App() {
  

  return (
    
    <>
    <ToastContainer/>
    <Navbar />
    <Home />
    <Servicesland/>
    <Pricing />
    <Obituaries/>
    <Footer/>
    <Plans/>
    <Login/>
    <Signup/>
    </>
    
  )
}

export default App
