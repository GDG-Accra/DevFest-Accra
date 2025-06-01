import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import BGImage from "../../assets/images/LandingPageImage/bgImage.svg";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import DPGenerator from "../../Components/DPGenerator/DPGenerator";

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
  {
    question:
      "What measures are being taken to ensure the safety and well-being of attendees at the in-person event?",
    answer:
      "We are committed to providing a safe environment. We will adhere to all local health guidelines and implement appropriate safety protocols, such as [mention specific measures like hand sanitizing stations, proper ventilation, crowd management, etc., if applicable closer to the date].",
  },
  {
    question: "Will there be networking opportunities at DevFest Accra?",
    answer:
      "Absolutely! DevFest Accra is a fantastic opportunity to connect with fellow developers, industry experts, and Google representatives. We will facilitate networking through dedicated breaks, and potentially, structured networking sessions or social events.",
  },
  {
    question:
      "Is DevFest Accra suitable for beginners, experienced developers, or both?",
    answer:
      "DevFest Accra is designed to cater to a wide range of skill levels. We aim to have sessions suitable for beginners looking to learn new technologies, as well as more advanced topics for experienced developers seeking deeper insights.",
  },
  {
    question: "Will food and beverages be provided at the in-person event?",
    answer:
      "Yes, we plan to provide [mention type of food/beverages, e.g., light refreshments, lunch] for in-person attendees. More details, including any provisions for dietary restrictions, will be shared closer to the event date. Please indicate any dietary needs during registration.",
  },
  {
    question: "What should I bring to DevFest Accra (in-person event)?",
    answer:
      "We recommend bringing a laptop if you plan to participate in workshops. You might also want to bring a notebook and pen for taking notes, a water bottle to stay hydrated, and business cards for networking.",
  },
  {
    question:
      "Will recordings of the virtual sessions be available after the event?",
    answer:
      "We aim to make recordings of the virtual sessions available after DevFest Accra. Details on where and how to access them (e.g., on our YouTube channel or website) will be announced.",
  },
  {
    question:
      "How can I stay updated on the latest news and announcements for DevFest Accra?",
    answer:
      "You can stay informed by following our social media pages ([Insert Social Media Links Here]), subscribing to our newsletter ([Insert Newsletter Sign-up Link Here]), and checking this website regularly.",
  },
  {
    question: "What are Google Developer Groups (GDGs)?",
    answer:
      "Google Developer Groups (GDGs) are local community-led groups for developers interested in Google developer technologies. GDG Accra is the local chapter that organizes DevFest Accra and other events throughout the year.",
  },
  {
    question: " Will there be swag or giveaways at DevFest Accra?",
    answer:
      "Yes, we typically have some exciting swag and potentially giveaways for attendees at DevFest Accra! Details about specific items will be announced closer to the event.",
  },
  {
    question: "Is there a Code of Conduct for DevFest Accra?",
    answer:
      "DevFest Accra operates under a strict Code of Conduct to ensure a safe, inclusive, and welcoming environment for all participants. We encourage everyone to review it on our website [Insert Code of Conduct Link Here].",
  },
  {
    question: "Can I volunteer to help make DevFest Accra a success?",
    answer:
      "Absolutely! We welcome volunteers to help with various aspects of the event. If you're interested in volunteering, please [Insert Volunteer Application Link Here] or contact us at [Insert Contact Email Here].",
  },
  {
    question: " Is there an age limit to attend DevFest Accra?",
    answer:
      "While there isn't a strict age limit, the content is generally geared towards individuals interested in technology and software development. Minors might need parental consent or accompaniment, please check our registration guidelines for specifics.",
  },
  // ...
  {
    question:
      "What if I can no longer attend the in-person event after registering?",
    answer:
      "If you register for the in-person event and can no longer attend, we kindly ask you to cancel your registration through the link provided in your confirmation email or by contacting us at [Insert Contact Email Here]. This allows us to free up a spot for someone else.",
  },
  {
    question:
      "I have another question that isn't covered here. How can I get in touch?",
    answer:
      "Please feel free to reach out to us at [Insert Contact Email Address Here] with any further questions or inquiries. We're happy to help!",
  },
];

const FAQ = () => {
  // Initially no FAQ is open
  const [openIds, setOpenIds] = useState<number[]>([]);

  const toggleFAQ = (id: number) => {
    if (openIds.includes(id)) {
      // close faq if already opened...
      setOpenIds(openIds.filter((openId) => openId !== id));
    } else {
      // add faq to opened list...
      setOpenIds([...openIds, id]);
    }
  };

  return (
    <section>
      {/* Background Image */}
      <div className='absolute inset-0 -z-10'>
        <div className='absolute inset-0 bg-white bg-opacity-90'>
          <img
            src={BGImage}
            alt='Background'
            className='w-full h-full object-cover'
          />
        </div>
      </div>

      <Navbar />

      {/* Main FAQs Content */}
      <section className='w-full max-w-7xl mx-auto mt-20 lg:px-16 px-5 relative'>
        {/* Red Background Glow... */}
        <div className='absolute w-[600px] h-[400px] top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-12 bg-red-100 opacity-30 rounded-full blur-3xl z-[-1]' />

        {/* page heading... */}
        <div className='text-center mb-16'>
          {/* <h2 className='max-w-xl mx-auto text-xl text-[#1E1E1E] mb-2 md:mb-4 font-sans'>
            FAQs
          </h2> */}
          <h3 className='text-4xl md:text-5xl font-bold text-[#1E1E1E] mb-4 font-inter'>
            Questions We Get Asked
          </h3>
          <p className='text-gray-700 max-w-2xl mx-auto'>
            Find answers about registration, event details, and what to <br />
            expect on the day.
          </p>
        </div>

        {/* faqs... */}
        <div className='flex flex-col lg:space-y-16 md:space-y-12 sm:space-y-8 space-y-4'>
          {faqs.map((faq, id) => (
            <div
              key={id}
              className='shadow-md rounded-lg bg-white p-5 overflow-hidden transition-all duration-300'
            >
              <button
                onClick={() => toggleFAQ(id)}
                aria-expanded={openIds.includes(id)}
                className='w-full flex gap-4 md:gap-6 items-center text-left'
              >
                {openIds.includes(id) ? (
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
                  openIds.includes(id) ? "max-h-48" : "max-h-0"
                } overflow-hidden`}
              >
                <p className='px-10 md:px-12 py-4 md:py-6 text-[#363049] text-sm font-inter'>
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
	  <DPGenerator/>
	  <Footer/>
    </section>
  );
};

export default FAQ;
