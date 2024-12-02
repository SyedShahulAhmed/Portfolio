import { StrictMode } from 'react'
import {createRoot} from 'react-dom/client'
import { createBrowserRouter,  createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Resume from './pages/Resume.jsx'
import Certificates from './pages/Certificates.jsx'
import Contact from './pages/Contact.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element ={<App/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/resume' element={<Resume/>}/>
      <Route path='/certificates' element={<Certificates/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
