import React from 'react'
import SpeakersSection from '../Components/SpeakersSection/SpeakersSection'
import { AboutSection } from '../Components/AboutSection/AboutSection'



const Homepage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-[#F9F9F9]">
       <SpeakersSection/>
       <AboutSection />
    </div>
  )
}

export default Homepage