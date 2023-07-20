"use client";

import React, { useState } from "react";
import SendIcon from "../../public/send-svgrepo-com.svg";
import Image from "next/image";
import Link from "next/link";
import CallIcon from "@mui/icons-material/Call";
import SendEmailIcon from "@mui/icons-material/Send";

const DirectMessage = () => {
	let [showDM, setShowDM] = useState(true);
	let [name, setName] = useState("");
	let [email, setEmail] = useState("");
	let [message, setMessage] = useState("");

	const handleSubmit = async () => {
		if (!name || !email || !message) {
			console.log("Empty fields");
			return false;
		}
		let data = { name, email, message };
		try {
			const resp = await fetch("/api/contact", {
				method: "POST",
				body: JSON.stringify(data),
			});
			setName("");
			setEmail("");
			setMessage("");
		} catch (e) {
			console.log(e);
		}
	};

	const handleNameChange = (e) => {
		setName(e.target.value);
	};

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const handleMessageChange = (e) => {
		setMessage(e.target.value);
	};

	return (
		<div className="flex flex-col justify-evenly items-center">
			<div className="w-screen flex flex-col 2xl:flex-row justify-evenly items-center">
				<div className="mt-6 mx-2 py-8 px-16 text-4xl cursor-pointer bg-teal-600 hover:bg-teal-200 hover:text-5xl text-slate-900 font-semibold rounded transition-all duration-250 ease-out hover:ease-in">
					<Link
						href="https://calendly.com/mihirsharmaofficial"
						target="_blank"
						className="flex flex-row justify-between items-center">
						<CallIcon sx={{ fontSize: 40 }} />
						<div className="ml-8"> Book a call</div>
					</Link>
				</div>
				<div className="flex flex-col justify-evenly items-center">
					<div
						onClick={() => setShowDM(!showDM)}
						className="w-full text-center mt-6 mx-2 py-8 px-16 text-4xl cursor-pointer bg-teal-600 hover:bg-teal-200 hover:text-5xl text-slate-900 font-semibold rounded transition-all duration-250 ease-out hover:ease-in">
						Send a DM
					</div>
				</div>
				<div
					title="mihir@thenomadicbot.com"
					className="mt-6 mx-2 py-8 px-16 text-4xl cursor-pointer bg-teal-600 hover:bg-teal-200 hover:text-5xl text-slate-900 font-semibold rounded transition-all duration-250 ease-out hover:ease-in">
					<Link
						href="mailto:mihir@thenomadicbot.com"
						target="_blank"
						className="flex flex-row justify-between items-center">
						<SendEmailIcon sx={{ fontSize: 40 }} />
						<div className="ml-8">Send an Email</div>
					</Link>
				</div>
			</div>
			<div
				className={`${
					showDM ? "hidden" : ""
				} flex flex-col xl:flex-row justify-evenly items-center`}>
				<div className="mx-16 flex flex-col justify-evenly items-center p-8 motion-safe:animate-fadeInLeft">
					<div className="relative my-8">
						<input
							value={name}
							onChange={handleNameChange}
							className="peer h-18 w-96 rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-4 font-sans text-4xl font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-teal-600 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
							placeholder=" "
						/>
						<label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-xl peer-focus:leading-none peer-focus:text-teal-600 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-teal-600 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-teal-600 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
							Name
						</label>
					</div>
					<div className="relative my-8">
						<input
							value={email}
							onChange={handleEmailChange}
							className="peer h-18 w-96 rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-4 font-sans text-2xl font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-teal-600 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
							placeholder=" "
						/>
						<label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-xl peer-focus:leading-none peer-focus:text-teal-600 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-teal-600 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-teal-600 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
							E-Mail
						</label>
					</div>
					<div className="relative my-8">
						<textarea
							value={message}
							onChange={handleMessageChange}
							className="no-scrollbar peer h-96 w-96 rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-8 font-sans text-xl font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-teal-600 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
							placeholder=" "
						/>
						<label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-xl peer-focus:leading-none peer-focus:text-teal-600 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-teal-600 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-teal-600 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
							Message
						</label>
					</div>
				</div>
				<button
					onClick={handleSubmit}
					className="group cursor-pointer border-4 border-teal-600 border-solid w-full rounded-full p-4 bg-teal-100 hover:bg-teal-50 motion-safe:animate-fadeInRight">
					<Image
						src={SendIcon}
						width={100}
						height={100}
						alt="Send"
						title="Send"
						className="group-hover:motion-safe:animate-flyRightSend"
					/>
				</button>
			</div>
		</div>
	);
};

export default DirectMessage;
