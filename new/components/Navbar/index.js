import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
		<NavLink to="/Login_Form" activeStyle>
			Login
		</NavLink>
		<NavLink to="/Registration_Form" activeStyle>
			Register
		</NavLink>
	
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
