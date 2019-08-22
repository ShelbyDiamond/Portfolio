import React from "react"
import NavBar from "./Components/NavBar"
import GlobalStyle from "./GlobalStyle"
import { Route } from "react-router-dom"
import Home from "./Components/Home"
import About from "./Components/About"
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
    </>
  )
}
export default App
