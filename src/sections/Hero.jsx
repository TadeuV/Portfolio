import '../App.css'
import {motion} from 'framer-motion'
import TypeWriterEffect from 'react-typewriter-effect'
import { fadeIn2,draw,dropIn, fadeIn,bounceball,textContainer,textVariant,textVariant2,textVariant3,textVariant4,zoomIn,planetVariants,staggerContainer} from '../utils/motion'
import {useState,useEffect} from 'react';

export default function Hero () {

  return(
    <motion.section 
    variants={staggerContainer}
    initial='hidden'
    whileInView='show'
    viewport={{once:false, amount: 0.25}}
    className=" lg:h-[80vh] flex-col-reverse lg:flex-row flex justify-center items-center lg:items-end box-border z-10 pt-24 lg:pt-0 ">
      <div className=" w-5/6 pl-0 lg:pl-20 xl:pl-0 lg:w-1/2 xl:w-2/5  h-5/6 flex flex-col gap-y-3 justify-center font-mono pt-12 lg:pt-0 ">
        <motion.div variants={textVariant(0.3)} viewport={{once:true}} initial='hidden' whileInView='show' className='relative z-10 w-full text-xl lg:text-2xl flex justify-center lg:justify-start' >Hi, my name is  </motion.div>
        <motion.div variants={textVariant3(0.3)} viewport={{once:true}} initial='hidden' whileInView='show' className="relative z-10 font-bold text-4xl lg:text-6xl tracking-wide  indent-2  hover:transition-all hover:delay-200 hover:duration-1000 flex justify-center lg:justify-start">Tadeu Vieira</motion.div>
        <motion.div variants={textVariant(0.3)} viewport={{once:true}} initial='hidden' whileInView='show' className='relative z-10 text-3xl lg:text-4xl font-semibold text-violet-600 flex justify-center lg:justify-start'>Web Developer</motion.div>
        <motion.div variants={textVariant3(0.3)}  viewport={{once:true}}  initial='hidden' whileInView='show' className='relative z-10 text-lg lg:text-xl w-full xl:w-4/5 text-slate-400 leading-8 text-center lg:text-justify'>
        I'm a junior web developer,and a transportation engineer with extensive experience in planning and management. Constantly seeking new challenges, creating solutions and exploring the
        <div className='text-green-600 dark:text-green-400 tracking-wider  h-24 flex justify-center lg:justify-start'>
          <TypeWriterEffect  textStyle={{
            fontWeight: 700,
            fontSize: '1.2em',
        }}
        startDelay={3000}
        cursorColor="white"
        multiText={[
          'virtual and',
          'real world.',
          'virtual and',
          'real world.',
          'virtual and',
          'real world.',
          'virtual and',
          'real world.',
        ]}
        multiTextDelay={1500}
        typeSpeed={80}>
          
          </TypeWriterEffect> </div>
        </motion.div>
        <div className=' w-5/5 lg:w-4/5  mt-10 flex justify-evenly '>
          <motion.button
              variants={fadeIn2('right','spring',0,0.8)} initial='hidden' whileInView='show'
              className="bg-teal-200   text-gray-800 font-bold text-lg py-2 px-4 rounded inline-flex items-center" 
              whileHover={{ y: 2,opacity: 0.9 }}
              whileTap={{ scale: 0.9 }}
              viewport={{once:true}}>
            <svg className="fill-current w-8 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
            <span>Resume</span>
          </motion.button>
          <motion.button
              variants={fadeIn2('right','spring',0,0.8)} initial='hidden' whileInView='show'
              className="bg-gray-100  text-gray-800 font-bold text-lg py-1 px-4 rounded  items-center" 
              whileHover={{ y: 2, opacity: 0.9 }}
              whileTap={{ scale: 0.9 }}
              viewport={{once:true}}>
            <a href='/about'>Learn More</a>
          </motion.button>
        </div>

      </div>
      <div className="w-5/6 lg:w-3/6 xl:w-2/5  h-5/6 flex justify-center items-center box-border ">
          <motion.div className="w-5/6 md:w-4/5 xl:w-full 2xl:w-4/5 box-border "
          variants={textVariant3(0.3)}  initial='hidden' whileInView='show' viewport={{once:true}}>
            <img src='/profile1.jpg' className=" bg-transparent rounded-2xl h-full w-full"></img>
          </motion.div>
      </div>
    </motion.section>
  );
}

