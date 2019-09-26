import React from "react";
import logo from "./logo.svg"

const imageSize = {
  width: "30%", 
  height: "auto",
  color: "white"
}
const container = {
  position:"relative",
  textAlign:"center"
}

const h1Position = {
  position:"absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: "#FBF0CE",
  fontSize: "50px", /* Some font size to fallback incase vw isn't supported */ 
  fontSize: "5vw"
}
const h2Position = {
  position:"absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: "#241F20",
  fontSize: "50px", /* Some font size to fallback incase vw isn't supported */ 
  fontSize: "4vw",
  fontWeight: "700",
}
const span = {
  display: "block"
}
const Header = () => (
    <div style={container}>
    <img src={ logo } alt="ping pong logo" style={ imageSize } />
    <h1 style={h1Position}> PING <span style={span}>PONG</span></h1>
    <h2 style={h2Position}>tournament</h2>
    </div>
);

export default Header;