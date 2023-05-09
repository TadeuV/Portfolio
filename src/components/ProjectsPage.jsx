import '../App.css'
import { motion} from 'framer-motion'
import { fadeIn2,draw,bounceball,staggerContainer,footerVariants,fadeIn3,fadeIn4} from '../utils/motion'
import ProjectSlider from '../sections/Slider/Project1Slider'
import ProjectSlider2 from '../sections/Slider/Project2Slider'
import ProjectSlider3 from '../sections/Slider/Project3Slider'
import ProjectSlider4 from '../sections/Slider/Project4Slider'
import ProjectSlider5 from '../sections/Slider/Project5Slider'

import ProjectSliderMobile from '../sections/Slider/Project1Slider-Mobile'
import ProjectSlider2Mobile from '../sections/Slider/Project2Slider-Mobile'
import ProjectSlider3Mobile from '../sections/Slider/Project3Slider-Mobile'
import ProjectSlider4Mobile from '../sections/Slider/Project4Slider-Mobile'
import ProjectSlider5Mobile from '../sections/Slider/Project5Slider-Mobile'


export default function ProjectsPage () {

  return(
    <section className=' w-full box-border '>
      <motion.div className='flex-col flex justify-center h-full items-center border-red-500  py-10 pt-40 '
       variants={staggerContainer}
       initial='hidden'
       whileInView='show'
       viewport={{once:false, amount: 0.25}}
      >
        <motion.div className=' w-5/6 2xl:w-3/4 flex-col-reverse xl:flex-row  h-[800px]  lg:h-[650px] xl:h-[480px]  border-blue-500 flex items-center relative mb-32 '
          variants={fadeIn3('down','tween',0.1,0.7)} initial='hidden' whileInView='show' viewport={{ once: true }}
        >
          <div className=' h-[55%] lg:h-[38%] w-[99%] md:w-5/6 lg:w-full xl:h-4/5 xl:w-1/3 blur-lg xl:blur-md  bg-gradient-to-r from-lime-400 via-sky-400 to-purple-600   '></div>
          <motion.div className='h-full  w-[100%] sm:w-[92%] lg:w-full xl:w-4/6 border-green-200  box-border cursor-pointer relative  ' initial='hidden' whileHover='hover'>
            <div className='hidden lg:block '>
            <ProjectSlider></ProjectSlider>
            </div>
            <div className='block lg:hidden '>
            <ProjectSliderMobile></ProjectSliderMobile>
            </div>
            <motion.div
             variants={fadeIn4('right','tween',0,0.5)}
             className='absolute bottom-1 right-12 sm:right-28 md:right-36 lg:right-0 h-[99.2%] w-[290px] sm:w-[200px] bg-neutral-200 dark:bg-neutral-800  flex items-end justify-center  pb-80 xl:pb-10 ' 
            >
              <motion.a
                href='/about'
                className="bg-zinc-300 text-emerald-600 tracking-wider font-bold text-lg py-1 px-4 rounded w-28 justify-center flex items-center" 
                whileTap={{ scale: 0.9 }}>
                VISIT
            </motion.a>
            </motion.div>
          </motion.div>
          <div className=' bg-neutral-200 dark:bg-neutral-800  
             w-full h-[38%] md:w-5/6 lg:w-full lg:h-[28%]  xl:h-3/4   xl:w-2/5 left-30 xl:left-0 bottom-0  xl:bottom-auto absolute opacity-90  dark:text-white box-border z-10 flex flex-col justify-between items-center gap-y-2  px-6 md:px-10 py-5 pt-5 lg:py-2 lg:pt-2 xl:pt-10'>
            <div className="font-bold text-3xl font-['Consolas'] ">GrocerApp</div>
            <div className="text-center dark:text-slate-400 font-mono">A CRUD Web App shopping list implemented with Mongo Realm. Multi-session app in real-time update. Authentication implemented with Mongoose and JSON Web Token. The idea of this App came from the necessity of making a grocery list with my wife. </div>
            <div className='dark:text-slate-400 font-mono border-t w-full text-center pt-1 border-neutral-400'>React Sass Mongo-Realm NodeJS Express Mongoose </div>
          </div>
          <div className=' bg-neutral-800 h-[38%] w-full lg:h-[28%] xl:h-3/4 md:w-5/6 lg:w-full  xl:w-2/6 left-30 xl:left-0 absolute'></div>
        </motion.div>

        <motion.div className='w-5/6 2xl:w-3/4 flex-col xl:flex-row  h-[800px]  lg:h-[650px] xl:h-[480px]  border-blue-500 flex items-center relative mb-32 '
          variants={fadeIn3('down','tween',0.1,0.7)} initial='hidden' whileInView='show' viewport={{ once: true }}
        >
          <motion.div className='h-full  w-[100%] sm:w-[92%] lg:w-full xl:w-4/6 border-green-200  box-border cursor-pointer relative' initial='hidden' whileHover='hover'>
            <div className='hidden lg:block '>
            <ProjectSlider2></ProjectSlider2>
            </div>
            <div className='block lg:hidden'>
            <ProjectSlider2Mobile></ProjectSlider2Mobile>
            </div>
            <motion.div
             variants={fadeIn4('left','tween',0,0.5)}
             className='absolute bottom-1 left-12 sm:left-24 md:left-36 lg:left-0 h-[99.2%] w-[75%] sm:w-[200px]  pb-80 xl:pb-10 bg-neutral-200 dark:bg-neutral-800  flex items-end justify-center ' 
            >
              <motion.a
                href='/about'
                className="bg-zinc-300  text-emerald-600 tracking-wider font-bold text-lg py-1 px-4 rounded w-28 justify-center flex items-center" 
                whileTap={{ scale: 0.9 }}>
                VISIT
            </motion.a>
            </motion.div>
          </motion.div>
          <div className=' h-[56%] lg:h-[38%] w-[99%] md:w-5/6 lg:w-full xl:h-4/5 xl:w-1/3 bg-gradient-to-r from-blue-500 via-white to-red-500  blur-md'></div>
          <div className=' w-full h-[38%] md:w-5/6 lg:w-full lg:h-[28%]  xl:h-3/4   xl:w-2/5 right-30 xl:right-0 bottom-0 0 xl:bottom-auto px-6 md:px-10 py-5 pt-5 lg:py-2 lg:pt-2 xl:pt-10  / bg-neutral-200 dark:bg-neutral-800   absolute opacity-90  dark:text-white box-border z-10 flex flex-col justify-between items-center gap-y-2 '>
            <div className="font-bold text-3xl font-['Consolas'] ">ChatGPT Replica</div>
            <div className="text-center dark:text-slate-400 font-mono">A Web 4.0 App,  ChatGPT implemented with Tailwind and Speech-to-Text recognition capabilities. In order to get in touch with the new era of internet, I felt the necessity of creating something with AI. My choice was ChatGPT.</div>
            <div className='dark:text-slate-400 font-mono border-t w-full text-center pt-1 border-neutral-400'>React Taillwind Speech-Recognition Rest-API </div>
          </div>
          <div className=' bg-neutral-800  right:30 xl:right-0 h-[38%] w-full lg:h-[28%] xl:h-3/4 md:w-5/6 lg:w-full  xl:w-2/6 bottom-0 xl:bottom-auto absolute'></div>
        </motion.div>

        {/* <motion.div className='w-5/6 2xl:w-3/4 flex-col-reverse xl:flex-row  h-[800px]  lg:h-[650px] xl:h-[480px] border-blue-500 flex items-center relative mb-32'
          variants={fadeIn3('down','tween',0.1,0.7)} initial='hidden' whileInView='show' viewport={{ once: true }}
        >
          <div className=' h-[60%] lg:h-[38%] w-[99%] md:w-5/6 lg:w-full xl:h-4/5 xl:w-1/3 bg-gradient-to-r from-pink-600 via-pink-300 to-emerald-500  blur-md'></div>
          <motion.div className='h-full  w-[100%] sm:w-[92%] lg:w-full xl:w-4/6 border-green-200  box-border cursor-pointer relative' initial='hidden' whileHover='hover'>
            <div className='hidden lg:block '>
            <ProjectSlider3></ProjectSlider3>
            </div>
            <div className='block lg:hidden'>
            <ProjectSlider3Mobile></ProjectSlider3Mobile>
            </div>
            <motion.div
             variants={fadeIn4('right','tween',0,0.5)}
             className='absolute bottom-1  right-12 sm:right-28 md:right-36 lg:right-0 h-[99.2%] w-[75%] sm:w-[200px] pb-80 xl:pb-10  bg-neutral-200 dark:bg-neutral-800  flex items-end justify-center  ' 
            >
              <motion.a
                href='/about'
                className="bg-zinc-300  text-emerald-600 tracking-wider font-bold text-lg py-1 px-4 rounded w-28 justify-center flex items-center" 
                whileTap={{ scale: 0.9 }}>
                VISIT
            </motion.a>
            </motion.div>
          </motion.div>
          <div className='  bg-neutral-200 dark:bg-neutral-800 bg-neutral-200 dark:bg-neutral-800 w-full h-[38%] md:w-5/6 lg:w-full lg:h-[28%]  xl:h-3/4   xl:w-2/5 left-30 xl:left-0 bottom-0  xl:bottom-auto px-6 md:px-10 py-5 pt-5 lg:py-2 lg:pt-2 xl:pt-10 absolute opacity-90  dark:text-white box-border z-10 flex flex-col justify-between items-center gap-y-2 '>
            <div className="font-bold text-3xl font-['Consolas'] ">Watch your Dreams</div>
            <div className="text-center dark:text-slate-400 font-mono">A Watch Ecommerce web page designed only with Html, CSS. All functionalities applied by DOM manipulation. Shopping Cart, Landing page and filtered products pages were created.</div>
            <div className='dark:text-slate-400 font-mono border-t w-full text-center pt-1 border-neutral-400'>React Tailwind </div>
          </div>
          <div className=' bg-neutral-800 h-[38%] w-full lg:h-[28%] xl:h-3/4 md:w-5/6 lg:w-full  xl:w-2/6 left-30 xl:left-0 absolute'></div>
        </motion.div> */}

        <motion.div className='w-5/6 2xl:w-3/4 flex-col xl:flex-row  h-[800px]  lg:h-[650px] xl:h-[480px] border-blue-500 flex items-center relative mb-32'
          variants={fadeIn3('down','tween',0.1,0.7)} initial='hidden' whileInView='show' viewport={{ once: true }}
        >
          <motion.div className='h-full  w-[100%] sm:w-[92%] lg:w-full xl:w-4/6 border-green-200  box-border cursor-pointer relative  ' initial='hidden' whileHover='hover'>
            <div className='hidden lg:block '>
            <ProjectSlider4></ProjectSlider4>
            </div>
            <div className='block lg:hidden '>
            <ProjectSlider4Mobile></ProjectSlider4Mobile>
            </div>
            <motion.div
             variants={fadeIn4('left','tween',0,0.5)}
             className='absolute bottom-1 left-12 sm:left-24 md:left-36 lg:left-0 h-[99.2%] w-[75%] sm:w-[200px]  pb-80 xl:pb-10   bg-neutral-200 dark:bg-neutral-800 flex items-end justify-center ' 
            >
              <motion.a
                href='/about'
                className="bg-zinc-300  text-emerald-600 tracking-wider font-bold text-lg py-1 px-4 rounded w-28 justify-center flex items-center" 
                whileTap={{ scale: 0.9 }}>
                VISIT
            </motion.a>
            </motion.div>
          </motion.div>
          <div className=' h-[60%] lg:h-[38%] w-[99%] md:w-5/6 lg:w-full xl:h-4/5 xl:w-1/3 bg-gradient-to-r from-pink-500 via-red-400 to-yellow-300 blur-md'></div>
          <div className='  bg-neutral-200 dark:bg-neutral-800 w-full h-[38%] md:w-5/6 lg:w-full lg:h-[28%]  xl:h-3/4   xl:w-2/5 right-30 xl:right-0 bottom-0 0 xl:bottom-auto px-6 md:px-10 py-5 pt-5 lg:py-2 lg:pt-2 xl:pt-10 absolute opacity-90  dark:text-white box-border z-10 flex flex-col justify-between items-center gap-y-2 '>
            <div className="font-bold text-3xl font-['Consolas'] ">Pokebook</div>
            <div className="text-center dark:text-slate-400 font-mono">A Pokemon encyclopedia displaying stats of 905 pokemons. A nostalgic fan page with purpose of using advanced API techniques and remembering my childhood. </div>
            <div className='dark:text-slate-400 font-mono border-t w-full text-center pt-1 border-neutral-400'>React CSS Rest-API</div>
          </div>
          <div className=' bg-neutral-800 right:30 xl:right-0 h-[38%] w-full lg:h-[28%] xl:h-3/4 md:w-5/6 lg:w-full  xl:w-2/6 bottom-0 xl:bottom-auto absolute'></div>
        </motion.div>


        <motion.div className='w-5/6 2xl:w-3/4 flex-col-reverse xl:flex-row  h-[800px]  lg:h-[650px] xl:h-[480px]  border-blue-500 flex items-center relative mb-32'
          variants={fadeIn3('down','tween',0.1,0.7)} initial='hidden' whileInView='show' viewport={{ once: true }}
        >
          <div className=' h-[60%] lg:h-[38%] w-[99%] md:w-5/6 lg:w-full xl:h-4/5 xl:w-1/3  bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-200  blur-md'></div>
          <motion.div className='h-full  w-[100%] sm:w-[92%] lg:w-full xl:w-4/6 border-green-200  box-border cursor-pointer relative' initial='hidden' whileHover='hover'>
            <div className='hidden lg:block '>
            <ProjectSlider5></ProjectSlider5>
            </div>
            <div className='block lg:hidden'>
            <ProjectSlider5Mobile></ProjectSlider5Mobile>
            </div>
            {/* <motion.div
             variants={fadeIn4('right','tween',0,0.5)}
             className='absolute bottom-1  right-9  sm:right-20 md:right-36 lg:right-0 h-[99.5%]  lg:h-[99.2%] w-[81%] sm:w-[200px] pb-80 xl:pb-10  bg-neutral-200 dark:bg-neutral-800  flex items-end justify-center  ' 
            >
              <motion.a
                href='/about'
                className="bg-zinc-300  text-emerald-600 tracking-wider font-bold text-lg py-1 px-4 rounded w-28 justify-center flex items-center" 
                whileTap={{ scale: 0.9 }}>
                VISIT
            </motion.a>
            </motion.div> */}
          </motion.div>
          <div className=' bg-neutral-200 dark:bg-neutral-800 w-full h-[38%] md:w-5/6 lg:w-full lg:h-[28%]  xl:h-3/4   xl:w-2/5 left-30 xl:left-0 bottom-0  xl:bottom-auto px-6 md:px-10 py-5 pt-5 lg:py-2 lg:pt-2 xl:pt-10 absolute opacity-90  dark:text-white box-border z-10 flex flex-col justify-between items-center gap-y-2 '>
            <div className="font-bold text-3xl font-['Consolas'] ">Watch your Dreams</div>
            <div className="text-center dark:text-slate-400 font-mono">A Watch Ecommerce web page designed with pure CSS. Shop logo, Shopping Cart, Landing page and filtered products pages were also created.</div>
            <div className='dark:text-slate-400 font-mono border-t w-full text-center pt-1 border-neutral-400'>React CSS </div>
          </div>
          <div className=' bg-neutral-800 h-[38%] w-full lg:h-[28%] xl:h-3/4 md:w-5/6 lg:w-full  xl:w-2/6 left-30 xl:left-0 absolute'></div>
        </motion.div>
      </motion.div>
    </section>
  );
};