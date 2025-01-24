"use client";

import Image from "next/image";

const projects = [
  {
    id: 1,
    name: "Kitchen Look Modern and Clean",
    description: "Clean Kitchen with wonderful designing for your family",
    image: "/image/projects/kitchen4.jpg",
    link: "",
  },
  {
    id: 2,
    name: "Living Room for Family Time",
    description:
      "A Living room for spending some quality time with your family",
    image: "/image/projects/tv4.jpg",
    link: "",
  },
  {
    id: 3,
    name: "Temple Room",
    description: "A beautiful temple room with a serene and peaceful design",
    image: "/image/projects/temple3.jpg",
    link: "",
  },
  // {
  //   id: 4,
  //   name: "A Designer Wardrobe For your room",
  //   description: "A beautiful temple room with a serene and peaceful design",
  //   image: "/image/projects/wardrobe12.jpg",
  //   link: "",
  // },
];

const page = () => {
  return (
    <div>
      {/* Background Section */}
      <div className='bg-[url("/image/bgproject.jpg")] bg-cover bg-center'>
        <h1 className="container py-64 text-6xl font-semibold tracking-widest text-white">
          Our Projects
        </h1>
      </div>
      <div className="container grid lg:grid-cols-2 gap-8 py-8">
        {
          projects.map((projects)=>(
            <div key={projects.id} className="relative overflow-hidden rounded-xl group ">
              <div>
                <Image src={projects.image} width={480} height={380} alt="" className="w-full"/>
              </div>
              <div className="absolute bottom-0 right-0 bg-white/90 dark:bg-black/40 flex-col items-center justify-end w-96 gap-32 p-12 text-xl transition duration-300 ease-in-out translate-y-full from-transparent to-black group-hover:translate-y-0 ">
                <h1 className="text-2xl font-semibold">{projects.name}</h1>
                <p className="py-4">{projects.description}</p>
              </div>
              </div>
          ))
        }
      </div>
  </div>

  );
};

export default page;
