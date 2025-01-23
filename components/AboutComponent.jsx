"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import { desVariants, tagVariants, titleVariants } from "@/utils/animation";


const AboutComponent = () => {
  return (
    <div className="container py-12 xl:py-24 mx-auto px-4 lg:px-12">
      <div className="grid lg:grid-cols-2 place-items-center">
        <motion.div
          initial="offscreen"
                    whileInView={"onscreen"}
                    variants={titleVariants}
        >
          <Image 
            src="/image/aboutfront.png"
            width={900}
            height={500}
            alt="About"
            className="max-md:hidden"
          />
        </motion.div>

        <div className="items-center">
          <motion.h2 
          
          initial="offscreen"
                    whileInView={"onscreen"}
                    variants={titleVariants}

          className="px-8 lg:px-14 py-6 text-3xl font-extrabold leading-tight lg:text-5xl">
            A perfect blend of tradition and modernity.
          </motion.h2>
          <motion.p 

          initial="offscreen"
          whileInView={"onscreen"}
          variants={desVariants}

          className="px-8 lg:px-14 tracking-wider uppercase text-gray-400 mt-4">
            A sub-branch of Rangoli Builders.
          </motion.p>
          <motion.p 
                      initial="offscreen"
                      whileInView={"onscreen"}
                      variants={tagVariants}

          className="px-8 lg:px-14 pb-4 mt-4">
            This Company is engaged in the field of interior design. We provide the best interior design for your home. We have been trusted by many people to design their homes. We have been contributing in this field since 1990.
          </motion.p>

          <motion.p 
                      initial="offscreen"
                      whileInView={"onscreen"}
                      variants={tagVariants}

          className="px-8 lg:px-14 pb-4">
            We have been providing services to customers for the last 35 years and have received a great response. We treat our customers as a priority, which has earned us love and support from our clientele. Our main focus is that we truly believe in ensuring the satisfaction of our customers.
          </motion.p>

        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
