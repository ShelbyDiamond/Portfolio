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
      <div
        style={{
          width: "1200px",
          display: "flex",
          marginTop: "42px"
        }}
      >
        <Sparkle
          color={"#FFF"}
          count={900}
          minSize={3}
          maxSize={7}
          fadeOutSpeed={20}
          newSparkleOnFadeOut={true}
          flicker={true}
          flickerSpeed={"slowest"}
        />
        <Route exact path="/" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </div>
    </div>
  )
}
export default App
