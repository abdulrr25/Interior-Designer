"use client";
import { TbArrowUpRight } from "react-icons/tb";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

// Import Swiper React Components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { desVariants, tagVariants, titleVariants } from "@/utils/animation";

export default function CatalogSwiperSection() {
  return (
    <div className="py-8 lg:py-28 px-8 lg:px-24">
      {/* Text Section */}
      <div className="container grid pb-8 lg:grid-cols-1">
        <div className="text-left">
          <motion.h1
            initial="offscreen"
            whileInView="onscreen"
            variants={titleVariants}
            viewport={{ once: true }}
            className="py-4 text-4xl font-medium lg:text-6xl lg:py-0"
          >
            Modern Classic
          </motion.h1>
          <motion.h2
            initial="offscreen"
            whileInView="onscreen"
            variants={desVariants}
            viewport={{ once: true }}
            className="pb-6 text-xl font-bold tracking-wider mt-5"
          >
            LUXURY DECOR TO CREATE COMFORT IN YOUR HOME
          </motion.h2>
        </div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={tagVariants}
          viewport={{ once: true }}
          className="grid grid-cols-2 text-gray-500 gap-x-8"
        >
          <p>
            With our passion for design and decor, we have created a collection
            of furniture and accessories that will help you create a comfortable
            and stylish home.
          </p>
          <p>
            Our curated collection includes modern, elegant pieces that blend
            seamlessly with your home, providing both style and functionality.
          </p>
        </motion.div>

        <a href="/gallery">
          <Button className="inline-flex items-center px-8 py-3 mt-4 text-white rounded-full shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2">
            View Gallery <TbArrowUpRight className="w-5 h-5 ml-2" />
          </Button>
        </a>
      </div>

      {/* Swiper Section */}
      <Swiper
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Autoplay]}
        className="mt-12"
      >
        <SwiperSlide>
          <Image
            src="/image/swiper1.jpg"
            alt="Luxury Living Room Setup"
            width={520}
            height={300}
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/image/swiper2.jpg"
            alt="Modern Kitchen Design"
            width={520}
            height={300}
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/image/swiper3.jpg"
            alt="Elegant Bedroom Decor"
            width={520}
            height={300}
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/image/swiper4.jpg"
            alt="Stylish Workspace"
            width={520}
            height={300}
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/image/swiper5.jpg"
            alt="Cozy Reading Corner"
            width={520}
            height={300}
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
