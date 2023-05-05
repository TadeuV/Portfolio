import '../App.css'
import {motion} from 'framer-motion'
import { fadeIn2,draw,dropIn, fadeIn,bounceball,textContainer,textVariant,textVariant2,textVariant3,textVariant4,zoomIn,planetVariants,staggerContainer} from '../utils/motion'
import {useState,useEffect} from 'react';
import Slider from './Slider/ProjectSlider'
import SliderMobile from './Slider/ProjectSliderMobile'
import MobileResponsive from './Slider/SliderMobile-Responsive'

export default function Projects () {

 

  return(
    <motion.section
    variants={staggerContainer}
    initial='hidden'
    whileInView='show'
    viewport={{once:false, amount: 0.25}}
    className=" mt-10 lg:mt-24  h-screen  flex  justify-center items-center box-border ">
      {/* <motion.div className='font-bold text-6xl flex justify-self-end self-start relative left-96'
      
      >Projects</motion.div> */}
      <div className='hidden lg:flex lg:w-[1000px] xl:w-[1600px] box-border flex justify-center absolute '>
        <div className='box-border flex justify-center items-center'>
          <div className=' bg-zinc-800 absolute lg:top-[42px] xl:top-[55px] h-[76%] xl:h-[78%] w-[710px] lg:left-[146px] xl:left-[355px]  xl:w-[890px] text-white  box-border justify-center  border-red-600 '>
            <Slider></Slider>
          
          </div>
          <img src='/asusframe.png' className="w-full relative "/>
          
        </div>
        <div className='box-border h-4/6  absolute right-56'>
          <img src='/phone1.png' className="w-60  relative top-44 left-12 "/>
          <div className=' bg-zinc-800 relative -top-[250px] left-16 h-[370px] w-52 text-black box-border'>
            <SliderMobile></SliderMobile>
          </div>
        </div>
      </div>
      <div className='lg:hidden mt-40 box-border h-full '>
          <img src='/phone1.png' className=" w-96 relative  "/>
          <div className=' bg-zinc-800 relative -top-[682px] left-[22px] h-[596px] w-[338px] text-black box-border'>
            <MobileResponsive></MobileResponsive>
          </div>
        </div>
    </motion.section>
  );
}

//top-44 left-12     children left-16 h-[370px]

