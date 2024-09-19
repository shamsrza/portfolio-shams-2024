import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import {Tech} from '../components'


// const ServiceCard = ({title, index, icon}) => {
//   return (
//     <Tilt className="xs:w-[250px] w-full">
//       <motion.div
//         variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
//         className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
//       >
//         <div
//         options={{
//           max: 45,
//           scale: 1,
//           speed: 450
//         }}
//         className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
//         >
//           <img src={icon} alt="web-development" className="w-16 h-16 object-contain"/>
//           <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
//         </div>
//       </motion.div>
//     </Tilt>
//   );
// }

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I’m a skilled software developer with a passion for crafting innovative
        solutions using TypeScript and JavaScript. With expertise in frameworks
        like React, Node.js, and Three.js, I transform ideas into dynamic,
        scalable, and user-friendly applications. A fast learner and strong
        collaborator, I work closely with clients to deliver real-world
        solutions that are efficient and impactful. Ready to turn your vision
        into reality? Let’s make it happen!
      </motion.p>

      {/* <div className="mt-20 flex flex-wrap gap-10">
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service}/>
      ))}
    </div> */}

      <Tech />
    </>
  );
}

export default SectionWrapper (About, "about");