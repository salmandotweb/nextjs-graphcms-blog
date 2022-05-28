import React from "react";
import { Navbar } from "../Components";

const Layout = ({ children }) => {
	return (
		<>
			<Navbar />
			{children}
		</>
	);
};

export default Layout;
