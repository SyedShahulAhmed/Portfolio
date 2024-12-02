import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from './components/ScrollTop';
function App() {
  return (
    <div className='bg-[#03045E] w-full '>
      <ToastContainer/>
      <ScrollToTop/>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
