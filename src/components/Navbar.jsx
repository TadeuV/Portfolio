
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
    
    // const themeContainer = document.getElementById('brightmodebox');
    // const bulbOn = document.getElementById('lightBulbOn');
    // const bulbOff = document.getElementById('lightBulbOff');

      if((localStorage.getItem("data-theme")==='dark')){
        localStorage.setItem("data-theme", "light")
        themeContainer.classList.remove('dark') 
        bulbOn.classList.remove('hidden')
        bulbOff.classList.add('hidden')
      }else if (localStorage.getItem("data-theme")==='light'){
        localStorage.setItem("data-theme", "dark")
        themeContainer.classList.add('dark')
        bulbOn.classList.add('hidden')
        bulbOff.classList.remove('hidden')
      }
     
   
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
  
  if(themeContainer==='null'){
    return
  }else{
    applyTheme();
  }

  return(
  <motion.nav variants={fadeIn2('right','spring',0,0.8)} 
  // initial='hidden' 
  // whileInView='show' 
  className={` box-border hover:bg-gradient-to-r hover:from-slate-800  hover:to-sky-950 h-24 hover:text-neutral-200 py-3 relative  flex justify-between items-strech hover:transition-all hover:duration-500`}>
    <div className='h-full w-2/6  flex justify-evenly text-[20px] font-bold items-center'>
      <motion.a href='/' className='cursor-pointer' whileHover={{ y: 2 }} whileTap={{ scale: 0.9 }} >Home</motion.a>
      <motion.a href='/about' className='cursor-pointer' whileHover={{ y: 2 }} whileTap={{ scale: 0.9 }}>About</motion.a>
      <motion.a href='/projects' className='cursor-pointer' whileHover={{ y: 2 }} whileTap={{ scale: 0.9 }}>Projects</motion.a>
      <motion.a  onClick={()=>scrollToSection()}  className='cursor-pointer' whileHover={{ y: 2 }} whileTap={{ scale: 0.9 }}>Contact</motion.a>
    </div>
      <motion.svg
        // width="100"
        // height="full"
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
     
      </motion.svg>
   
    <div className='h-full w-1/3 2xl:w-1/4  flex  justify-between items-center'>
      <div className='flex items-center gap-x-7 justify-center flex-wrap box-border'>
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

