"use client";
import CallIcon from "@mui/icons-material/Call";
import SendIcon from "@mui/icons-material/Send";
import Image from "next/image";
import NextIcon from "../public/Nextjs-logo.svg";
import ReactIcon from "../public/React-icon.svg";
import NodeIcon from "../public/Node.js_logo.svg";
import MongoIcon from "../public/MongoDB_Logo.svg";
import PostgresIcon from "../public/Postgresql_elephant.svg";
import TailwindIcon from "../public/Tailwind_CSS_Logo.svg";
import IonicIcon from "../public/Ionic_Logo.svg";
import GitIcon from "../public/Git-logo.svg";
import DockerIcon from "../public/Docker_(container_engine)_logo.svg";
import SolidityIcon from "../public/Solidity_logo.svg";
import HardhatIcon from "../public/hardhat-seeklogo.com.svg";
import TruffleIcon from "../public/truffle-seeklogo.com.svg";
import USFlag from "../public/Flag_of_the_United_States.svg";
import UKFlag from "../public/Flag_of_the_United_Kingdom.svg";
import IndiaFlag from "../public/Flag_of_India.svg";
import UAEFlag from "../public/Flag_of_the_United_Arab_Emirates.svg";
import QatarFlag from "../public/Flag_of_Qatar.svg";

const goToCalendly = () => {
	window.open("https://calendly.com/mihirsharmaofficial", "_blank");
};

