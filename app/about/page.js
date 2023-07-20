import About from "./About";
import TestimonialCarousel from "./TestimonialCarousel";

const page = () => {
	return (
		<div className="overflow-x-hidden">
			<TestimonialCarousel />
			<About />
		</div>
	);
};

export default page;
