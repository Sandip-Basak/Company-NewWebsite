/* eslint-disable no-unused-vars */
import { FlipWords } from "./UI/FlipWords"
import {motion} from 'motion/react'



export const HeroText = () => {

  
  const words = ['Brand Building','Graphic Design','Website Development',
    'Packaging Design','Social Media Marketing','Influencer Marketing'];

  const variants = {
    hidden:{ opacity: 0, x: -50},
    visible: { opacity: 1, x: 0},
  }
  return (
    <div className="z-10 mt-20 text-center md:mt-70 md:text-left rounded-3xl bg-clip-text">
        {/* Desktop View */}
        <div className="flex-col hidden md:flex px-5">
            <motion.h1 
              className="text-6xl font-medium font-['Poppins']"
              variants={variants}
              initial='hidden'
              animate='visible'
              transition={{delay: 0.5}}
            >
              AtmosFlix
            </motion.h1>
            <div className="flex flex-col items-start py-5">
              <motion.p 
                className="text-6xl font-medium text-white"
                variants={variants}
                initial='hidden'
                animate='visible'
                transition={{delay: 0.8}}
              >
                  Creative minds<br /> building success via
              </motion.p>
              <motion.div
                variants={variants}
                initial='hidden'
                animate='visible'
                transition={{delay: 1}}
              >
                <FlipWords words={words} 
                           className='font-black text-white text-6xl py-1'                  
                />
              </motion.div>
              
            </div>
        </div>
        {/* Mobile View */}
        <div className="flex flex-col space-y-6 md:hidden">
            <div>
                  <motion.p 
                    className="text-5xl font-black text-white"
                    variants={variants}
                    initial='hidden'
                    animate='visible'
                    transition={{delay: 0.8}}
                    >
                  Where brands find
                  </motion.p>
                  <motion.div
                    variants={variants}
                    initial='hidden'
                    animate='visible'
                    transition={{delay: 1}}
                  ><FlipWords words={words}
                  className='font-bold text-white text-5xl'/>
                  </motion.div>
                  <motion.p 
                    className="text-5xl font-black text-white"
                    variants={variants}
                    initial='hidden'
                    animate='visible'
                    transition={{delay: 1.1}}
                  >done right</motion.p>
            </div>
        </div>
    </div>
  )
}