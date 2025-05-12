import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import LinkGIF from "../../assets/images/FAQs/link.gif";

interface FAQItem {
	question: string;
	answer: string;
}

const faqs: FAQItem[] = [
	{
		question: "What is DevFest Accra?",
		answer:
			"It's a community-run developer festival in Accra, bringing together tech enthusiasts for both virtual and in-person sessions.",
	},
	{
		question: "When and where will DevFest Accra 2025 take place?",
		answer:
			"The in-person event will be held on [Insert Date Here] at [Insert Venue Here]. Details for the virtual sessions will be announced soon.",
	},
	{
		question: "How can I register for DevFest Accra?",
		answer:
			"Is there a cost to attend? You can register via a link on this website. Attendance is free for both virtual and in-person events!",
	},
	{
		question: "What kind of talks and workshops can I expect at DevFest Accra?",
		answer:
			"Expect sessions on various Google technologies and other relevant tech topics in both talk and workshop formats.",
	},
	{
		question: "How can I become a speaker for DevFest Accra?",
		answer:
			"If you're interested in speaking, please apply through this link: [Insert Speaker Application Link Here].",
	},
	{
		question: "How can I become a sponsor for DevFest Accra?",
		answer:
			"Information on sponsoring opportunities and how to get involved is available on a dedicated section of this website.",
	},
];

const FAQSection = () => {
	const [activeId, setActiveId] = useState<number | null>(0);

	const toggleFAQ = (id: number) => {
		const isOpen = activeId === id;

		setActiveId(isOpen ? null : id);
	};

	return (
		<section className=" w-full max-w-7xl mx-auto py-32 px-16">
			<div className="text-center mb-16">
				<h2 className="max-w-xl mx-auto text-xl text-[#1E1E1E] mb-2 md:mb-4 font-sans">
					FAQs
				</h2>
				<h3 className="text-4xl md:text-5xl font-bold text-[#1E1E1E] mb-4 font-inter">
					Questions We Get Asked
				</h3>
				<p className="max-w-xl mx-auto text-xl text-[#444444] mb-2 font-inter">
					Find answers about registration, event details, and what to <br />
					expect on the day.
				</p>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
				{faqs.map((faq, id) => (
					<div
						key={id}
						className="shadow-md rounded-lg bg-white p-5 overflow-hidden transition-all duration-300 "
					>
						<button
							onClick={() => toggleFAQ(id)}
							aria-expanded={activeId === id}
							className="w-full flex gap-4 md:gap-6 items-center text-left"
						>
							{activeId === id ? (
								<Minus size={24} className="text-[#52BD95] shrink-0" />
							) : (
								<Plus size={24} className="text-[#1B1139] shrink-0" />
							)}
							<span className="text-left md:text-lg font-semibold font-inter text-[#1B1139]">
								{faq.question}
							</span>
						</button>
						<div
							className={`transition-all duration-300 ease-in-out ${
								activeId === id ? "max-h-48" : "max-h-0"
							} overflow-hidden`}
						>
							<p className="px-10 md:px-12 py-4 md:py-6 text-[#363049] text-sm font-inter">
								{faq.answer}
							</p>
						</div>
					</div>
				))}
			</div>
			<div className="flex justify-center mt-16">
				<button className="bg-[#4285F4] text-[#FDFDFD] font-bold font-inter text-xl px-8 py-4 rounded-xl flex items-center gap-2 hover:bg-blue-600 transition-colors">
					More Question
					<img
						src={LinkGIF}
						alt="rotating link gif"
						className="bg-white rounded-full p-1 w-7"
					/>
				</button>
			</div>
		</section>
	);
};

export default FAQSection;
