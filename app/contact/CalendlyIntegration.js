"use client";
import React, { useEffect } from "react";
import Head from "next/head";

const CalendlyIntegration = () => {
	useEffect(() => {
		const head = document.querySelector("head");
		const script = document.createElement("script");
		script.setAttribute(
			"src",
			"https://assets.calendly.com/assets/external/widget.js"
		);
		head.appendChild(script);
	}, []);
	return (
		<div className="no-scrollbar mx-16">
			<div id="schedule_form">
				<div
					className="calendly-badge-widget"
					data-url="https://calendly.com/mihirsharmaofficial"
					style={{
						width: "600px",
						height: "600px",
					}}
				/>
			</div>
		</div>
	);
};

export default CalendlyIntegration;
