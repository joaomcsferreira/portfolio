import React from "react"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Header from "./Components/Header"
import Home from "./Pages/Home"
import Projects from "./Pages/Projects"
import Footer from "./Components/Footer"

function App() {
  return (
    <div className="font-poppins text-gainsboro bg-dimGray">
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
