"use client";

import Image from "next/image";

const projects = [
  {
    id: 1,
    name: "Modern and Clean Kitchen",
    description: "A sleek, modern kitchen with a clean and elegant design.",
    image: "/image/work/kitchen15.jpg",
    link: "",
  },
  {
    id: 2,
    name: "Family Living Room",
    description: "A cozy living room, perfect for creating family memories.",
    image: "/image/tv4.jpg",
    link: "",
  },
  {
    id: 3,
    name: "Serene Temple Room",
    description: "A peaceful temple room designed for spiritual moments.",
    image: "/image/work/temple1.jpg",
    link: "",
  },
  {
    id: 4,
    name: "Designer Washroom Cabinet",
    description: "A functional and stylish washroom cabinet design.",
    image: "/image/work/w1.jpg",
    link: "",
  },
  {
    id: 5,
    name: "White Kitchen Design",
    description: "A bright and minimal white-themed kitchen design.",
    image: "/image/work/kitchen12.jpg",
    link: "",
  },
  {
    id: 6,
    name: "Modular Kitchen Design",
    description: "A practical and modern modular kitchen setup.",
    image: "/image/work/kitchen5.jpg",
    link: "",
  },
  {
    id: 7,
    name: "Blue Base Kitchen",
    description: "A modular kitchen with a stylish blue base theme.",
    image: "/image/work/kitchen6.jpg",
    link: "",
  },
  {
    id: 8,
    name: "Metallic Brown Kitchen",
    description: "A luxurious kitchen with a metallic brown finish.",
    image: "/image/work/kitchen9.jpg",
    link: "",
  },
  {
    id: 9,
    name: "Flower-Decorated Temple Structure",
    description: "A serene and beautiful temple structure adorned with flowers.",
    image: "/image/work/temple7.png",
    link: "",
  },
  {
    id: 10,
    name: "Ongoing TV Cabinet Work",
    description: "A stylish and modern TV cabinet under construction.",
    image: "/image/work/19.png",
    link: "",
  },
  {
    id: 11,
    name: "Ongoing Blue Theme Modular Kitchen",
    description: "A chic blue-themed modular kitchen currently in progress.",
    image: "/image/work/kitchen14.jpg",
    link: "",
  },
];


const Page = () => {
  return (
    <div>
      {/* Background Section */}
      <div className='bg-[url("/image/bgproject.jpg")] bg-cover bg-center'>
        <h1 className="container py-64 text-6xl font-semibold tracking-widest text-white text-center">
          Our Projects
        </h1>
      </div>

      {/* Projects Grid */}
      <div className="container grid lg:grid-cols-3 gap-8 py-8 px-4 ">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative overflow-hidden rounded-xl group"
          >
            {/* Project Image */}
            <Image
              src={project.image}
              width={480}
              height={320} // Uniform image size
              alt={project.name}
              className="w-full h-[320px] object-cover"
            />

            {/* Project Details */}
            <div className="absolute bottom-0 right-0 bg-white/90 dark:bg-black/40 flex-col items-center justify-end w-96 gap-32 p-12 text-xl transition duration-300 ease-in-out translate-y-full from-transparent to-black group-hover:translate-y-0">
              <h1 className="text-2xl font-semibold">{project.name}</h1>
              <p className="py-4">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
