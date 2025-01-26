"use client";
import React, { useRef } from "react";
import Image from "next/image";
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

        <div className="items-center lg:flex gap-x-8 lg:px-10">
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
            <p className="pb-8 tracking-wide mt-6 text-justify">
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
            
          </motion.div>
        </div>
        <div className="lg:py-20 lg:px-20">
          <div pt-8 pb-4>
            <motion.h1 
                        initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
            className="text-4xl font-bold tracking-wider text-center uppercase ">Team</motion.h1>
          </div>

          <div className="grid py-8 gap-20 lg:grid-cols-3 ">
          <motion.div
  initial="offscreen"
  whileInView={"onscreen"}
  variants={titleVariants}
  className="border-2 border-primary"
>
  <div className="p-4 text-center bg-gray-100 aspect-square dark:bg-[#292C3D] -m-0.5 transition hover:-translate-y-3 hover:-translate-x-3">
    <Image src="/image/profile2.jpg" width={200} height={200} alt="Javed Ahmad - Director" className="mx-auto rounded-full"/>
    <h2 className="py-2 text-2xl font-semibold uppercase">Javed Ahmad</h2>
    <h3 className="font-semibold">Director</h3>
    <p className="text-sm">
    leading the team with 4+ years of experience, ensuring innovative and high-quality designs for every project.
    </p>
  </div>
</motion.div>

<motion.div
  initial="offscreen"
  whileInView={"onscreen"}
  variants={desVariants}
  className="border-2 border-primary"
>
  <div className="p-4 text-center bg-gray-100 aspect-square dark:bg-[#292C3D] -m-0.5 transition hover:-translate-y-3 hover:-translate-x-3">
    <Image src="/image/profile1.jpg" width={200} height={200} alt="Tashreeq Ahmad - Marketing Manager" className="mx-auto rounded-full"/>
    <h2 className="py-2 text-2xl font-semibold uppercase">Tashreeq Ahmad</h2>
    <h3 className="font-semibold">Marketing Manager</h3>
    <p className="text-sm">
    Tashreeq manages our marketing efforts, driving brand growth and ensuring our services reach the right audience.
    </p>
  </div>
</motion.div>

<motion.div
  initial="offscreen"
  whileInView={"onscreen"}
  variants={tagVariants}
  className="border-2 border-primary"
>
  <div className="p-4 text-center bg-gray-100 aspect-square dark:bg-[#292C3D] -m-0.5 transition hover:-translate-y-3 hover:-translate-x-3">
    <Image src="/image/profile3.jpg" width={200} height={200} alt="Saleem Khan - Sales Head" className="mx-auto rounded-full"/>
    <h2 className="py-2 text-2xl font-semibold uppercase">Saleem Khan</h2>
    <h3 className="font-semibold">Sales Head</h3>
    <p className="text-sm">
    Saleem oversees sales strategy, building client relationships, and driving business growth.
    </p>
  </div>
</motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
