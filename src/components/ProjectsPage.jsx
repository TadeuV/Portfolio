import '../App.css'
import { motion} from 'framer-motion'
import { fadeIn2,draw,bounceball,staggerContainer,footerVariants,fadeIn3,fadeIn4} from '../utils/motion'
import ProjectSlider from '../sections/Slider/Project1Slider'
import ProjectSlider2 from '../sections/Slider/Project2Slider'
import ProjectSlider3 from '../sections/Slider/Project3Slider'
import ProjectSlider4 from '../sections/Slider/Project4Slider'
import ProjectSlider5 from '../sections/Slider/Project5Slider'
import {useState} from 'react';

export default function ProjectsPage () {

  return(
    <section className=' w-full box-border '>
      <motion.div className='flex-col flex justify-center h-full items-center border-red-500 py-40'
       variants={staggerContainer}
       initial='hidden'
       whileInView='show'
       viewport={{once:false, amount: 0.25}}
      >
        <motion.div className='w-3/4 h-[480px]  border-blue-500 flex items-center relative mb-32'
          variants={fadeIn3('down','tween',0.1,0.7)} initial='hidden' whileInView='show' viewport={{ once: true }}
        >
          <div className=' h-4/5 w-1/3 bg-gradient-to-r from-lime-400 via-sky-400 to-purple-600  blur-md'></div>
          <motion.div className='h-full w-4/6 border-green-200  box-border cursor-pointer relative' initial='hidden' whileHover='hover'>
            <ProjectSlider></ProjectSlider>
            <motion.div
             variants={fadeIn4('right','tween',0,0.5)}
             className='absolute bottom-1 right-0 h-[99.2%]  bg-neutral-200 dark:bg-neutral-800  flex items-end justify-center  pb-10 ' 
            >
              <motion.a
                href='/about'
                className="bg-zinc-300 text-emerald-600 tracking-wider font-bold text-lg py-1 px-4 rounded w-28 justify-center flex items-center" 
                whileTap={{ scale: 0.9 }}>
                VISIT
            </motion.a>
            </motion.div>
          </motion.div>
          <div className=' bg-neutral-200 dark:bg-neutral-800 h-3/4 w-2/5 left-0 absolute opacity-90  dark:text-white box-border z-10 flex flex-col justify-between items-center gap-y-2 px-10 py-5 pt-10'>
            <div className="font-bold text-3xl font-['Consolas'] ">GrocerApp</div>
            <div className="text-center dark:text-slate-400 font-mono">A CRUD Web App shopping list implemented with Mongo Realm. Multi-session app in real-time update. Authentication implemented with Mongoose and JSON Web Token. The idea of this App came from the necessity of making a grocery list with my wife. </div>
            <div className='dark:text-slate-400 font-mono border-t w-full text-center pt-1 border-neutral-400'>React Sass Mongo-Realm NodeJS Express Mongoose </div>
          </div>
          <div className=' bg-neutral-800 h-3/4 w-2/6 left-0 absolute'></div>
        </motion.div>

        <motion.div className='w-3/4 h-[480px]  border-blue-500 flex items-center relative mb-32'
          variants={fadeIn3('down','tween',0.1,0.7)} initial='hidden' whileInView='show' viewport={{ once: true }}
        >
          <motion.div className='h-full w-4/6 border-green-200  box-border cursor-pointer relative' initial='hidden' whileHover='hover'>
            <ProjectSlider2></ProjectSlider2>
            <motion.div
             variants={fadeIn4('left','tween',0,0.5)}
             className='absolute bottom-1 left-0 h-[99.2%]  bg-neutral-200 dark:bg-neutral-800  flex items-end justify-center  pb-10' 
            >
              <motion.a
                href='/about'
                className="bg-zinc-300  text-emerald-600 tracking-wider font-bold text-lg py-1 px-4 rounded w-28 justify-center flex items-center" 
                whileTap={{ scale: 0.9 }}>
                VISIT
            </motion.a>
            </motion.div>
          </motion.div>
          <div className=' h-4/5 w-1/3 bg-gradient-to-r from-blue-500 via-white to-red-500  blur-md'></div>
          <div className=' bg-neutral-200 dark:bg-neutral-800 h-3/4 w-2/5 right-0 absolute opacity-90  dark:text-white box-border z-10 flex flex-col justify-between items-center gap-y-2 px-10 py-5 pt-10'>
            <div className="font-bold text-3xl font-['Consolas'] ">ChatGPT Replica</div>
            <div className="text-center dark:text-slate-400 font-mono">A Web 4.0 App,  ChatGPT implemented with Tailwind and Speech-to-Text recognition capabilities. In order to get in touch with the new era of internet, I felt the necessity of creating something with AI. My choice was ChatGPT.</div>
            <div className='dark:text-slate-400 font-mono border-t w-full text-center pt-1 border-neutral-400'>React Taillwind Speech-Recognition Rest-API </div>
          </div>
          <div className=' bg-neutral-800 h-3/4 w-2/6 right-0 absolute'></div>
        </motion.div>

        <motion.div className='w-3/4 h-[480px]  border-blue-500 flex items-center relative mb-32'
          variants={fadeIn3('down','tween',0.1,0.7)} initial='hidden' whileInView='show' viewport={{ once: true }}
        >
          <div className=' h-4/5 w-1/3 bg-gradient-to-r from-pink-600 via-pink-300 to-emerald-500  blur-md'></div>
          <motion.div className='h-full w-4/6 border-green-200  box-border cursor-pointer relative' initial='hidden' whileHover='hover'>
            <ProjectSlider3></ProjectSlider3>
            <motion.div
             variants={fadeIn4('right','tween',0,0.5)}
             className='absolute bottom-1 right-0 h-[99.2%]   bg-neutral-200 dark:bg-neutral-800  flex items-end justify-center  pb-10' 
            >
              <motion.a
                href='/about'
                className="bg-zinc-300  text-emerald-600 tracking-wider font-bold text-lg py-1 px-4 rounded w-28 justify-center flex items-center" 
                whileTap={{ scale: 0.9 }}>
                VISIT
            </motion.a>
            </motion.div>
          </motion.div>
          <div className='  bg-neutral-200 dark:bg-neutral-800 h-3/4 w-2/5 left-0 absolute opacity-90  dark:text-white box-border z-10 flex flex-col justify-between items-center gap-y-2 px-10 py-5 pt-10'>
            <div className="font-bold text-3xl font-['Consolas'] ">Watch your Dreams</div>
            <div className="text-center dark:text-slate-400 font-mono">A Watch Ecommerce web page designed only with Html, CSS. All functionalities applied by DOM manipulation. Shopping Cart, Landing page and filtered products pages were created.</div>
            <div className='dark:text-slate-400 font-mono border-t w-full text-center pt-1 border-neutral-400'>React Tailwind </div>
          </div>
          <div className=' bg-neutral-800 h-3/4 w-2/6 left-0 absolute'></div>
        </motion.div>

        <motion.div className='w-3/4 h-[480px]  border-blue-500 flex items-center relative mb-32'
          variants={fadeIn3('down','tween',0.1,0.7)} initial='hidden' whileInView='show' viewport={{ once: true }}
        >
          <motion.div className='h-full w-4/6 border-green-200  box-border cursor-pointer relative' initial='hidden' whileHover='hover'>
            <ProjectSlider4></ProjectSlider4>
            <motion.div
             variants={fadeIn4('left','tween',0,0.5)}
             className='absolute bottom-1 left-0 h-[99.2%]   bg-neutral-200 dark:bg-neutral-800 flex items-end justify-center  pb-10' 
            >
              <motion.a
                href='/about'
                className="bg-zinc-300  text-emerald-600 tracking-wider font-bold text-lg py-1 px-4 rounded w-28 justify-center flex items-center" 
                whileTap={{ scale: 0.9 }}>
                VISIT
            </motion.a>
            </motion.div>
          </motion.div>
          <div className=' h-4/5 w-1/3 bg-gradient-to-r from-pink-500 via-red-400 to-yellow-300 blur-md'></div>
          <div className='  bg-neutral-200 dark:bg-neutral-800 h-3/4 w-2/5 right-0 absolute opacity-90  dark:text-white box-border z-10 flex flex-col justify-between items-center gap-y-2 px-10 py-5 pt-10'>
            <div className="font-bold text-3xl font-['Consolas'] ">Pokebook</div>
            <div className="text-center dark:text-slate-400 font-mono">A Pokemon encyclopedia displaying stats of 905 pokemons. A nostalgic fan page with purpose of remembering my childhood. </div>
            <div className='dark:text-slate-400 font-mono border-t w-full text-center pt-1 border-neutral-400'>React CSS Rest-API</div>
          </div>
          <div className=' bg-neutral-800 h-3/4 w-2/6 right-0 absolute'></div>
        </motion.div>


        <motion.div className='w-3/4 h-[480px]  border-blue-500 flex items-center relative mb-32'
          variants={fadeIn3('down','tween',0.1,0.7)} initial='hidden' whileInView='show' viewport={{ once: true }}
        >
          <div className=' h-4/5 w-1/3  bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-200  blur-md'></div>
          <motion.div className='h-full w-4/6 border-green-200  box-border cursor-pointer relative' initial='hidden' whileHover='hover'>
            <ProjectSlider5></ProjectSlider5>
            <motion.div
             variants={fadeIn4('right','tween',0,0.5)}
             className='absolute bottom-1 right-0 h-[99.2%]   bg-neutral-200 dark:bg-neutral-800  flex items-end justify-center  pb-10' 
            >
              <motion.a
                href='/about'
                className="bg-zinc-300  text-emerald-600 tracking-wider font-bold text-lg py-1 px-4 rounded w-28 justify-center flex items-center" 
                whileTap={{ scale: 0.9 }}>
                VISIT
            </motion.a>
            </motion.div>
          </motion.div>
          <div className=' bg-neutral-200 dark:bg-neutral-800 h-3/4 w-2/5 left-0 absolute opacity-90  dark:text-white box-border z-10 flex flex-col justify-between items-center gap-y-2 px-10 py-5 pt-10'>
            <div className="font-bold text-3xl font-['Consolas'] ">Watch your Dreams</div>
            <div className="text-center dark:text-slate-400 font-mono">A Watch Ecommerce web page designed with pure CSS. Shop logo, Shopping Cart, Landing page and filtered products pages were also created.</div>
            <div className='dark:text-slate-400 font-mono border-t w-full text-center pt-1 border-neutral-400'>React CSS </div>
          </div>
          <div className=' bg-neutral-800 h-3/4 w-2/6 left-0 absolute'></div>
        </motion.div>
      </motion.div>
    </section>
  );
};