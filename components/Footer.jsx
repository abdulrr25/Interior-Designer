"use client"

import { desVariants, tagVariants, titleVariants } from "@/utils/animation"
import { motion } from "framer-motion"
import Link from "next/link"
import React from "react"
import { Input } from "./ui/input"


export default function Footer(){
    
    return(
        <div className="bg-[#FBEFF2] dark:bg-[#292C3D]">
            <div className="container lg:grid lg:grid-cols-2 py-14 px-4">
                <div className="grid gap-4 pb-4 text-left lg:pb-0 lg:grid-cols-3">
                    <motion.div 
                              initial="offscreen"
                              whileInView={"onscreen"}
                              variants={titleVariants}
                    >
                        <h2 className="pb-4 text-xl font-semibold uppercase">
                            Company 
                        </h2>
                        <div className="flex flex-col ">
                            <Link href='/' className="py-1 hover:underline">About Us</Link>
                            <Link href='/' className="py-1 hover:underline">Press</Link>
                            <Link href='/' className="py-1 hover:underline">Careers</Link>
                            <Link href='/' className="py-1 hover:underline">Contact Us</Link>
                        </div>
                    </motion.div>

                    <motion.div
                              initial="offscreen"
                              whileInView={"onscreen"}
                              variants={desVariants}
                    >
                        <h2 className="pb-4 text-xl font-semibold uppercase">
                            Development 
                        </h2>
                        <div className="flex flex-col ">
                            <Link href='/' className="py-1 hover:underline">Documentation</Link>
                            <Link href='/' className="py-1 hover:underline">Reference</Link>
                            <Link href='/' className="py-1 hover:underline">Changelog</Link>
                            <Link href='/' className="py-1 hover:underline">Status</Link>
                        </div>
                    </motion.div>

                    <motion.div
                              initial="offscreen"
                              whileInView={"onscreen"}
                              variants={tagVariants}
                    >
                        <h2 className="pb-4 text-xl font-semibold uppercase">
                            Connect 
                        </h2>
                        <div className="flex flex-col ">
                            <Link href='https://www.instagram.com/nrb_kitchen_studio/' className="py-1 hover:underline">Instagram</Link>
                            <Link href='https://www.facebook.com/javedmirza07?mibextid=JRoKGi&rdid=f8Xnf5Rp6ISPhMn8&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F66MMPmVLwWxWJ5YM%2F%3Fmibextid%3DJRoKGi' className="py-1 hover:underline">Facebook</Link>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                          initial="offscreen"
                          whileInView={"onscreen"}
                          variants={desVariants}
                >
                    <p className="pb-4 text-xl font-semibold">Stay Updated </p>
                    <div className="relative lg:max-w-sm">
                        <Input type='name' id='first name' placeholder='EmailAddress' />
                        <button  className="absolute bg-black text-white rounded-full h-10 px-3 text-sm top-2 right-2 hover:border-2 hover:border-black hover:bg-white hover:text-black dark:bg-primary ">
                            Subscribe
                        </button>
                    </div>
                    <p className="pt-4 text-gray-500">
                        By Subscribing to our newsletter ,Your agree to Receive Emails From us . Your personal data will be stored and processed in accordance with our Privacy Policy
                        and you can unsubscribe at any time.
                    </p>
                </motion.div>
            </div>
            {/* CopyRight */}
            <motion.div 
                      initial="offscreen"
                      whileInView={"onscreen"}
                      variants={desVariants}
            className="py-10 bg-black dark:bg-primary">
                <div className="container text-white text-center lg:justify-between lg:flex px-4">
                    <div className="pb-4 lgg:pb-0">
                        <p>&copy; 2025 Interior. All Rights Reserved</p>
                    </div>
                    <div>
                        <Link className="p-4 hover:underline" href='/'>Privacy</Link>
                        <Link className="p-4 hover:underline" href='/'>Terms</Link>
                    </div>
                </div>
            </motion.div>

        </div>
    )
}