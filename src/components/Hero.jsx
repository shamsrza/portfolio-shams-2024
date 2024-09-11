import React from 'react'

import {motion} from 'framer-motion'
import {styles} from '../styles'
import {ComputersCanvas} from './canvas'
import Computers from './canvas/Computers'

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[100px] max-w-7xl mx-auto flex flex-grow items-start gap-5`}
      >
        {/* <div className="flex flex-col justify-center items-center mt-5"> */}
          {/* <div className="w-5 h-5 rounded-full bg-[#915eff]" /> */}
          {/* <div className="w-1 sm:h-80 h-40 violet-gradient" /> */}
        {/* </div> */}

        <div>
          <h1 className={`${styles.heroHeadText} text-slate-300`}>
            Hello <span className="text-[#915eff]">World</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-slate-400`}>
          I’m Shams, a developer <br className="sm:block hidden" />{" "}
          and technology enthusiast.<br className="sm:block hidden" />{" "}
          My passion is turning ideas <br className="sm:block hidden" />{" "}
          into interactive, user-friendly <br className="sm:block hidden" />{" "}
          digital experiences
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-5 bottom-0 w-full flex justify-center items-center">
        <a href="#about" className='mt-[100px]'>
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start">
            <motion.div 
              animate={{
                y:[0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
}

export default Hero