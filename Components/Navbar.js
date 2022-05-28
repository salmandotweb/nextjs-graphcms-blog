import Link from "next/link";
import React from "react";
import classes from "../styles/Navbar.module.css";

const Navbar = () => {
	return (
		<nav className={classes.navbar}>
			<h1 className={classes.logo}>SalmandotBlog</h1>
			<div className={classes.categories}>
				<Link href="/">ReactJs</Link>
				<Link href="/">Web Development</Link>
			</div>
		</nav>
	);
};

export default Navbar;
