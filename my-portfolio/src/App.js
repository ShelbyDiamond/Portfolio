import React from "react"
import NavBar from "./Components/NavBar"
import Sparkle from "react-sparkle"
import GlobalStyle from "./GlobalStyle"
import { Route } from "react-router-dom"
import About from "./Components/About"
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"

function App() {
  return (
    <div style={{ position: "relative" }}>
      <GlobalStyle />
      <NavBar />
      <Sparkle
        color={"#FFF"}
        count={1000}
        minSize={3}
        maxSize={7}
        overflowPx={0}
        fadeOutSpeed={100}
        newSparkleOnFadeOut={true}
        flicker={true}
        flickerSpeed={"slow"}
      />
      <Route exact path="/" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
    </div>
  )
}
export default App
