import React from "react"
import styled from "styled-components"
import diamond from "../images/diamond.png"
import { Link } from "react-router-dom"

const Wrapper = styled.div`
  width: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
  flex-direction: row;
  @media (max-width: 750px) {
    flex-direction: column;
    background: black;
    justify-content: center;
    padding-left: 30%;
    padding-right: 30%;
    flex-flow: column nowrap;
  }

  img {
    width: 70px;
    height: 60px;
    border-radius: 5px;
  }

  a {
    font-size: 1.2rem;
    color: #fff;
    text-decoration: none;
    @media (max-width: 750px) {
      flex-flow: column nowrap;
    }
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
    @media (max-width: 750px) {
      width: 100%;
      flex-direction: column;
    }
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
        <Link to="/">
          <img src={diamond} alt="logo" />
        </Link>
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
