import { BrowserRouter, Routes, Route } from "react-router-dom"
// import Header from "./Components/Header/Header"
// import Footer from "./Components/Footer/Footer"
import Home from "./Pages/Home/Home"
import Modals from "./Components/Modals"

const App = () => {
  return (
    <>
    <BrowserRouter>
      
      <Routes>
         <Route path="/" element={<Home />}/>
         <Route path="/modal" element={<Modals />}/>
      </Routes>
      
    </BrowserRouter>
    </>
  )
}

export default App