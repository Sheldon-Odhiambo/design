import {Routes, Route} from "react-router-dom"
import Navbar from "./componenets/Navbar"
import Home from "./componenets/Home"
import About from "./componenets/About"
import Service from "./componenets/Service"
function App() {

  return (
    <>
    <Routes>
      <Route path="/navbar" element={<Navbar/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/service" element={<Service/>}/>

      

    </Routes>
    </>
  )
}

export default App
