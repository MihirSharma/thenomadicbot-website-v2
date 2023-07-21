import React from "react";
import ERC20 from "../../public/ERC20.png";
import Image from "next/image";
import Link from "next/link";

const About = () => {
	return (
		<div className="flex flex-col justify-evenly items-center w-screen mt-8">
			<div className="xl:text-5xl text-base my-16 font-semibold motion-safe:animate-fadeInTop">
				About The Nomadic Bot
			</div>
			<div className="flex flex-col justify-evenly items-center w-full xl:text-3xl text-large">
				<div className="w-2/3 motion-safe:animate-fadeIn text-center">
					<div className="my-8">
						I am a Full Stack Developer. I specialize in MERN stack
						develoment. For the uninitiated, MERN means MongoDB,
						ExpressJS, React and NodeJS. I have extensive experience
						in Business Intelligence. That means if you need your
						data from a million sources converted into information
						that anyine can understand, then I'm your guy. I'm
						particularly interested in developing for Web 3.0
						startups. I already know how to work with Hardhat,
						Truffle, Ethers.js and Web3.js. I have a ton of
						experience working with clients all around the globe.
					</div>
					<div className="my-8">
						Are you in a different time-zone? Don't worry. I'll
						match your time. No worries on that end. Need someone to
						prototype your application? Or do you want to find out
						the best technologies to use for your brilliant idea? Go
						ahead and book a call. I'll guide you through the whole
						process of building your application. I'll tell you the
						tools you need, the people you need to hire and even the
						roadmap, to take your idea from a thought to reality.
						That must be expensive right? Not at all. We'lL build a
						plan that's right for YOU.
					</div>
					<div className="my-8">
						So what are you waiting for... Christmas??? Write me an{" "}
						<Link
							href="mailto:mihir@thenomadicbot.com"
							className="text-teal-400">
							E-mail
						</Link>{" "}
						now.
					</div>
					<div className="my-8">
						Or book your first call on my{" "}
						<Link
							href="https://calendly.com/mihirsharmaofficial"
							className="text-teal-400 inline"
							target="_blank">
							calendly page
						</Link>{" "}
						at no charge.
					</div>
				</div>
				{/* <div className="flex flex-col justify-between items-center px-8 my-16 w-screen">
					<div className="w-full flex flex-row xl:flex-col justify-between items-center motion-safe:animate-fadeIn">
						<div className="flex flex-col xl:flex-row justify-between items-center w-2/3 my-16 xl:text-4xl text-base">
							<div className="motion-safe:animate-fadeInLeft">
								ERC-20 token for internal organisation use
							</div>
							<div className="my-4 xl:mx-16 motion-safe:animate-fadeInRight">
								<Image
									src={ERC20}
									width={500}
									height={500}
									alt={"ERC-20 token"}
									title="ERC-20 token"
								/>
							</div>
						</div>
					</div>
					<div className="w-full flex flex-row xl:flex-col justify-between items-center motion-safe:animate-fadeIn bg-teal-600">
						<div className="flex flex-col-reverse xl:flex-row justify-between items-center w-2/3 my-16 xl:text-4xl text-base">
							<div className="my-4 xl:mx-16 motion-safe:animate-fadeInLeft">
								<Image
									src={ERC20}
									width={500}
									height={500}
									alt={"ERC-20 token"}
									title="ERC-20 token"
								/>
							</div>
							<div className="motion-safe:animate-fadeInRight">
								ERC-20 token for internal organisation use
							</div>
						</div>
					</div>
					<div className="w-full flex flex-row xl:flex-col justify-between items-center motion-safe:animate-fadeIn">
						<div className="flex flex-col xl:flex-row justify-between items-center w-2/3 my-16 xl:text-4xl text-base">
							<div className="motion-safe:animate-fadeInLeft">
								ERC-20 token for internal organisation use
							</div>
							<div className="my-4 xl:mx-16 motion-safe:animate-fadeInRight">
								<Image
									src={ERC20}
									width={500}
									height={500}
									alt={"ERC-20 token"}
									title="ERC-20 token"
								/>
							</div>
						</div>
					</div>
					<div className="w-full flex flex-row xl:flex-col justify-between items-center motion-safe:animate-fadeIn bg-teal-600">
						<div className="flex flex-col-reverse xl:flex-row justify-between items-center w-2/3 my-16 xl:text-4xl text-base">
							<div className="my-4 xl:mx-16 motion-safe:animate-fadeInLeft">
								<Image
									src={ERC20}
									width={500}
									height={500}
									alt={"ERC-20 token"}
									title="ERC-20 token"
								/>
							</div>
							<div className="motion-safe:animate-fadeInRight">
								ERC-20 token for internal organisation use
							</div>
						</div>
					</div>
					<div className="w-full flex flex-row xl:flex-col justify-between items-center motion-safe:animate-fadeIn">
						<div className="flex flex-col xl:flex-row justify-between items-center w-2/3 my-16 xl:text-4xl text-base">
							<div className="motion-safe:animate-fadeInLeft">
								ERC-20 token for internal organisation use
							</div>
							<div className="my-4 xl:mx-16 motion-safe:animate-fadeInRight">
								<Image
									src={ERC20}
									width={500}
									height={500}
									alt={"ERC-20 token"}
									title="ERC-20 token"
								/>
							</div>
						</div>
					</div>
				</div> */}
			</div>
		</div>
	);
};

export default About;
