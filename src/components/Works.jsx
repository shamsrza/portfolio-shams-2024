import React from 'react'
import { Tilt } from "react-tilt";
import  { motion } from 'framer-motion';

import  { styles } from '../styles';
import { github, live } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects }  from '../constants';
import { fadeIn, textVariant } from '../utils/motion';


const ProjectCard = ({ index, name, description, tags, image, source_code_link, live_page, owb }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className="green-pink-gradient p-[1px]">
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-l sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-l"
          />
          <div className="absolute inset-0 flex flex-col justify-start items-end gap-1 lg:flex-row lg:justify-end lg:items-start m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-11 h-11 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img src={github} alt="github" className='w-[30px] h-[30px] object-contain'/>
            </div>
            {/* for live link create this button */}
            <div
              onClick={() => window.open(live_page, "_blank")}
              className="black-gradient w-11 h-11 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img src={live} alt="live page" className='w-[25px] h-[25px] object-contain rounded-full'/>
            </div>

          </div>

          {/* <img src={owb} alt="" className='w-1/2 h-1/2 object-contain fixed bottom-0'/>  */}
        </div>
        <div className="mt-5">
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px] h-[120px]'>{description}</p>
          <div className='h-[50px] border-none'><img src={owb} alt="" className='w-[60%] object-contain'/></div>
        </div>

        <div className="mt-4 flex flew-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px]`}>
              #{tag.name}
            </p>
          ))}

        </div>
{/* <div className='absolute bottom-0'><img src={owb} alt="" className='w-1/2 h-1/2 object-contain'/> </div> */}

        </Tilt>
    </motion.div>
  );
}
const Works = () => {
  return (
    <>
    <motion.div
    variants={textVariant()}
    >
      <p className={styles.sectionSubText}>My work </p>
      <h2 className={styles.sectionHeadText}>Projects.</h2>
    </motion.div>
    <div className="w-full flex">
      <motion.p
       variants={fadeIn("", "", 0.1, 1)}
       className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
      </motion.p>
    </div>

    <div className="mt-20 flex flex-wrap gap-7">
      {projects.map((project, index) => (
        <ProjectCard key={`project-${index}`} index={index} {...project}/>
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(Works, "work");