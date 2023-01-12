import Navbar from './components/navbar'
import Hero from './components/hero'
import AboutMe from './components/aboutme'
import './App.css'
import MyProjects from './components/myprojects'
import MySkills from './components/myskills'
import Socials from './components/socials'

function App() {

  return (
    <div className="App">
      <div className='padding-lr-4 padding-tb-6'>
        <Navbar />
        <Hero />
      </div>
      <AboutMe />
      <MyProjects />
      <MySkills />
      <Socials />
    </div>
  )
}

export default App
