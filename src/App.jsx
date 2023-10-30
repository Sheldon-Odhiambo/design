import {Routes, Route} from "react-router-dom"
import Navbar from "./componenets/Navbar"
import Home from "./componenets/Home"
import About from "./componenets/About"
import Service from "./componenets/Service"
import Resource from "./componenets/Resource"
import Contact from "./componenets/Contact"
import Footer from "./componenets/Footer"
import Shop  from "./componenets/Shop"

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
      <Route path="shop" element={<Shop/>}/>


      

    </Routes>
    </>
  )
}

export default App
