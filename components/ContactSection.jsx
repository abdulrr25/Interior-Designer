"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import { desVariants, tagVariants, titleVariants } from "@/utils/animation";

const posts = [
  {
    id: 1,
    title: "Maximize Your ROI with Expert Strategies",
    href: "#",
    description:
      "Amazing service! The strategies provided were easy to follow and brought great results.",
    date: "Feb 10, 2024",
    datetime: "2024-02-10",
    category: { title: "4.8", href: "#" },
    author: {
      name: "Natasha Iliana",
      role: "Marketing Specialist",
      href: "#",
      imageUrl: "",
    },
  },
  {
    id: 2,
    title: "Streamline Operations with Modern Tools",
    href: "#",
    description:
      "The tools are simple to use and have significantly improved our team's workflow.",
    date: "Jul 20, 2024",
    datetime: "2024-07-20",
    category: { title: "4.7", href: "#" },
    author: {
      name: "Aviraj Singh",
      role: "Business Owner",
      href: "#",
      imageUrl: "",
    },
  },
  {
    id: 3,
    title: "Deliver Exceptional Customer Experiences",
    href: "#",
    description:
      "Great advice on improving customer relationships—truly transformative for our team.",
    date: "May 5, 2024",
    datetime: "2024-05-05",
    category: { title: "4.7", href: "#" },
    author: {
      name: "Sahil Salim",
      role: "Customer Support Manager",
      href: "#",
      imageUrl: "",
    },
  },
];

export default function ContactSection() {
  return (
    <div className="pt-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.h2
          initial="offscreen"
          whileInView="onscreen"
          variants={titleVariants}
          className="text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Customer Review
        </motion.h2>
        <motion.p
          initial="offscreen"
          whileInView="onscreen"
          variants={desVariants}
          className="mt-2 text-lg leading-8 text-muted-foreground "
        >
          Learn How to grow your business with our expert advice
        </motion.p>

        <motion.div 
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={tagVariants}
        className="mx-auto  mt-10 grid lg:grid-cols-3 grid-cols-1 lg:max-w-none lg:mx-0 sm:py-16 sm:mt-16 py-10 border-b border-gray-200  border-t gap-y-16 ">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between "
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime="post.datetime">
                  <Image src={"/image/star.svg"} width={80} height={5} />
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 bg-primary rounded-full text-white px-3 py-1.5 font-medium hover:bg-gray-200 hover:text-black  transition-all"
                >
                  {post.category.title}
                </a>
              </div>

              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 group-hover:text-gray-600 ">
                  <a href={post.href}>
                    <span>{post.title}</span>
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-muted-foreground ">
                  {post.description}
                </p>
              </div>

              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  src={post.author.imageUrl}
                  alt=""
                  className="h-10 w-10 rounded-full bg-gray-500 "
                />

                <div className="text-sm leading-6">
                  <p className="font-semibold">
                    <a href={post.author.href}>
                      <span />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-muted-foreground">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
