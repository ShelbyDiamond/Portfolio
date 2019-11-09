import React from "react"
import { Wrapper, LogoWrapper, Navigation, Diamond } from "./Styles/styles"
import diamond from "../images/diamond.png"
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <Wrapper>
      <LogoWrapper>
        <Link to="/">
          <Diamond src={diamond} alt="logo" />
        </Link>
        <Link to="/">
          <h1>Shelby Diamond</h1>
        </Link>
      </LogoWrapper>

      <Navigation>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </Navigation>
    </Wrapper>
  )
}

export default NavBar
