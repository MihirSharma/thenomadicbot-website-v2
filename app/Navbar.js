"use client";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
	let [showMenu, setShowMenu] = useState(false);

	const toggleMenu = () => {
		setShowMenu(!showMenu);
	};

	return (
		<div>
			<div className="hidden xl:flex flex-row justify-between items-center bg-teal-600 h-16 motion-safe:animate-fadeInTopNavbar">
				{/* <CssBaseline /> */}
				<div className="pl-8 text-sm md:text-2xl font-semibold">
					The Nomadic Bot
				</div>
				<div className="flex flex-row justify-between items-center p-0">
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
			<div className="xl:hidden flex flex-col justify-evenly items-center text-center h-fit motion-safe:animate-fadeInTopNavbar">
				{/* <CssBaseline /> */}
				<div
					onClick={toggleMenu}
					className="pl-8 py-4 cursor-pointer text-sm md:text-2xl font-semibold w-screen bg-teal-600">
					The Nomadic Bot
				</div>
				<div
					className={`${
						showMenu
							? "motion-safe:animate-fadeInTop"
							: "hidden motion-safe:animate-fadeInBottom"
					} flex flex-col justify-evenly items-center p-0`}>
					<Link
						href="/"
						className="w-screen text-center px-8 py-5 text-slate-900 bg-teal-600 hover:bg-teal-100 hover:text-lg hover:font-semibold transition-all duration-250 ease-out hover:ease-in">
						<div>Home</div>
					</Link>
					<Link
						href="/about"
						className="w-screen text-center px-8 py-5 text-slate-900 bg-teal-500 hover:bg-teal-100 hover:text-lg hover:font-semibold transition-all duration-250 ease-out hover:ease-in">
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
						className="w-screen text-center px-8 py-5 text-slate-900 bg-teal-400 hover:bg-teal-100 hover:text-lg hover:font-semibold transition-all duration-250 ease-out hover:ease-in">
						<div>Contact</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
