import React from "react"
import styled from "styled-components"
import diamond from "../images/diamond.jpg"
import { Link } from "react-router-dom"

const Wrapper = styled.div`
  width: 100%;
  background-color: #f4bbff;

  display: flex;
  justify-content: center;
  flex-direction: row;

  img {
    width: 60px;
    height: 50px;
    border-radius: 5px;
  }

  a {
    font-size: 1.2rem;
    color: #fff;
    text-decoration: none;
  }
`

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 60%;
  h1 {
    color: #fff;
    font-size: 2rem;
    width: 30%;
  }
`

const Navigation = styled.nav`
  width: 40%;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
`

const NavBar = () => {
  return (
    <Wrapper>
      <LogoWrapper>
        <a href="#">
          <img src={diamond} alt="logo" />
        </a>
        <h1>Shelby Diamond</h1>
      </LogoWrapper>

      <Navigation>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </Navigation>
    </Wrapper>
  )
}

export default NavBar
