
import {Navbar,Footer} from './components'
import {Hero,Projects,Contact} from './sections'
import {Route,Routes} from 'react-router-dom'
import AboutPage from './components/AboutPage'
import ProjectsPage from './components/ProjectsPage'
import './App.css'


export default function App() {
  

  return (
    <div id='brightmodebox' className='dark'>
      <div className='bg-gradient-to-r from-gray-300 to-neutral-100 dark:bg-gradient-to-r dark:from-slate-800  dark:to-sky-900 text-blue-950 dark:text-neutral-200 box-border'>
        <Navbar />
          <Routes>
            <Route exact path='/' element={
              <>
                <Hero />
                <Projects/>
                <Contact/>
              </>
            }>
              
            </Route>
            <Route path='/about' element={<AboutPage></AboutPage>}>
            </Route>
            <Route path ='/projects' element={<ProjectsPage></ProjectsPage>}>
            </Route>
          </Routes>
        <Footer />
      </div>
    </div>
  )
}


