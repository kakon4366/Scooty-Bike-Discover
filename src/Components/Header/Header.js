import React from "react";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
	return (
		<header>
			<div className="container mx-auto">
				<nav className="text-center py-6 flex items-center justify-center">
					<CustomLink className="text-2xl mr-8" to="/">
						Home
					</CustomLink>
					<CustomLink
						className="text-2xl mr-8 underline pb-2"
						to="/review"
					>
						Review
					</CustomLink>
					<CustomLink className="text-2xl mr-8" to="/dashboard">
						Dashboard
					</CustomLink>
					<CustomLink className="text-2xl mr-8" to="/contact">
						Contact Us
					</CustomLink>
				</nav>
			</div>
		</header>
	);
};

export default Header;
