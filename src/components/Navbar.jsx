
// All components inside the app directory are React Server Components (RSC) by default, including special files and colocated components. 
// This allows you to automatically adopt Server Components with no extra work, and achieve great performance out of the box.

// use client "sits" between server-only and client code. It's placed at the top of a file, above imports, to define the cut-off point where it crosses the boundary 
// from the server-only to the client part. Once "use client" is defined in a file, all other modules imported into it, including child components, are considered part of the client bundle.
import {GithubIcon,LinkedInIcon,GmailIcon} from '../utils/Icons'
import {motion} from 'framer-motion'
import { fadeIn2,draw,bounceball} from '../utils/motion'
import {useState} from 'react';
import {useNavigate} from 'react-router-dom'
import '../App.css'

export default function Navbar () {
  const[darkMode,setDarkmode] = useState(true);
  const navigate = useNavigate();

  if(localStorage.getItem("data-theme")==='null'){
    localStorage.setItem("data-theme", "dark")
  }


 
  const themeContainer = document.getElementById('brightmodebox');
  const bulbOn = document.getElementById('lightBulbOn');
  const bulbOff = document.getElementById('lightBulbOff');


  function applyTheme (){

    if(localStorage.getItem("data-theme")==='dark'){
      themeContainer.classList.remove('dark') 
      bulbOn.classList.remove('hidden')
      bulbOff.classList.add('hidden')
    }else if (localStorage.getItem("data-theme")==='light'){
      themeContainer.classList.add('dark')
      bulbOn.classList.add('hidden')
      bulbOff.classList.remove('hidden')
    }
  }


  function toggleDarkmode(){
    
    const themeContainer = document.getElementById('brightmodebox');
    const bulbOn = document.getElementById('lightBulbOn');
    const bulbOff = document.getElementById('lightBulbOff');

      if((localStorage.getItem("data-theme")==='dark')){
        localStorage.setItem("data-theme", "light")
        themeContainer.classList.remove('dark') 
        bulbOn.classList.remove('hidden')
        bulbOff.classList.add('hidden')
      }else{
        localStorage.setItem("data-theme", "dark")
        themeContainer.classList.add('dark')
        bulbOn.classList.add('hidden')
        bulbOff.classList.remove('hidden')
      }
     
   
  }

  function ToggleBurguerBtn() {
  
    const ToggleMenu = document.getElementById("burguermenu")
    const BurguerBTN = document.getElementById("mobile-menu-button")
    
   
    if(ToggleMenu.classList.contains('hidden') == true){
      ToggleMenu.classList.remove('hidden')
    }else{
      ToggleMenu.classList.add('hidden')
    }
    BurguerBTN.classList.toggle('mobile-menu-button')
  }

  function scrollToSection () {
    navigate('/');

    setTimeout(()=>{
      const Contact =  document.getElementById('Contact')

      window.scrollTo({
        top: Contact.offsetTop,
        behavior: 'smooth'
    })

    },50)
  } 
  
 

  return(
  <motion.nav variants={fadeIn2('right','spring',0,0.8)} 
  initial='hidden' 
  whileInView='show'
  viewport={{once:true}} 
  className={` box-border hover:bg-gradient-to-r hover:from-slate-800  hover:to-sky-950 h-24 hover:text-neutral-200 py-3 relative  flex justify-end  lg:justify-between items-strech hover:transition-all hover:duration-500`}>
    <button id="mobile-menu-button" onClick={ToggleBurguerBtn} className='flex lg:hidden items-center w-14 h-12 absolute left-6 top-6 space-x-1 justify-evenly   cursor-pointer active:translate-y-0.5 '>
              <div className=' w-8 h-1 rounded absolute transition-all duration-300 bg-white
              before:content-[""]
              before:bg-white
              before:w-8 before:h-1
              before:rounded before:absolute
              before:transition-all
              before:duration-500
              before:-translate-y-2
              before:-translate-x-4
              before:transition-all before:duration-300
              after:content-[""]
              after:bg-white
              after:w-8 after:h-1
              after:rounded after:absolute
              after:transition-all
              after:duration-500
              after:translate-y-2
              after:-translate-x-4
              after:transition-all after:duration-300
              '></div>
    </button>
    <div id="burguermenu"  className='hidden lg:block md:w-1/2 xl:w-1/3 absolute lg:static top-24 left-0 justify-center  space-x-0.5  rounded-md lg:p-1 transition-all duration-550 ease-in-out z-50'>
      <div className='h-[40vh] w-screen lg:h-full lg:w-full bg-slate-800 lg:bg-inherit opacity-90 lg:opacity-100 flex-col flex lg:flex-row justify-evenly text-[28px] lg:text-[20px] font-semibold lg:font-bold items-center '>
        <motion.a href='/' className='cursor-pointer' whileHover={{ y: 2 }} whileTap={{ scale: 0.9 }} >Home</motion.a>
        <motion.a href='/about' className='cursor-pointer' whileHover={{ y: 2 }} whileTap={{ scale: 0.9 }}>About</motion.a>
        <motion.a href='/projects' className='cursor-pointer' whileHover={{ y: 2 }} whileTap={{ scale: 0.9 }}>Projects</motion.a>
        <motion.a  onClick={()=>scrollToSection()}  className='cursor-pointer' whileHover={{ y: 2 }} whileTap={{ scale: 0.9 }}>Contact</motion.a>
      </div>
    </div>
      {/* <motion.svg
        width="100"
        height="full"
        viewBox="0 0 600 600"
        initial="hidden"
        animate="visible"
        className=" absolute left-2/4  h-20 cursor-pointer border-none hidden "
        variants={bounceball}
        whileHover='hover'
        
      >
        <motion.text  x="50%" y="50%" textAnchor="middle"  dy=".4em" dx='0em'  fontSize='300px' letterSpacing='20px' className='font-semibold fill-slate-800 dark:fill-white hover:fill-white' >TV</motion.text>
        <motion.circle
          className="stroke-[30px] stroke-sky-400 fill-none text-white hover:shadow-inner hover:shadow-white "
          cx="300"
          cy="300"
          r="280"

          variants={draw}
          
        >
        </motion.circle>
     
      </motion.svg> */}
   
    <div className='h-full w-4/5 sm:w-2/3 md:w-1/2 lg:w-2/5 xl:w-1/3 2xl:w-1/4  flex  justify-between items-center '>
      <div className='flex items-center gap-x-4 md:gap-x-7 justify-center flex-wrap box-border h-16 '>
            <motion.a
              href="https://github.com/TadeuV"
              target={"_blank"}
              className="w-8 mx-3"
              whileHover={{ y: 2 }}
              whileTap={{ scale: 0.9 }}
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/tadeuvieira/"
              target={"_blank"}
              className="w-7 mx-3"
              whileHover={{ y: 2 }}
              whileTap={{ scale: 0.9 }}
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/tadeuvieiratks/"
              target={"_blank"}
              className="w-8 mx-3"
              whileHover={{ y: 2 }}
              whileTap={{ scale: 0.9 }}
            >
              <img src='/icons/instagram.svg' alt='Instagram Icon'></img>
            </motion.a>
            <motion.a
              href=""
              target={"_blank"}
              className="w-8 mx-3 hover:animate-pulse"
              whileHover={{ y: 2 }}
              whileTap={{ scale: 0.9 }}
            >
              <GmailIcon />
            </motion.a>
        </div>
        <div id='lightBulbbox' className=' h-full w-16 box-border  ' onClick={toggleDarkmode}>
          <motion.img id='lightBulbOff' src='/icons/light-off.svg' alt='Light Bulb Off' whileTap={{ y: 3 }} className='h-full w-full  flex justify-center cursor-pointer'/>
          <motion.img id='lightBulbOn' src='/icons/light-on.svg' alt='Light Bulb On' whileTap={{ y: 3 }} className='hidden h-full w-full flex justify-center cursor-pointer'/>
      </div>
    </div>
  </motion.nav>
  )
};

