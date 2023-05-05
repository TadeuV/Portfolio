import '../App.css'
import { motion} from 'framer-motion'
import {textVariant,Appear, fadeIn5,AppearMain,AppearMobile,AppearMobileSM,AppearMobileLG} from '../utils/motion';
import {ReactIcon,JavascriptIcon,NodeJSIcon,ExpressIcon,TailwindIcon,CSSIcon,SASSIcon,MongoDBIcon,RestAPIcon,MongoRealmIcon,MySQLIcon,HTMLIcon,FramerMotionIcon,TypeScriptIcon} from '../utils/Icons'
import { Tooltip } from "react-tooltip-z";

export default function AboutPage () {

  function expTab (ind){
    
    const seiha = document.getElementById('seiha');
    const rumo = document.getElementById('rumo');
    const Cseiha = document.getElementById('Cseiha');
    const Crumo = document.getElementById('Crumo');
    
   
    if(ind ===1){
      seiha.classList.add('bg-slate-800','text-emerald-400','border-emerald-400','border-t-2','xl:border-t-0','xl:border-l-2')
      Cseiha.classList.remove('invisible')
      rumo.classList.remove('bg-slate-800','text-emerald-400','border-emerald-400','border-t-2','xl:border-t-0','xl:border-l-2')
      Crumo.classList.add('invisible')
    }else if(ind ===2){
      seiha.classList.remove('bg-slate-800','text-emerald-400','border-emerald-400','border-t-2','xl:border-t-0','xl:border-l-2')
      Cseiha.classList.add('invisible')
      rumo.classList.add('bg-slate-800','text-emerald-400','border-emerald-400','border-t-2','xl:border-t-0','xl:border-l-2')
      Crumo.classList.remove('invisible')
    }
  }

  return(
    <>
      <section className=' w-full min-h-screen px-10 sm:px-20 lg:px-20 xl:px-32 2xl:px-44 3xl:px-52 py-20 '>
        <div className='flex flex-col xl:flex-row justify-center  items-center border-red-500  box-border '
        >
          <div className=' border-red-200  sm:h-[52rem] md:h-[44rem] lg:h-[30rem] xl:h-[50rem] 2xl:h-[40rem] w-full xl:w-1/2 2xl:w-3/5 '>
            <div className=" font-bold text-4xl tracking-wide dark:text-neutral-200 indent-8 w-full  flex items-end justify-between">About Me <div className='border-t border-slate-400 dark:border-slate-600 w-1/3 sm:w-1/2 md:w-3/5 lg:w-4/6 xl:w-1/2 2xl:w-4/6 h-5 '></div></div>
            <div className='h-4/5 mt-16 border-l border-slate-400 dark:border-slate-600 '>
              <motion.div className='h-full  text-justify' variants={textVariant(0.1)}  viewport={{once:true}} initial='hidden' whileInView='show'>
                <div 
                className='h-1/3 mx-8  font-mono text-lg dark:text-slate-400 leading-8 indent-2 '> My name is Tadeu Vieira, I am a junior web developer with passion in learning new techniques and beautiful
                designs. I have good problem-solving skills and I am results-oriented. I am also a transportation engineer graduated in 2016. </div>
                <div className='h-2/5 mx-8 my-10 sm:my-4 md:my-0 font-mono text-lg dark:text-slate-400 leading-8 indent-2 '>
                  My work experience is as a production planner/supply chain manager in a railway company, and as an english teacher in Japan. My decision of changing my carrier to IT is due to my deep interest in the area and it's flexibility, and also my necessity  to catch up with the leading carrier in the market.
                </div>
                <div className='h-1/3 mx-8  font-mono text-lg dark:text-slate-400 leading-8 indent-2 '>
                  I love exploring new cultures and have different experiences. I ever lived in three different countries, I am  a native Portuguese speaker, proficient in English and basic knowledge of Japanese language.
                </div>
                {/* <div className='h-1/3 mr-10 border'></div> */}
              </motion.div>
            </div>
          </div>
          <div className='mt-10 lg:mt-0 lg:h-[40rem] w-full  xl:w-1/2 2xl:w-2/5 box-border  flex justify-center xl:justify-end items-center border-slate-400 dark:border-slate-600 border-r xl:border-none'>
            <motion.div className=" w-4/5 sm:w-4/5 md:w-4/6 lg:w-1/2 xl:w-4/5 2xl:w-5/6  box-border "
              // variants={fadeIn3('','tween',0.1,0.7)} initial='hidden' whileInView='show' viewport={{ once: true }}
              variants={fadeIn5('down','spring',0.1,1)} initial='hidden' whileInView='show' viewport={{ once: true }}
              >
              <img  src='/main.jpg' className=" bg-transparent rounded-lg 2xl:rounded-full h-full w-full border-transparent   " ></img>
            </motion.div>
            <div className='h-1/2 w-10 hidden xl:block  border-slate-400 dark:border-slate-600 border-r flex self-end'></div>
          </div>
        </div>


        <div className='h-fit  2xl:h-screen flex-col-reverse xl:flex-row  flex  pt-16 my-6 lg:mt-0 2xl:mt-6 sm:my-14 lg:my-0 xl:pb-10'>
          <motion.div className='w-full sm:w-5/6 md:w-4/5 lg:w-4/6 xl:w-[45%] 2xl:w-2/5 h-[36rem] sm:h-[38rem] md:h-[40rem]  lg:h-[30rem] lg:mb-20 xl:mb-0 xl:h-full mt-20  flex-col flex self-center lg:self-start items-center lg:items-start xl:items-center '
          variants={fadeIn5('up','spring',0.1,1)} initial='hidden' whileInView='show' viewport={{ once: true }}
          >
            <motion.div className="   w-6/6 lg:w-5/6 xl:w-full box-border  relative lg:mt-10 mx-6  lg:mx-0 2xl:px-6 "
            initial='hidden'  whileHover='hover'
              >
              <motion.img variants={AppearMain()} src='/Rumo.jpg' className=" bg-transparent  rounded-lg lg:rounded-full h-full w-full border-transparent z-50 " ></motion.img>
              <motion.img variants={AppearMobileLG()} src='/Seiha.jpg' className=" bg-transparent rounded-lg lg:rounded-full h-full w-full border-transparent absolute hidden lg:block xl:hidden" ></motion.img>
              <motion.img variants={AppearMobileSM()} src='/Seiha.jpg' className=" bg-transparent rounded-lg xl:rounded-full h-full w-full border-transparent absolute hidden sm:block lg:hidden" ></motion.img>
              <motion.img variants={AppearMobile()} src='/Seiha.jpg' className=" bg-transparent rounded-lg xl:rounded-full h-full w-full border-transparent absolute block sm:hidden" ></motion.img>
              <motion.img variants={Appear()} src='/Seiha.jpg' className=" bg-transparent rounded-full h-full w-full border-transparent absolute hidden xl:block" ></motion.img>
            </motion.div>
          </motion.div>
          <div className='w-full xl:w-[55%] 2xl:w-3/5  md:h-full xl:h-fit border-slate-400 dark:border-slate-600 '>
            <div className=" font-bold text-4xl tracking-wide dark:text-neutral-200  w-full  flex items-end justify-evenly"><div className='border-t border-slate-400 dark:border-slate-600 w-2/5 md:w-4/6 h-5 '></div>My Story </div>
            <motion.div 
            variants={textVariant(0.1)}  viewport={{once:true}} initial='hidden' whileInView='show'
            className=' h-fit   2xl:h-[38rem] lg:h-full mt-16 border-r border-slate-400 dark:border-slate-600  text-justify '>
              <div className='  sm:mb-5 md:mb-16 lg:mb-0 md:h-fit   mx-8  font-mono text-lg dark:text-slate-400 leading-8 indent-2 '> My first contact with coding was during my Transportation Engineering course back in 2010, learning  C++. 
                  Since then, I always had a bent for technological solutions in my projects or digital approches.
                  I studied excel and also enrolled in a Network Infrastructure course.
                  During my carrier as production planner in Brazil, the company initiated an improvement of systems and  procedures once executed by spreadsheets or plain softwares,
                  and since my skills for technologies were noted, 
                  I was designated to interpret our logistics/supply chain needs to a software development team,
                  including testing and giving ideas.
              </div>
              <div className=' sm:h-fit lg:h-1/4 mx-8 my-10  md:pt-0 py-5 2xl:py-0 font-mono text-lg dark:text-slate-400 leading-8 indent-2  '> 
                  As mentioned before about my passion for different experiences, in 2020 I moved to Japan and worked as an english teacher for kids. During this time, I used to study Python already aiming for 
                  a carrier in IT.
              </div>
              <div className=' sm:h-fit lg:h-1/4 mx-8 pt-5 md:py-0 font-mono text-lg dark:text-slate-400 leading-8 indent-2  '>
                  By influence of a friend, I chose to study Web Development in Canada, since he graduated in the same college and has a carrier as web developer. 
              </div>
            </motion.div>
          </div>
        </div>



        <div className='h-[27rem]  md:h-[25rem] w-full sm:mt-20 md:mt-28 xl:mt-20 '>
          <div className="font-bold text-4xl tracking-wide dark:text-neutral-200 indent-8 w-full  flex items-end justify-between">Education <div className='border-t border-slate-400 dark:border-slate-600 w-1/3 md:w-4/6 h-5 '></div></div>
          <div className='h-4/6 mt-10 md:mt-16 border-l border-slate-400 dark:border-slate-600 text-justify flex justify-center'>
            <motion.div className=' w-4/5 border-slate-600 dark:text-slate-300 flex-col flex justify-evenly'
            variants={textVariant(0.1)}  viewport={{once:true}} initial='hidden' whileInView='show'
            >
              <div className=' p md:p-4 space-y-3'>
                <div className='font-semibold text-xl md:text-2xl flex justify-between '>Web Development <div className='w-2/5 text-end  font-mono dark:text-slate-300 text-lg md:text-xl font-light '>May 2022 - May 2023</div> </div>
                <div className='font-medium text-lg md:text-xl'>Cornerstone</div>
              </div>
              <div className=' p md:p-4 space-y-3'>
                <div className='font-semibold text-xl md:text-2xl flex justify-between'>Transportation Engineering <div className='text-end  font-mono dark:text-slate-300 text-lg md:text-xl font-light'>Mar 2010 - Aug 2016</div> </div>
                <div className='font-medium text-lg md:text-xl'>Federal University of Itajuba</div>
              </div>
            </motion.div>
          </div>
        </div>


        <div className='h-[48rem] sm:h-[43rem] lg:h-[39rem] xl:h-[35rem] 2xl:h-[34rem] w-full mb-10 sm:mb-0 '>
          <div className=" font-bold text-4xl tracking-wide dark:text-neutral-200  w-full  flex items-end justify-evenly"><div className='border-t border-slate-400 dark:border-slate-600 w-2/5 md:w-3/5 lg:w-4/6 h-5 '></div>Experience </div>
          <motion.div className=' xl:h-4/6 mt-16 border-r border-slate-400 dark:border-slate-600 text-justify flex justify-center '
          variants={textVariant(0.1)}  viewport={{once:true}} initial='hidden' whileInView='show'
          >
            <div className=' w-full md:w-5/6 xl:w-4/6  h-full flex flex-col xl:flex-row relative  border-red-400 ' >
                <div className='pb-10 xl:pb-0 w-2/3 md:w-1/2 xl:w-1/6 border-t xl:border-t-0 xl:border-l border-slate-600 h-1/2 flex flex-row xl:flex-col items-center justify-center dark:text-slate-400 '>
                  <div id='seiha' className=' border-t-2 xl:border-t-0  xl:border-l-2 w-40 xl:w-full  h-16 flex justify-center items-center p-4 hover:cursor-pointer font-semibold text-2xl tracking-wider transition-all duration-200 ease-in-out ' onClick={()=>expTab(1)}>Seiha</div>
                  <div id='rumo' className=' w-40 xl:w-full  h-16 flex justify-center items-center p-4 hover:cursor-pointer font-semibold text-2xl tracking-wider  transition-all duration-200 ease-in-out ' onClick={()=>expTab(2)}>Rumo</div>
                </div>
                <div className=' w-full xl:w-5/6 h-full flex justify-center box-border flex-wrap  border-blue-400 '>
                  <div id='Cseiha' className='w-full  h-fit  indent-5'>
                    <div className=' text-xl font-semibold flex justify-center px-10  flex-col p-2'>English Teacher
                      <div className='text-base font-light font-mono dark:text-neutral-300 py-2'>August 2020 - March 2022 (Japan)</div>
                    </div>
                    <ul className='text-base p-4  h-3/4 dark:text-slate-400  mt-4 list-disc list-inside marker:text-emerald-400 space-y-5'> 
                      <li>Teaching english for children ranging from 3 months to 15 years old.</li>
                      <li>Teaching materials and games development. </li>
                      <li>Marketing campaigns to increase children enrollment.</li>
                    </ul>
                  </div>
                  <div id='Crumo' className='h-fit w-full xl:w-5/6 absolute -right-0 invisible indent-5 box-border '>
                    <div className=' text-xl font-semibold flex justify-center px-10  flex-col p-2'>Production Planner / Supply Chain Manager
                        <div className='text-base font-light font-mono dark:text-neutral-300 py-2'>January 2017 - January 2020 (Brazil)</div>
                    </div>
                    <ul className='text-base p-4  h-3/4 dark:text-slate-400  mt-4 list-disc list-inside marker:text-emerald-400 space-y-5 leading-8  box-border '>
                      <li>Management of assets, route planning and operational control decisions to ensure KPIs achievement. </li> 
                      <li>Assessment of demand and client's needs providing higher service level.</li>
                      <li>Coordination of loading and unloading of railway waggons.</li>
                      <li>Medium-term logistic strategy planning ,execution processes improvement, spreadsheets developments.</li>
                    </ul>
                  </div>
                </div>
            </div>
          </motion.div>
        </div>


        <div className='h-[40rem]  sm:h-[30rem] flex flex-col  justify-evenly border-slate-400 dark:border-slate-600  '>
          <div className=" font-bold text-4xl tracking-wide dark:text-neutral-200  w-full  flex items-end justify-between"><div className='border-t border-slate-400 dark:border-slate-600 w-[14%] sm:w-[20%] md:w-[27%] lg:w-[35%] h-5 '/>My Tech-Stack<div className='border-t border-slate-400 dark:border-slate-600 w-[14%] sm:w-[20%] md:w-[27%] lg:w-[35%] h-5 '/></div>
          <div className='h-5/6  w-full flex flex-col sm:flex-row pt-5  mt-4 '>
            <motion.div className='h-1/2 sm:h-full w-full sm:w-1/2  mx-0 sm:mx-2'
            variants={textVariant(0.1)}  viewport={{once:true}} initial='hidden' whileInView='show'
            >
              <div className='h-2/6 font-bold  text-3xl tracking-wide dark:text-emerald-300  w-full  h-1/6 flex items-start justify-center '> Frontend</div>
              <div className='h-4/6 sm:h-3/6 border-slate-400 dark:border-slate-600 border-b sm:border-b-0 border-r-0 sm:border-r box-border flex-wrap flex justify-center gap-x-7 gap-y-7 '>
                <motion.div className='inline-flex w-14  h-14 border-transparent shadow-md  shadow-slate-900 hover:shadow-inner   hover:shadow-slate-900 rounded-full p-2 cursor-pointer' whileHover={{ y: 2 }} whileTap={{ scale: 0.9 }}><ReactIcon/></motion.div>
                <motion.div className='inline-flex w-14 h-14  p-3  rounded-full  border-transparent shadow-md  shadow-slate-900 hover:shadow-inner   hover:shadow-slate-900 cursor-pointer' whileHover={{ y: 2 }} whileTap={{ scale: 0.9 }}><JavascriptIcon/></motion.div>
                <motion.div className='inline-flex w-14 h-14  rounded-full p-3 border-transparent shadow-md  shadow-slate-900 hover:shadow-inner   hover:shadow-slate-900 cursor-pointer' whileHover={{ y: 2 }} whileTap={{ scale: 0.9 }}><TypeScriptIcon/></motion.div>
                <motion.div className='inline-flex w-14 h-14  rounded-full p-2 border-transparent shadow-md  shadow-slate-900 hover:shadow-inner   hover:shadow-slate-900 cursor-pointer' whileHover={{ y: 2 }} whileTap={{ scale: 0.9 }}><HTMLIcon/></motion.div>
                <motion.div className='inline-flex w-14 h-14  rounded-full p-2 border-transparent shadow-md  shadow-slate-900 hover:shadow-inner   hover:shadow-slate-900 cursor-pointer' whileHover={{ y: 2 }} whileTap={{ scale: 0.9 }}><CSSIcon/></motion.div>
                <motion.div className='inline-flex w-14 h-14  rounded-full p-2 border-transparent shadow-md  shadow-slate-900 hover:shadow-inner   hover:shadow-slate-900 cursor-pointer' whileHover={{ y: 2 }} whileTap={{ scale: 0.9 }}><SASSIcon/></motion.div>
                <motion.div className='inline-flex w-14 h-14  rounded-full p-3 border-transparent shadow-md  shadow-slate-900 hover:shadow-inner   hover:shadow-slate-900 cursor-pointer' whileHover={{ y: 2 }} whileTap={{ scale: 0.9 }}><TailwindIcon/></motion.div>
                <motion.div className='inline-flex w-14 h-14  rounded-full p-3 border-transparent shadow-md  shadow-slate-900 hover:shadow-inner   hover:shadow-slate-900 cursor-pointer' whileHover={{ y: 2 }} whileTap={{ scale: 0.9 }}><FramerMotionIcon/></motion.div>
              </div>
            </motion.div>
            <motion.div className='pt-10 sm:pt-0 h-1/2 sm:h-full w-full sm:w-1/2 '
            variants={textVariant(0.1)}  viewport={{once:true}} initial='hidden' whileInView='show'
            >
              <div className='h-2/6 font-bold  text-3xl tracking-wide dark:text-emerald-300  w-full  h-1/6 flex items-start justify-center '> Backend</div>
              <div className='h-3/6 border-slate-400 dark:border-slate-600  box-border flex-wrap flex justify-center gap-x-7 gap-y-7'>
                <motion.div className='inline-flex w-14 h-14  rounded-full p-2 border-transparent shadow-md  shadow-slate-900 hover:shadow-inner   hover:shadow-slate-900 cursor-pointer' whileHover={{ y: 2 }} whileTap={{ scale: 0.9 }}><NodeJSIcon/></motion.div>
                <motion.div className='inline-flex w-14 h-14  rounded-full p-2 border-transparent shadow-md  shadow-slate-900 hover:shadow-inner   hover:shadow-slate-900 cursor-pointer' whileHover={{ y: 2 }} whileTap={{ scale: 0.9 }}><ExpressIcon/></motion.div>
                <motion.div className='inline-flex w-14 h-14  rounded-full p-3 border-transparent shadow-md  shadow-slate-900 hover:shadow-inner   hover:shadow-slate-900 cursor-pointer' whileHover={{ y: 2 }} whileTap={{ scale: 0.9 }}><RestAPIcon/></motion.div>
                <motion.div className='inline-flex w-14 h-14  rounded-full p-2 border-transparent shadow-md  shadow-slate-900 hover:shadow-inner   hover:shadow-slate-900 cursor-pointer' whileHover={{ y: 2 }} whileTap={{ scale: 0.9 }}><MySQLIcon/></motion.div>
                <motion.div className='inline-flex w-14 h-14  rounded-full p-2 border-transparent shadow-md  shadow-slate-900 hover:shadow-inner   hover:shadow-slate-900 cursor-pointer' whileHover={{ y: 2 }} whileTap={{ scale: 0.9 }}><MongoDBIcon/></motion.div>
                <motion.div className='inline-flex w-14 h-14  rounded-full p-2 border-transparent shadow-md  shadow-slate-900 hover:shadow-inner   hover:shadow-slate-900 cursor-pointer' whileHover={{ y: 2 }} whileTap={{ scale: 0.9 }}><MongoRealmIcon/></motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    
    </>
  );
};
