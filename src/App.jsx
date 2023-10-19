import {Routes, Route} from "react-router-dom"
import Navbar from "./componenets/Navbar"
import Home from "./componenets/Home"
import About from "./componenets/About"
import Service from "./componenets/Service"
import Resource from "./componenets/Resource"
import Contact from "./componenets/Contact"
import Footer from "./componenets/Footer"

function App() {

  return (
    <>
    <Routes>
      <Route path="/navbar" element={<Navbar/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/service" element={<Service/>}/>
      <Route path="/resource" element={<Resource/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="footer" element={<Footer/>}/>


      

    </Routes>
    </>
  )
}

export default App
