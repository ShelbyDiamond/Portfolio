import React from "react"
import Github from "../images/Github.PNG"
import Twitter from "../images/twitter.PNG"
import LinkedIn from "../images/LinkedIn.PNG"

const Contact = () => {
  return (
    <div>
      <h2>Let's Connect!</h2>
      <p>Shelby Diamond</p>
      <p>shelbydiamond518@gmail.com</p>

      <img src={Github} alt="Github Logo" />
      <img src={Twitter} alt="Twitter Logo" />
      <img src={LinkedIn} alt="LinkedIn Logo" />
    </div>
  )
}

export default Contact
