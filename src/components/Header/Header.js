import React from "react";
import logo from "./logo.png"

const h1Header = {
  color: "#EFF0F0",
}
const h2Header = {
  color: "#3d3b3b",
  fontWeight: "700",
  paddingLeft: "10px"
}
//to make heading on two lines
const h1HeadingWrap = {
	display: "block",
	color: "#20615b"
  }
//to make heading on two lines
const h2HeadingWrap = {
  display: "block",
  color: "#20615b",
}
// z index container - set to auto to send it back
const back = {
	zIndex: "auto",
	position: "relative"
}
// z index container - set to 10 to send it forward
const forward = {
	zIndex: "10",
	position: "relative",
	textAlign: "left",
	paddingLeft: "18px",
	top: "30px"
}
const Header = () => (
	<>
		<div classname="heading-container" style={forward}>
			<h1 style={h1Header}>PING<span style={h1HeadingWrap}>PONG</span></h1>
			<h2 style={h2Header}>pairs<span style={h2HeadingWrap}>generator</span></h2>
		</div>
		
		{/* wrapped for the whole container */}
		<div style = {back} >
			<div className="d-flex justify-content-center">
				<div className="user_card">
					{/* the logo  */}
					<div className="brand_logo_container">
						<img src={logo} className="brand_logo" alt="Logo"></img>
					</div>
				</div>
					{/* the background */}
					<div className="form_container">
					</div>
			</div>
		</div>
	</>
);

export default Header;