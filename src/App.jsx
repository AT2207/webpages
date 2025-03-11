
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import AppBar from './components/Appbar';
import { Routes,Route } from 'react-router-dom';
//import Home from './components/home';
import Home from './components/pages/home/Home';
import About from './components/pages/about/About';
import Services from './components/pages/service/Services';
import Contact from './components/pages/contact/Contact';

function App() {

  return (
    <>
     <AppBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
   
    </>
  )
}

export default App
