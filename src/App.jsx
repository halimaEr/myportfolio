import { BrowserRouter } from "react-router-dom"
import {About,Contact,Hero,Navbar} from './components'
import EducationSection from "./components/EducationSection"
import ProjectsSection from "./components/ProjectsSection"
import Footer from "./components/Footer"
export default function App() {

  return (
   <BrowserRouter>
   <div className="relative z-0 bg-primary">
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <Navbar/>
      <Hero />
    </div>
    <About/>
    <EducationSection />
    <ProjectsSection />
    <div className="relative z-0">
      <Contact />
      <Footer />
    </div>

   </div>
   </BrowserRouter>
   
  )
}


