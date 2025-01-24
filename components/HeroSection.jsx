"use client";
import { ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import { desVariants, tagVariants, titleVariants } from "@/utils/animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="container py-12 xl:py-24 h-auto text-center lg:py-0 lg:text-left lg:flex lg:justify-between px-6 lg:px-16">
      {/* Left Section */}
      <div className="lg:w-1/2 xl:py-14 lg:py-8 px-6 lg:px-12">
        
        <motion.p 
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titleVariants}
          className="tracking-widest uppercase">
          Offer For the Best Interior
        </motion.p>

        <motion.h1 
          initial="offscreen"
          whileInView={"onscreen"}
          variants={desVariants}
          className="h1">
          Make Your Home a <br /> Piece of Art
        </motion.h1>
        
        <motion.p 
          initial="offscreen"
          whileInView={"onscreen"}
          variants={tagVariants}
          className="pb-6 text-muted-foreground xl:pb-10">
          Change your view with the best interior design. We provide the best interior design for your home, making every moment beautiful.
        </motion.p>

        <motion.div 
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titleVariants}
        >
          <Link href="/contact">
            <Button 
              className="inline-flex items-center px-8 py-3 text-white rounded-full shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2">
              Book Now <ArrowUpRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Right Image Section */}
      <div className="w-1/2">
        <Image
          src="/image/hall.png"
          width={800}
          height={500}
          alt="Interior image"
          className="absolute right-20 xl:h-[448px] xl:w-[700px] lg:h-[344px] lg:w-[500px] hidden lg:block"
        />
      </div>
    </div>
  );
};

export default HeroSection;