const email = () => {
	window.location.href = "mailto:mihir@thenomadicbot.com";
};

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-normal p-24 mt-16">
			<div className="flex flex-row justify-between items-center mx-4 w-full mb-16">
				<div className="flex flex-col justify-evenly items-center 2xl:items-start w-full 2xl:w-1/2 ml-0 2xl:ml-32 mr-0 motion-safe:animate-fadeInLeft">
					<div className="2xl:text-left text-center w-2/3 text-xl md:text-3xl lg:text-5xl font-semibold">
						Your final stop for all your development needs
					</div>
					<div className="2xl:text-left text-center mt-4 text-base md:text-xl w-2/3">
						<div>Your dream app or your brand's website</div>
						<div>
							Designed, Developed and Delivered on YOUR timeline.
						</div>
					</div>
					<div className="flex flex-col lg:flex-row justify-start items-center">
						<div
							className="mt-6 mx-2 text-xl cursor-pointer bg-teal-600 hover:bg-teal-200 hover:text-2xl text-slate-900 font-semibold py-2 px-4 rounded transition-all duration-250 ease-out hover:ease-in"
							onClick={goToCalendly}>
							<div className="flex flex-row justify-between items-center">
								<CallIcon />
								<div className="ml-2"> Book a call</div>
							</div>
						</div>
						<div
							className="mt-6 mx-2 text-xl cursor-pointer bg-teal-600 hover:bg-teal-200 hover:text-2xl text-slate-900 font-semibold py-2 px-4 rounded transition-all duration-250 ease-out hover:ease-in"
							onClick={email}>
							<div className="flex flex-row justify-between items-center">
								<SendIcon />
								<div className="ml-2"> Send an E-mail </div>
							</div>
						</div>
					</div>
					<div className="flex flex-col lg:flex-row justify-between mt-4 text-xl w-full lg:w-2/3 items-center lg:items-end">
						<div className="my-4 mx-2 w-full lg:w-1/3 flex flex-col justify-between items-center lg:items-start h-5/6">
							<div>10+ satisfied clients</div>
							<div className="mt-6 mx-2 text-xl cursor-pointer bg-teal-600 hover:bg-teal-200 hover:text-2xl text-slate-900 font-semibold py-2 px-4 rounded transition-all duration-250 ease-out hover:ease-in">
								<div className="flex flex-row justify-between items-center">
									<div className="ml-2 text-sm">
										Know more
									</div>
								</div>
							</div>
						</div>
						<div className="my-4 mx-4 w-full lg:w-1/3 flex flex-col justify-between items-center lg:items-start h-5/6">
							<div>20+ languages, tools and stacks</div>
							<div className="mt-6 mx-2 text-xl cursor-pointer bg-teal-600 hover:bg-teal-200 hover:text-2xl text-slate-900 font-semibold py-2 px-4 rounded transition-all duration-250 ease-out hover:ease-in">
								<div className="flex flex-row justify-between items-center">
									<div className="ml-2 text-sm">
										Know more
									</div>
								</div>
							</div>
						</div>
						<div className="my-4 mx-4 w-full lg:w-1/3 flex flex-col justify-between items-center lg:items-start h-5/6">
							<div>Web 3.0 compatible sites</div>
							<div className="mt-6 mx-2 text-xl cursor-pointer bg-teal-600 hover:bg-teal-200 hover:text-2xl text-slate-900 font-semibold py-2 px-4 rounded transition-all duration-250 ease-out hover:ease-in">
								<div className="flex flex-row justify-between items-center">
									<div className="ml-2 text-sm">
										Know more
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="hidden 2xl:flex flex-col justify-evenly items-center w-1/2 motion-safe:animate-fadeInRight">
					<img
						className="shadow-inner rounded-3xl border-black border-8"
						width={1000}
						height={1000}
						src="/code-homepage.jpg"
					/>
				</div>
			</div>
			<div className="flex flex-col justify-evenly items-center text-4xl w-full">
				<div className="my-8 motion-safe:animate-fadeInBottom">
					Toolset
				</div>
				<div className="flex flex-col md:flex-row xl:flex-col justify-between items-center w-screen bg-teal-700 py-4">
					<div className="flex flex-col xl:flex-row justify-between items-center w-5/6 mx-4 py-2">
						<div className="my-8 xl:my-0 motion-safe:animate-fadeInLeft">
							<Image
								src={NextIcon}
								width={250}
								height={250}
								alt="Next JS"
								title="Next JS"
							/>
						</div>
						<div className="my-8 xl:my-0 motion-safe:animate-fadeInLeft">
							<Image
								src={ReactIcon}
								width={150}
								height={150}
								alt="React"
								title="React"
							/>
						</div>
						<div className="my-8 xl:my-0 motion-safe:animate-fadeInLeft">
							<Image
								src={NodeIcon}
								width={250}
								height={250}
								alt="Node JS"
								title="Node JS"
							/>
						</div>
						<div className="my-8 xl:my-0 motion-safe:animate-fadeInLeft">
							<Image
								src={MongoIcon}
								width={300}
								height={300}
								alt="MongoDB"
								title="MongoDB"
							/>
						</div>
					</div>
					<div className="flex flex-col xl:flex-row justify-between items-center w-5/6 mx-4 py-2">
						<div className="my-8 xl:my-0 motion-safe:animate-fadeInRight">
							<Image
								src={PostgresIcon}
								width={150}
								height={150}
								alt="PostgreSQL"
								title="PostgreSQL"
							/>
						</div>
						<div className="my-8 xl:my-0 motion-safe:animate-fadeInRight">
							<Image
								src={TailwindIcon}
								width={150}
								height={150}
								alt="Tailwind CSS"
								title="Tailwind CSS"
							/>
						</div>
						<div className="my-8 xl:my-0 motion-safe:animate-fadeInRight">
							<Image
								src={IonicIcon}
								width={250}
								height={250}
								alt="Ionic"
								title="Ionic"
							/>
						</div>
						<div className="my-8 xl:my-0 motion-safe:animate-fadeInLeft">
							<Image
								src={GitIcon}
								width={200}
								height={200}
								alt="Git"
								title="Git"
							/>
						</div>
					</div>
					<div className="flex flex-col xl:flex-row justify-between items-center w-5/6 mx-4 py-2">
						<div className="my-8 xl:my-0 motion-safe:animate-fadeInRight">
							<Image
								src={DockerIcon}
								width={300}
								height={300}
								alt="Docker"
								title="Docker"
							/>
						</div>
						<div className="my-8 xl:my-0 motion-safe:animate-fadeInLeft">
							<Image
								src={SolidityIcon}
								width={100}
								height={100}
								alt="Solidity"
								title="Solidty"
							/>
						</div>
						<div className="my-8 xl:my-0 motion-safe:animate-fadeInLeft">
							<Image
								src={HardhatIcon}
								width={300}
								height={300}
								alt="Hardhat"
								title="Hardhat"
							/>
						</div>
						<div className="my-8 xl:my-0 motion-safe:animate-fadeInLeft">
							<Image
								src={TruffleIcon}
								width={125}
								height={125}
								alt="Truffle"
								title="Truffle"
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-col justify-evenly items-center text-4xl w-full">
				<div className="my-8 motion-safe:animate-fadeInBottom">
					Projects completed in
				</div>
				<div className="flex flex-col md:flex-row xl:flex-col justify-between items-center w-screen bg-teal-700 py-4">
					<div className="flex flex-col xl:flex-row justify-between items-center w-5/6 mx-4 py-2">
						<div className="mx-4 my-8 xl:my-0 motion-safe:animate-fadeInLeft">
							<Image
								src={USFlag}
								width={150}
								height={150}
								alt="United States of America"
								title="United States of America"
							/>
						</div>
						<div className="mx-4 my-8 xl:my-0 motion-safe:animate-fadeInLeft">
							<Image
								src={UKFlag}
								width={150}
								height={150}
								alt="United Kingdom"
								title="United Kingdom"
							/>
						</div>
						<div className="mx-4 my-8 xl:my-0 motion-safe:animate-fadeInLeft">
							<Image
								src={IndiaFlag}
								width={120}
								height={120}
								alt="India"
								title="India"
							/>
						</div>
						<div className="mx-4 my-8 xl:my-0 motion-safe:animate-fadeInRight">
							<Image
								src={UAEFlag}
								width={160}
								height={160}
								alt="United Arab Emirates"
								title="United Arab Emirates"
							/>
						</div>
						<div className="mx-4 my-8 xl:my-0 motion-safe:animate-fadeInRight">
							<Image
								src={QatarFlag}
								width={210}
								height={210}
								alt="Qatar"
								title="Qatar"
							/>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
