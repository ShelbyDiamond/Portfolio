import styled from "styled-components"

///Nav Bar
export const Wrapper = styled.div`
  width: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
  flex-direction: row;
  position: fixed;
  top: 0;
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

export const LogoWrapper = styled.div`
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

export const Navigation = styled.nav`
  width: 40%;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
`

///About Page
export const ParentDiv1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 35px;
  margin-top: 90px;
`

export const Image = styled.img`
  width: auto;

  height: 550px;
  border-radius: 80%;
  display: inline-flex;
  text-align: right;
  align-items: baseline;
  align-content: center;
  box-shadow: 8px 8px 5px rgba(0, 0, 0, 0.2);
`
export const Sentence = styled.p`
  font-size: 3.5rem;
  display: inline-flex;
  color: white;
  position: relative;
  width: 60%;
  align-content: center;
  margin: 15px;
  padding: 25px;
  text-shadow: 1px 1px 2px red, 0 0 10em black, 0 0 0.2em blue;
`
export const Paragraphs = styled.p`
  font-size: 1.4rem;
  color: white;
  padding: 10px;
  line-height: 35px;
  width: 50%;
  justify-content: center;
`
///Projects Page
export const Heading = styled.h1`
  font-size: 3rem;
  color: black;
  display: flex;
  justify-content: center;
  margin: 35px;
  padding: 15px;
`
export const ParentDiv2 = styled.div`
  margin-top: 90px;
`

/// Contact Page
export const ParentDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 90px;
`
export const HeaderDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`
export const FormDiv = styled.form`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 50%;
  margin: auto;
`
export const InputDiv = styled.div`
  flex-direction: column;
  width: 100%;
  justify-content: center;
  margin-bottom: 15px;
`
export const H2Heading = styled.h2`
  color: white;
  font-size: 3rem;
  margin-bottom: 100px;
`
export const Label = styled.label`
  color: white;
  font-size: 1.5rem;
`
export const Input = styled.input`
  height: 35px;
  font-size: 1rem;
  margin-bottom: 50px;
  border-radius: 10px;
  width: 60%;
`
export const TextArea = styled.textarea`
  height: 200px;
  width: 60%;
`

export const Input2 = styled.input`
  padding: 11px;
  border: 1px solid grey;
  background: rebeccapurple;
  margin: 25px;
  justify-content: center;
  font-size: 1.2rem;
  width: 25%;
  color: white;
  box-shadow: 5px 5px 3px rgba(0, 0, 0, 0.2);
  &:hover {
    cursor: pointer;
  }
`

/// Projects components!!!!
/// ****** Based on the VeganMeets component ******
export const BigContainer = styled.div`
  border: 2px solid black;
  padding: 10px;
  margin: 25px;
  margin-left: 120px;
  margin-top: 90px;
  width: 80%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: lightgray;
  align-content: center;
`
export const Heading1 = styled.h2`
  font-size: 1.8rem;
  display: flex;
  justify-content: center;
  text-align: center;
`

export const Image1 = styled.img`
  padding: 15px;
  margin: 15px;
  background-color: white;
  border: 1px solid black;
  justify-content: center;
  display: flex;
  margin-left: 23%;
  width: 45%;
`
export const Description = styled.p`
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  padding: 15px;
  margin: 5px;
  background: white;
  text-align: center;
`
export const Buttons = styled.a`
  padding: 11px;
  border: 1px solid grey;
  background: rebeccapurple;
  margin: 25px;
  display: inline-flex;
  justify-content: center;
  flex-direction: column;
  font-size: 1.2rem;
  text-decoration: none;
  width: 25%;
  color: white;
  text-align: center;
  box-shadow: 5px 5px 3px rgba(0, 0, 0, 0.2);
  &:hover {
    cursor: pointer;
  }
`
export const ImageDiv = styled.div`
  display: flex;
  justify-content: center;
`

export const Image2 = styled.img`
  padding: 15px;
  margin: 15px;
  background-color: white;
  border: 1px solid black;
  justify-content: center;
  display: flex;
  width: 30%;
`
export const Image3 = styled.img`
  padding: 15px;
  margin: 15px;
  background-color: white;
  border: 1px solid black;
  justify-content: center;
  display: flex;
  width: 30%;
`
export const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
`
