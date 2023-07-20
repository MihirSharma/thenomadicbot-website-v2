import Image from "next/image";
import NextIcon from "../../public/Nextjs-logo.svg";
import SolidityIcon from "../../public/Solidity_logo.svg";
import EthereumIcon from "../../public/Ethereum_logo_2014.svg";

const TestimonialCarousel = () => {
	return (
		<div>
			<div className="motion-safe:animate-fadeInLeft">
				<div className="flex flex-row justify-evenly items-center py-16 bg-teal-600 motion-safe:animate-carouselLeft w-[300vw]">
					<div className="w-screen flex flex-row justify-center items-center">
						<Image
							src={NextIcon}
							width={150}
							height={150}
							alt="Next JS"
							title="Next JS"
						/>
					</div>
					<div className="w-screen flex flex-row justify-center items-center">
						<Image
							src={SolidityIcon}
							width={150}
							height={150}
							alt="Next JS"
							title="Next JS"
						/>
					</div>
					<div className="w-screen flex flex-row justify-center items-center">
						<Image
							src={EthereumIcon}
							width={150}
							height={150}
							alt="Next JS"
							title="Next JS"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TestimonialCarousel;
