import { Workflow } from "lucide-react"
import FeatureSection from "../components/FeatureSection"
import Herosection from "../components/Herosection"
import Navbar from "../components/Navbar"
import WorkFlow1 from "../components/WorkFlow1"
import Pricing from "../components/Pricing"
import AboutUs from "../components/AboutUs"
import Footer from "../components/Footer"

const Landingpage = () => {
  return (
    <>
    <Navbar/>
    
    <div className="max-w-7xl mx-auto pt-20 px-6">
    <Herosection/>
    <FeatureSection/>
    <WorkFlow1/>
    <Pricing/>
    <AboutUs/>
    <Footer/>
    
    
    

    </div>
    </>
  )
}

export default Landingpage
