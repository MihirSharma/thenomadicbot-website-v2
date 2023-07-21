import Navbar from "./Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const metadata = {
	title: "The Nomadic Bot",
	description: "You one stop for all your development needs",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className="no-scrollbar">
			{/* <header></header> */}
			<body className={inter.className}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
