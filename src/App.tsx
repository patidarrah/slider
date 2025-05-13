

import './App.css'
import ExamsSection from './components/ExamsSection'
import FAQSection from './components/FAQSection'
import FooterSection from './components/FooterSection'
import InfoCards from './components/InfoCards'
import Navbar from './components/Navbar'
import CustomSlider from './components/Slider'
import StatsSection from './components/StatsSection'

function App() {


  return (
    <>
    <Navbar/>
      <CustomSlider/>
      <ExamsSection/>
      <InfoCards/>
      <StatsSection/>
      <FAQSection/>
      <FooterSection/>
    </>
  )
}

export default App
