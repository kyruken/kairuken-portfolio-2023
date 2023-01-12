import Navbar from './components/navbar'
import Hero from './components/hero'
import AboutMe from './components/aboutme'
import './App.css'
import MyProjects from './components/myprojects'
import OtherProjects from './components/otherprojects'
import MySkills from './components/myskills'
import Socials from './components/socials'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Hero /> 
      <AboutMe />
      <MyProjects />
      <OtherProjects />
      <MySkills />
      <Socials />
    </div>
  )
}

export default App
