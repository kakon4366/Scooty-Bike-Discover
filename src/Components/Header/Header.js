import React, { useState } from "react";
import CustomLink from "../CustomLink/CustomLink";
import { MenuAlt1Icon, XIcon } from "@heroicons/react/solid";

const Header = () => {
	const [open, setOpen] = useState(false);

	return (
		<header className="bg-[#FFF8F3]">
			<div className="container mx-auto ">
				<div onClick={() => setOpen(!open)} className="md:hidden py-6">
					{open ? (
						<XIcon className="w-8 h-8"></XIcon>
					) : (
						<MenuAlt1Icon className="w-8 h-8"></MenuAlt1Icon>
					)}
				</div>
				<nav
					className={`border-t-2 absolute md:static md:-translate-y-0 w-full transition-all left-0 bg-[#FFF8F3] text-center py-6 md:flex items-center justify-center ${
						open ? " translate-y-0" : "-translate-y-72"
					}`}
				>
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
					<CustomLink className="text-2xl mr-8" to="/blog">
						Blog
					</CustomLink>
				</nav>
			</div>
		</header>
	);
};

export default Header;
