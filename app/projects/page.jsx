"use client";

import Image from "next/image";

const projects = [
  {
    id: 1,
    name: "Modern and Clean Kitchen",
    description: "A sleek, modern kitchen with clean lines and minimalist design.",
    image: "/image/work/kitchen15.jpg",
    link: "",
  },
  {
    id: 2,
    name: "Family Living Room",
    description: "A cozy living room designed for comfort and family gatherings.",
    image: "/image/tv4.jpg",
    link: "",
  },
  {
    id: 3,
    name: "Serene Temple Room",
    description: "A peaceful temple room with calming colors and spiritual accents.",
    image: "/image/work/temple1.jpg",
    link: "",
  },
  {
    id: 4,
    name: "Designer Washroom Cabinet",
    description: "A functional washroom cabinet design combining elegance and practicality perfectly.",
    image: "/image/work/w1.jpg",
    link: "",
  },
  {
    id: 5,
    name: "White Kitchen Design",
    description: "A bright, white-themed kitchen with modern features and minimalist design.",
    image: "/image/work/kitchen12.jpg",
    link: "",
  },
  {
    id: 6,
    name: "Modular Kitchen Design",
    description: "A modular kitchen design offering efficiency, style, and optimal functionality.",
    image: "/image/work/kitchen5.jpg",
    link: "",
  },
  {
    id: 7,
    name: "Blue Base Kitchen",
    description: "A modern modular kitchen featuring a stylish blue base color theme.",
    image: "/image/work/kitchen6.jpg",
    link: "",
  },
  {
    id: 8,
    name: "Metallic Brown Kitchen",
    description: "A luxurious metallic brown kitchen design with elegant modern features.",
    image: "/image/work/kitchen9.jpg",
    link: "",
  },
  {
    id: 9,
    name: "Temple Structure",
    description: "A beautifully detailed temple structure adorned with spiritual elements.",
    image: "/image/work/temple7.png",
    link: "",
  },
  {
    id: 10,
    name: "Ongoing TV Cabinet Work",
    description: "A stylish TV cabinet under construction .",
    image: "/image/work/19.png",
    link: "",
  },
  {
    id: 11,
    name: "Ongoing Modular Kitchen",
    description: "An ongoing modular kitchen with a blue color theme.",
    image: "/image/work/kitchen14.jpg",
    link: "",
  },
];

const Page = () => {
  return (
    <div>
      {/* Background Section */}
      <div className="bg-[url('/image/bgproject.jpg')] bg-cover bg-center bg-fixed">
        <h1 className="container py-32 text-5xl font-semibold tracking-widest text-white text-center">
          Our Projects
        </h1>
      </div>

      {/* Projects Grid */}
      <div className="container grid lg:grid-cols-3 sm:grid-cols-2 gap-8 py-8 px-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative overflow-hidden rounded-xl group shadow-lg hover:shadow-2xl transition duration-300 ease-in-out"
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
            <div className="absolute bottom-0 left-0 bg-white/90 dark:bg-black/50 flex flex-col items-center justify-end w-full h-48 p-6 text-xl transition duration-300 ease-in-out translate-y-full group-hover:translate-y-0">
              <h1 className="text-xl font-semibold text-center">{project.name}</h1>
              <p className="py-2 text-center">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
