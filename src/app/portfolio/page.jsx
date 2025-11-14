import Image from "next/image";
import Link from "next/link";
import React from "react";

const Portfolio = () => {
  const galleries = [
    {
      title: "Illustrations",
      img: "/illustration.png",
      href: "/portfolio/illustrations",
      active: false,
    },
    {
      title: "Websites",
      img: "/websites.jpg",
      href: "/portfolio/websites",
      active: false,
    },
    {
      title: "Applications",
      img: "/apps.jpg",
      href: "/portfolio/applications",
      active: false,
    },
  ];

  return (
    <section className=" py-12">
      {/* Section Title */}
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-black mb-4">Our Works</h1>
        <h2 className="text-xl font-semibold mb-10 text-mainColor">Choose a gallery</h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleries.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`relative group overflow-hidden rounded-md border-2 transition-all duration-300 hover:scale-[1.02] ${item.active ? "border-mainColor" : "border-gray-700"
                }`}
            >
              {/* Image */}
              <div className="relative w-full h-[300px]">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className={`object-cover transition-all duration-500 ${item.active
                    ? "brightness-100"
                    : "brightness-75 grayscale group-hover:brightness-100 group-hover:grayscale-0"
                    }`}
                />
              </div>

              {/* Overlay Text */}
              <div className="absolute  bottom-0 left-0 right-0 bg-black/60 py-3 text-lg font-semibold text-center">
                <span
                  className={`${item.active ? "text-green-400" : "text-gray-200"
                    } `}
                >
                  {item.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
