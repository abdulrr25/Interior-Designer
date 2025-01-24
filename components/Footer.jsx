"use client";

import { desVariants, tagVariants, titleVariants } from "@/utils/animation";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="bg-[#FBEFF2] dark:bg-[#292C3D]">
      <div className="container lg:grid lg:grid-cols-3 py-14 px-4 gap-8">
        {/* Company Section */}
        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titleVariants}
        >
          <h2 className="pb-4 text-xl font-semibold uppercase">Company</h2>
          <div className="flex flex-col">
            <Link href="/about" className="py-1 hover:underline">
              About Us
            </Link>
            <Link href="/" className="py-1 hover:underline">
              Press
            </Link>
            <Link href="/" className="py-1 hover:underline">
              Careers
            </Link>
            <Link href="/contact" className="py-1 hover:underline">
              Contact Us
            </Link>
          </div>
        </motion.div>

        {/* Development Section */}
        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={desVariants}
        >
          <h2 className="pb-4 text-xl font-semibold uppercase">Development</h2>
          <div className="flex flex-col">
            <Link href="/" className="py-1 hover:underline">
              Documentation
            </Link>
            <Link href="/" className="py-1 hover:underline">
              Reference
            </Link>
            <Link href="/" className="py-1 hover:underline">
              Changelog
            </Link>
            <Link href="/" className="py-1 hover:underline">
              Status
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
              className="py-1 hover:underline"
            >
              Instagram
            </Link>
            <Link
              href="https://www.facebook.com/javedmirza07"
              className="py-1 hover:underline"
            >
              Facebook
            </Link>
            <Link href="tel:+918299355299" className="py-1 hover:underline">
              8299355299
            </Link>
            <Link href="tel:+918181800938" className="py-1 hover:underline">
              8181800938
            </Link>
          </div>
        </motion.div>
      </div>

      {/* CopyRight */}
      <motion.div
        initial="offscreen"
        whileInView={"onscreen"}
        variants={desVariants}
        className="py-10 bg-black dark:bg-primary"
      >
        <div className="container text-white text-center lg:justify-between lg:flex px-4">
          <div className="pb-4 lg:pb-0">
            <p>&copy; 2025 Interior. All Rights Reserved</p>
          </div>
          <div>
            <Link className="p-4 hover:underline" href="https://copyright.gov.in/PrivacyPolicy.aspx">
              Privacy Terms
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
