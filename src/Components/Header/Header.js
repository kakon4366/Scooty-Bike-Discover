import React from "react";

const Header = () => {
	return (
		<header>
			<div className="container mx-auto">
				<nav className="text-center py-6">
					<a className="text-2xl mr-8" href="/">
						Home
					</a>
					<a className="text-2xl mr-8" href="/review">
						Review
					</a>
					<a className="text-2xl mr-8" href="/dashboard">
						Dashboard
					</a>
					<a className="text-2xl mr-8" href="/contact">
						Contact Us
					</a>
				</nav>
			</div>
		</header>
	);
};

export default Header;
