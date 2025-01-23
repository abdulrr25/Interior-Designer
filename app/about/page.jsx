"use client";
import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { TbArrowUpRight } from "react-icons/tb";
import { motion, useScroll, useTransform } from "framer-motion";
import { desVariants, tagVariants, titleVariants } from "@/utils/animation";

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <div>
      <div className='bg-[url("/image/whoweare.jpg")] bg-center bg-cover'>
        <h1 className="container py-32 text-6xl font-semibold text-black tracking-widest text-center lg:py-64 ">
          Who Are We?
        </h1>
      </div>

      <div className="container">
        <div className="pt-4">
          <motion.h2
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
            className="text-3xl font-semibold text-center lg:p-10 lg:text-5xl"
          >
            We Have Great Ideas & Expertise in Interior Design
          </motion.h2>
          <motion.p
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tagVariants}
            className="text-2xl text-center font-medium pb-10 mt-5"
          >
            Our Interior Design Company provides top-notch services for homes, 
            offices, apartments, and more. With a highly experienced team, 
            we ensure quality and excellence in all our projects.
          </motion.p>
        </div>

        <div className="items-center lg:flex gap-x-8">
          {/* Left Image Section */}
          <motion.div style={{ scale }} ref={ref} className="w-full">
            <Image src="/image/gallery1123.jpg" width={700} height={700} alt="Gallery Image" />
          </motion.div>

          {/* Right Text Section */}
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tagVariants}
          >
            <p className="pb-8 tracking-wide mt-6">
              We are a team of internationally acclaimed architects committed 
              to redefining architectural education and innovation. At the heart 
              of our work is a dedication to integrating new societal visions and 
              enhancing communication in design. Our handcrafted designs 
              showcase creativity, precision, and functionality. <br /> <br />
              Through our services, we strive to deliver exceptional quality that 
              stands the test of time. From crafting architectural portfolios to 
              designing homes, we emphasize innovation and elegance in every project. 
              <br /> <br />
              <span className="text-xl font-extrabold tracking-tight">
                As a branch of Rangoli Builders, we bring 35 years of experience 
                to our customers, consistently receiving positive feedback and 
                trust in our services.
              </span>
            </p>
            <Button className="inline-flex items-center px-8 py-3 shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2">
              Read More
              <TbArrowUpRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
};

export default About;
