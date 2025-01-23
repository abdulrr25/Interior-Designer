import Image from "next/image";
import { TbArrowNarrowRight } from "react-icons/tb";

export default function CatalogueSection() {
  const items = [
    {
      id: "01",
      category: "TEMPLE SETUP",
      title: "Temple Setup",
      image: "/image/temple.jpg",
      description:
        "A beautifully designed temple setup, perfect for your home.",
    },
    {
      id: "02",
      category: "KITCHEN SETUP",
      title: "Neat & Clean Kitchen",
      image: "/image/kitchen1.jpg",
      description:
        "A modern and organized kitchen design for your home",
    },
    {
      id: "03",
      category: "WARDROBES SETUP",
      title: "Modular Wardrobe",
      image: "/image/wardrobe.jpg",
      description:
        "Upgrade your storage with stylish and functional modular wardrobes.",
    },
    {
      id: "04",
      category: "TELEVISION CABINET",
      title: "Television Cabinets",
      image: "/image/tvcabinet.jpg",
      description:
        "Add elegance to your living space with our sleek and contemporary TV cabinet designs.",
    },
  ];

  return (
    <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2 lg:gap-0">
      {items.map((item) => (
        <div key={item.id} className="relative overflow-hidden group">
          {/* Image Section */}
          <div>
            <Image
              src={item.image}
              alt={`Image of ${item.title}`}
              layout="responsive"
              width={16}
              height={10}
              className="w-full"
            />
          </div>

          {/* Text Section */}
          <div className="absolute top-0 p-8 bg-white text-black bg-opacity-60 backdrop-blur m-12">
            <div className="flex justify-between pb-4">
              <p className="text-sm">{item.category}</p>
              <span className="text-sm">{item.id}</span>
            </div>

            <a className="block text-xl font-semibold" href="#">
              {item.title}
            </a>
            <p className="py-4">{item.description}</p>
            <a
              className="inline-flex items-center font-medium"
              href={`/details/${item.id}`}
            >
              See Details
              <TbArrowNarrowRight className="ml-2" />
            </a>
          </div>
          <div className="inset-0 bg-[#FBEFF2] dark:bg-[#292C3D] flex-col items-center justify-end md:flex md:absolute gap-32 pb-16 text-xl transition duration-300 ease-in-out border-b-2 group-hover:translate-y-full md:border-b-0 hidden">
            <p className="tracking-wider -rotate-90 ">{item.category}</p>
            <span>{item.id}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
