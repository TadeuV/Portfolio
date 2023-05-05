import '../App.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {motion} from 'framer-motion'
import { fadeIn2,draw,dropIn, fadeIn,bounceball,textContainer,textVariant,textVariant2,textVariant3,textVariant4,zoomIn,planetVariants,staggerContainer} from '../utils/motion'


export default function Contact () {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(import.meta.env.VITE_EMAIL_SERVICE_KEY, import.meta.env.VITE_EMAIL_TEMPLATE_KEY, form.current, import.meta.env.VITE_EMAIL_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          console.log("Message sent!")
          e.target.reset()
      }, (error) => {
          console.log(error.text);
      });
  };

  return(
    <section className='pt-24 flex-col-reverse lg:flex-row flex justify-evenly items-center mb-16 ' id='Contact'>
      <div className=' flex flex-col w-4/5 lg:w-1/2 xl:w-1/3 justify-center items-center box-border '>
        <motion.div className='text-4xl  lg:text-5xl font-bold pb-12 md:pb-16 mt-10 md:mt-0'
          // variants={fadeIn2('right','spring',0,1.8)} initial='hidden' whileInView='show'
          whileHover={{ y: 2,opacity: 0.9 }}
          whileTap={{ scale: 0.9 }} 
        >Let's get in touch!</motion.div>
        <form ref={form} onSubmit={sendEmail} className='m-5 w-[390px] sm:w-3/4 md:w-[430px] xl:w-[470px] '>
          <div id='form-group' className='mt-5 dark:border border-2 border-sky-500 dark:border-cyan-400 m-2.5 p-2.5  h-16 flex justify-center  relative rounded-md'>
            <label className='text-black dark:text-white -top-5 left-6 absolute z-5 font-semibold tracking-wide text-xl bg-gradient-to-r from-gray-300 to-transparent dark:bg-gradient-to-r dark:from-slate-800  dark:to-transparent text-blue-950'>Name</label>
            <input type="text" name="user_name" className=' dark:text-white bg-inherit border-none w-full m-1 outline-0 outline-transparent ' />
          </div>
          <div id='form-group' className='mt-5 dark:border border-2 border-sky-500 dark:border-cyan-400 m-2.5 p-2.5  h-16 flex justify-center  relative rounded-md'>
            <label className=' text-black dark:text-white -top-5 left-6 absolute z-5 font-semibold tracking-wide text-xl bg-gradient-to-r from-gray-300 to-transparent dark:bg-gradient-to-r dark:from-slate-800  dark:to-transparent text-blue-950'>Email</label>
            <input type="email" name="user_email" className=' dark:text-white bg-inherit border-none w-full m-1 outline-0 outline-transparent ' />
          </div>
          <div id='form-group' className='mt-5 dark:border border-2 border-sky-500 dark:border-cyan-400 m-2.5 p-2.5  h-44 flex justify-center  relative rounded-md'>
            <label className=' text-black dark:text-white -top-5 left-6 absolute z-5 font-semibold tracking-wide text-xl bg-gradient-to-r from-gray-300 to-transparent dark:bg-gradient-to-r dark:from-slate-800  dark:to-transparent text-blue-950'>Message</label>
            <textarea name="message" className=' dark:text-white bg-inherit border-none w-full m-1 outline-0 outline-transparent '/>
          </div>
          <div className=' flex justify-center items-center mt-10 lg:mt-8'>
            <motion.input className=' bg-violet-800 dark:bg-gray-100 text-white dark:text-gray-800 font-bold text-lg py-1 px-4 rounded w-36 cursor-pointer border-2 border-transparent  ' 
            type="submit" value="Send"
            // variants={fadeIn2('right','spring',0,1.8)} initial='hidden' whileInView='show'
            whileHover={{ y: 2,opacity: 0.9 }}
            whileTap={{ scale: 0.9 }} />
          </div>
        </form>
      </div>
      <motion.div className=" flex flex-col  w-4/5 md:w-3/4 lg:w-2/5 h-[420px] md:h-96 xl:h-full justify-center items-center gap-y-8 text-xl font-['Consolas']  "
        variants={fadeIn2('up','spring',0,2.8)} initial='hidden' whileInView='show'
      >
        <div className=' text-center text-slate-500 dark:text-slate-300'>I love tecnology and keep up with what's new.</div>
        <div className='font-semibold text-sky-700 dark:text-amber-200 tracking-wide text-center animate-pulse'>I am currently looking for opportunities.</div>
        <div className='text-slate-500 dark:text-slate-300 leading-8 text-center'>It will be my pleasure to understand your needs and to learn in a collaborative environment.</div>
      </motion.div>
    </section>
  );
}