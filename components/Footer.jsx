"use client";

import { desVariants, tagVariants, titleVariants } from "@/utils/animation";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="bg-[#FBEFF2] dark:bg-[#292C3D]">
      <div className="container lg:grid lg:grid-cols-3 py-8 px-4 gap-8">
        {/* Company Section */}
        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titleVariants}
        >
          <h2 className="pb-4 text-xl font-semibold uppercase">Company</h2>
          <div className="flex flex-col">
            <Link href="/about" className="py-1.5 hover:underline">
              About Us
            </Link>
            <Link href="/gallery" className="py-1.5 hover:underline">
              Gallery
            </Link>
            <Link href="/projects" className="py-1.5 hover:underline">
              Projects
            </Link>
            <Link href="/contact" className="py-1.5 hover:underline">
              Contact Us
            </Link>
          </div>
        </motion.div>

        {/* Connect Section */}
        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={tagVariants}
        >
          <h2 className="pb-4 text-xl font-semibold uppercase">Connect</h2>
          <div className="flex flex-col">
            <Link
              href="https://www.instagram.com/nrb_kitchen_studio/"
              className="py-1.5 hover:underline"
            >
              Instagram
            </Link>
            <Link
              href="https://www.facebook.com/rangolibuilders"
              className="py-1.5 hover:underline"
            >
              Facebook
            </Link>
            <Link href="tel:+918299355299" className="py-1.5 hover:underline">
              8299355299
            </Link>
            <Link href="tel:+918181800938" className="py-1.5 hover:underline">
              8181800938
            </Link>
          </div>
        </motion.div>

        {/* Location Section with Map */}
        <motion.div
  initial="offscreen"
  whileInView={"onscreen"}
  variants={tagVariants}
>
  <h2 className="pb-4 text-xl font-semibold uppercase">Location</h2>
  <div className="flex flex-col">
    {/* Embedded Google Map with Pin */}
    <iframe
      id="map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.4910072795075!2d82.078532!3d26.281176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a7d5221b22235%3A0xfb8518a1075fbd95!2sNew%20Rangoli%20Builders!5e0!3m2!1sen!2sin!4v1698485425104!5m2!1sen!2sin"
      width="60%"
      height="130"
      style={{
        border: 0,
// Dark mode effect
        transition: 'filter 0.3s ease',
      }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="rounded-sm"
    ></iframe>
    {/* Link to Google Maps */}
    <Link
      href="https://www.google.com/maps/place/New+Rangoli+Builders/@26.281176,82.078532,17z/data=!4m12!1m5!3m4!2zMjbCsDE2JzUyLjIiTiA8MsKwMDQnNDIuNyJF!8m2!3d26.281176!4d82.078532!3m5!1s0x399a7d5221b22235:0xfb8518a1075fbd95!8m2!3d26.2810797!4d82.0780065!16s%2Fg%2F11hzwf7p5b?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
      target="_blank"
      rel="noopener noreferrer"
      className="pt-2 text-black dark:text-white hover:underline"
    >
      Open in Google Maps
    </Link>
  </div>
</motion.div>

      </div>

      {/* CopyRight */}
      <motion.div
        initial="offscreen"
        whileInView={"onscreen"}
        variants={desVariants}
        className="py-4 bg-black dark:bg-primary"
      >
        <div className="container text-white text-center lg:justify-between lg:flex px-4">
          <div className="pb-4 lg:pb-0">
            <p>&copy; 2025 Interior. All Rights Reserved</p>
          </div>
          <div>
            Designed & Developed By{" "}
            <Link
              href="https://www.linkedin.com/in/abdulrr25/"
              className="hover:cursor-pointer hover:underline"
            >
              Abdul Rahman
            </Link>
          </div>
          <div>
            <Link
              className="p-4 hover:underline"
              href="https://copyright.gov.in/PrivacyPolicy.aspx"
            >
              Privacy Terms
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
