import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

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
  // Initially no FAQ is open
  const [activeId, setActiveId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    // Toggle the current item only
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className='w-full max-w-7xl mx-auto md:py-20 lg:px-16 px-5 '>
      <div className='text-center mb-16'>
        <h2 className='max-w-xl mx-auto text-xl text-[#1E1E1E] mb-2 md:mb-4 font-sans'>
          FAQs
        </h2>
        <h3 className='text-4xl lg:text-5xl font-bold  text-[#1E1E1E] mb-4'>
          Questions We Get Asked
        </h3>
        <p className='max-w-xl mx-auto text-gray-600  mb-2 text-base sm:text-lg md:text-xl'>
          Find answers about registration, event details, and what to expect on
          the day.
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8'>
        {faqs.map((faq, id) => (
          <div
            key={id}
            className='shadow-md rounded-lg bg-white p-5 overflow-hidden transition-all duration-300 '
          >
            <button
              onClick={() => toggleFAQ(id)}
              aria-expanded={activeId === id}
              className='w-full flex gap-4 md:gap-6 items-center text-left'
            >
              {activeId === id ? (
                <Minus size={24} className='text-[#52BD95] shrink-0' />
              ) : (
                <Plus size={24} className='text-[#1B1139] shrink-0' />
              )}
              <span className='text-left md:text-lg font-semibold font-inter text-[#1B1139]'>
                {faq.question}
              </span>
            </button>
            <div
              className={`transition-all duration-300 ease-in-out ${
                activeId === id ? "max-h-48" : "max-h-0"
              } overflow-hidden`}
            >
              <p className='px-10 md:px-12 py-4 md:py-6 text-[#363049] text-sm font-inter'>
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className='flex justify-center mt-12'>
        <Link to='/devfest/faqs'>
          <button className='bg-blue-500 hover:bg-blue-600 transition-colors text-white py-3 px-10 rounded-md flex items-center justify-center gap-2 shadow-md'>
            <span className='text-base font-medium text-white font-inter'>
              More Questions
            </span>
            <div className='bg-white rounded-full p-1 w-5 h-5'>
              <img
                src={assets.gifs.faqLinkGif}
                alt='icon'
                className='w-full h-full object-contain'
              />
            </div>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default FAQSection;
