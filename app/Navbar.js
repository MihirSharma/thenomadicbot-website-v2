import Link from "next/link";
import React from "react";

const Navbar = () => {
	return (
		<div className="flex flex-row justify-between items-center bg-teal-600 h-16 motion-safe:animate-fadeInTopNavbar">
			{/* <CssBaseline /> */}
			<div className="pl-8 text-sm md:text-2xl font-semibold">
				The Nomadic Bot
			</div>
			<div className="hidden xl:flex flex-row justify-between items-center p-0">
				<Link
					href="/"
					className="px-8 py-5 text-slate-900 bg-teal-600 hover:bg-teal-100 hover:text-lg hover:font-semibold transition-all duration-250 ease-out hover:ease-in">
					<div>Home</div>
				</Link>
				<Link
					href="/about"
					className="px-8 py-5 text-slate-900 bg-teal-500 hover:bg-teal-100 hover:text-lg hover:font-semibold transition-all duration-250 ease-out hover:ease-in">
					<div>About</div>
				</Link>
				{/* <Link
					href="/projects"
					className="px-8 py-5 text-slate-900 bg-teal-400 hover:bg-teal-100 hover:text-lg hover:font-semibold transition-all duration-250 ease-out hover:ease-in">
					<div>Projects</div>
				</Link>
				<Link
					href="/blog"
					className="px-8 py-5 text-slate-900 bg-teal-300 hover:bg-teal-100 hover:text-lg hover:font-semibold transition-all duration-250 ease-out hover:ease-in">
					<div>Blog</div>
				</Link> */}
				<Link
					href="/contact"
					className="px-8 py-5 text-slate-900 bg-teal-400 hover:bg-teal-100 hover:text-lg hover:font-semibold transition-all duration-250 ease-out hover:ease-in">
					<div>Contact</div>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
