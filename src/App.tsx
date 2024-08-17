import { Routes, Route } from "react-router-dom";
import useScrollToTop from "./Components/ScrollTop";
import Navigation from "./Components/Navigation";
import Home from "./Components/Home";
import Service from "./Components/Service";
import About from "./Components/About";
import Contact from "./Components/Contact"
import Footer from "./Components/Footer";

function App() {
  useScrollToTop(); 
 

  return (
    <div>
    <Routes>
      <Route path="/navigation-bar" element={<Navigation/>} />
      <Route path="/" element={<Home/>} />
      <Route path="/Service" element={<Service/>} />
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/footer" element={<Footer/>}/>
    </Routes>
  </div>
  )
}

export default App



