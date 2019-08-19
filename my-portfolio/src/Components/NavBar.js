import React from "react"
import styled from "styled-components"

const Nav = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 35px;
  background: purple;
  justify-content: space-evenly;
`
const Anchor = styled.a`
  text-decoration: none;
  color: white;
  font-size: 1.2rem;
  &:nth-child(1) {
    text-align: left;
    margin-right: 75px;
  }
  &:nth-child(2) {
    text-align: right;
  }
  &:nth-child(3) {
    text-align: right;
  }
`

class NavBar extends React.Component {
  render() {
    return (
      <Nav>
        <img src="../images/capture" />
        <Anchor href="#">Shelby Diamond</Anchor>
        <Anchor href="#">About</Anchor>
        <Anchor href="#">Projects</Anchor>
      </Nav>
    )
  }
}
export default NavBar
