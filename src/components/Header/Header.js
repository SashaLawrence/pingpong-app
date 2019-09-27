import React from "react";
import logo from "./logo.svg"
import pingpong from "./ping-pong-circle-log2.png"

const h1Header = {
  color: "#f8f9fa",
  fontSize: "2rem"
}
const h2Header = {
  color: "#241F20",
  fontWeight: "700",
  fontSize: "1.1rem",
  paddingLeft: "10px"
}
//to make heading on two lines
const headingWrap = {
  display: "block"
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
	paddingLeft: "12px",
	top: "20px"
}
const Header = () => (
	<>
		<div style={forward}>
			<h1 style={h1Header}>PING<span style={headingWrap}>PONG</span></h1>
			<h2 style={h2Header}>tournament<span style={headingWrap}>generator</span></h2>
		</div>
		
		{/* wrapped for the whole container */}
		<div style = {back} >
			<div className="d-flex justify-content-center">
				<div className="user_card">
					{/* the logo  */}
					<div className="brand_logo_container">
						<img src={pingpong} className="brand_logo" alt="Logo"></img>
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