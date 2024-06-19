import './App.css'
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Shop from "./Pages/Shop/Shop";
import Articles from "./Pages/Articles/Articles";
import Contact from "./Pages/Contact/Contact"
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/about' element= {<About />} />
        <Route path='/shop' element= {<Shop />} />
        <Route path='/articles' element= {<Articles />} />
        <Route path='/contact' element= {<Contact />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
