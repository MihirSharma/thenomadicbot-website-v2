import React from "react";
import CalendlyIntegration from "./CalendlyIntegration";
import DirectMessage from "./DirectMessage";

const Contact = () => {
	return (
		<div className="flex flex-col xl:flex-row justify-evenly items-center mx-16 my-16">
			<DirectMessage />
		</div>
	);
};

export default Contact;
