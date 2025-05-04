import React from "react";
import SpeakersSection from "../Components/SpeakersSection/SpeakersSection";
import { AboutSection } from "../Components/AboutSection/AboutSection";
import FAQSection from "../Components/FAQSection/FAQSection";

const Homepage = () => {
	return (
		<div>
			<AboutSection />
			<SpeakersSection />
			<FAQSection />
		</div>
	);
};

export default Homepage;
