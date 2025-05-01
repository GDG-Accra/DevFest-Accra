
import SpeakersSection from '../Components/SpeakersSection/SpeakersSection'
import { AboutSection } from '../Components/AboutSection/AboutSection'
import ThrowbackSection from '../Components/ThrowbackSection/ThrowbackSection'



const Homepage = () => {
  return (
    <div>
       <AboutSection />
       <ThrowbackSection/>
       <SpeakersSection/>
    </div>
  )
}

export default Homepage