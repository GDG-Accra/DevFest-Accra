import React, { useState, useEffect, useRef } from "react";
import { Volume2, Users, Menu, X } from "lucide-react";
import { TbMessage2Question } from "react-icons/tb";
import DFLogo from "../../assets/images/Logos/DFLogo-Accra.svg";

interface NavbarProps {
	currentPage?: "speakers" | "team" | "faqs" | "home";
}

const Navbar: React.FC<NavbarProps> = ({ currentPage }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);
	const buttonRef = useRef<HTMLButtonElement>(null);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const getNavLinkClass = (page: string) => {
		const base = "flex items-center transition duration-200";
		const active = "text-blue-600 border-b-2 border-blue-600";
		const inactive = "text-gray-800 hover:text-gray-600";

		return `${base} ${currentPage === page ? active : inactive}`;
	};

	// Close menu when clicking outside
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				isMenuOpen &&
				menuRef.current &&
				!menuRef.current.contains(event.target as Node) &&
				buttonRef.current &&
				!buttonRef.current.contains(event.target as Node)
			) {
				setIsMenuOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isMenuOpen]);

	return (
		<nav className="relative z-10 flex items-center justify-between lg:px-10 lg:py-3 mt-5 bg-opacity-90 ">
			{/* Left side with DevFest Logo and Year  shadow-sm*/}
			<div className="flex items-center">
				<div className="flex items-center">
					{/* DevFest logo as an image */}
					<a
						href="/"
						className={getNavLinkClass("home")}
						aria-current={currentPage === "home" ? "page" : undefined}
					>
						<img src={DFLogo} alt="DevFest" className="h-10 mt-2 lg:mt-0" />
					</a>
				</div>
			</div>

			{/* Desktop Navigation */}
			<div className="hidden md:flex items-center space-x-6">
				<a
					href="devfest/speakers"
					className={getNavLinkClass("speakers")}
					aria-current={currentPage === "speakers" ? "page" : undefined}
				>
					<Volume2 className="mr-1 h-5 w-5" />
					<span className="font-medium">Speakers</span>
				</a>

				<a
					href="devfest/team"
					className={getNavLinkClass("team")}
					aria-current={currentPage === "team" ? "page" : undefined}
				>
					<Users className="mr-1 h-5 w-5" />
					<span className="font-medium">Team</span>
				</a>

				<a
					href="devfest/faqs"
					className={getNavLinkClass("faqs")}
					aria-current={currentPage === "faqs" ? "page" : undefined}
				>
					<TbMessage2Question className="mr-1 h-5 w-5" />
					<span className="font-medium">FAQs</span>
				</a>
			</div>

			{/* Mobile Menu Button with Animation */}
			<button
				ref={buttonRef}
				className="md:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors duration-200"
				onClick={toggleMenu}
				aria-label="Toggle menu"
			>
				<div className="relative w-6 h-6 flex items-center justify-center">
					<Menu
						className={`absolute h-6 w-6 text-gray-800 transition-all duration-300 ${
							isMenuOpen
								? "opacity-0 rotate-90 scale-0"
								: "opacity-100 rotate-0 scale-100"
						}`}
					/>
					<X
						className={`absolute h-6 w-6 text-gray-800 transition-all duration-300 ${
							isMenuOpen
								? "opacity-100 rotate-0 scale-100"
								: "opacity-0 rotate-90 scale-0"
						}`}
					/>
				</div>
			</button>

			{/* Mobile Menu with Animation */}
			<div
				ref={menuRef}
				className={`absolute top-full left-0 right-0 bg-white shadow-md py-4 px-4 md:hidden flex flex-col space-y-4 transform transition-all duration-300 ${
					isMenuOpen
						? "opacity-100 translate-y-0"
						: "opacity-0 -translate-y-2 pointer-events-none"
				}`}
			>
				<a
					href="#speakers"
					className={getNavLinkClass("speakers")}
					onClick={toggleMenu}
				>
					<Volume2 className="mr-2 h-5 w-5" />
					<span className="font-medium">Speakers</span>
				</a>

				<a
					href="#team"
					className={getNavLinkClass("team")}
					onClick={toggleMenu}
				>
					<Users className="mr-2 h-5 w-5" />
					<span className="font-medium">Team</span>
				</a>

				<a
					href="#faqs"
					className={getNavLinkClass("faqs")}
					onClick={toggleMenu}
				>
					<TbMessage2Question className="mr-2 h-5 w-5" />
					<span className="font-medium">FAQs</span>
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
