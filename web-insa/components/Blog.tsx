"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";

const images = [
  {
    src: "/images/equilibrio.jpg",
    caption: "Paris with Eiffel Tower view",
    location: "Paris, France",
    date: "June 2023",
    rotation: "-3deg",
    marginTop: "0px",
  },
  {
    src: "/images/equilibrio.jpg",
    caption: "Beach sunset with palm tree silhouettes",
    location: "Bali, Indonesia",
    date: "August 2023",
    rotation: "2deg",
    marginTop: "-7px",
  },
  {
    src: "/images/equilibrio.jpg",
    caption: "Espresso and pastry at a sidewalk cafe",
    location: "Rome, Italy",
    date: "September 2023",
    rotation: "-2deg",
    marginTop: "-7px",
  },
  {
    src: "/images/equilibrio.jpg",
    caption: "Vintage car parked on colorful street",
    location: "Havana, Cuba",
    date: "May 2023",
    rotation: "3deg",
    marginTop: "0px",
  },
  {
    src: "/images/equilibrio.jpg",
    caption: "Vintage car parked on colorful street",
    location: "Havana, Cuba",
    date: "May 2023",
    rotation: "3deg",
    marginTop: "0px",
  },
  {
    src: "/images/equilibrio.jpg",
    caption: "Vintage car parked on colorful street",
    location: "Havana, Cuba",
    date: "May 2023",
    rotation: "3deg",
    marginTop: "0px",
  },
  {
    src: "/images/equilibrio.jpg",
    caption: "Vintage car parked on colorful street",
    location: "Havana, Cuba",
    date: "May 2023",
    rotation: "3deg",
    marginTop: "0px",
  },
  {
    src: "/images/equilibrio.jpg",
    caption: "Vintage car parked on colorful street",
    location: "Havana, Cuba",
    date: "May 2023",
    rotation: "3deg",
    marginTop: "0px",
  },
  {
    src: "/images/equilibrio.jpg",
    caption: "Vintage car parked on colorful street",
    location: "Havana, Cuba",
    date: "May 2023",
    rotation: "3deg",
    marginTop: "0px",
  },
  {
    src: "/images/equilibrio.jpg",
    caption: "Vintage car parked on colorful street",
    location: "Havana, Cuba",
    date: "May 2023",
    rotation: "3deg",
    marginTop: "0px",
  },
  {
    src: "/images/equilibrio.jpg",
    caption: "Vintage car parked on colorful street",
    location: "Havana, Cuba",
    date: "May 2023",
    rotation: "3deg",
    marginTop: "0px",
  },
  {
    src: "/images/equilibrio.jpg",
    caption: "Vintage car parked on colorful street",
    location: "Havana, Cuba",
    date: "May 2023",
    rotation: "3deg",
    marginTop: "0px",
  },
  {
    src: "/images/equilibrio.jpg",
    caption: "Vintage car parked on colorful street",
    location: "Havana, Cuba",
    date: "May 2023",
    rotation: "3deg",
    marginTop: "0px",
  },
];

const GridItem = ({ image, index }) => (
  <div
    className="group relative cursor-pointer"
    style={{
      marginTop: image.marginTop,
      transform: `rotate(${index % 2 === 0 ? "-2deg" : "2deg"})`,
      transformOrigin: "center center",
    }}
  >
    <div className="flex h-full w-full flex-col overflow-hidden rounded-md bg-white p-3 shadow-md transition-all duration-300 hover:shadow-xl">
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <Image
          alt={image.caption}
          src={image.src}
          fill
          className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="mt-3 py-2">
        <p className="font-serif mb-2 text-center text-sm font-medium text-gris">
          {image.caption}
        </p>
        <div className="flex items-center justify-between text-xs text-rosa/80">
          <div className="flex items-center">
            <i className="lucide lucide-map-pin mr-1 h-3 w-3" />
            <span>{image.location}</span>
          </div>
          <div className="flex items-center">
            <i className="lucide lucide-calendar mr-1 h-3 w-3" />
            <span>{image.date}</span>
          </div>
        </div>
      </div>
    </div>
    <div className="pointer-events-none absolute -top-3 left-1/2 h-6 w-16 -translate-x-1/2 rotate-3 bg-gray-100/80 shadow-sm" />
  </div>
);

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(6);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(images.length / itemsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  return (
    <section className="py-24 bg-beige">
      {/* Title section */}
      <motion.div
        className="mb-16"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ amount: 0.3 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative inline-block">
            <h2 className="text-3xl md:text-5xl font-serif text-gris tracking-wide mb-4">
              BLOG
            </h2>
            <span className="absolute -bottom-2 left-1/2 w-24 h-0.5 bg-rosa transform -translate-x-1/2"></span>
          </div>
        </div>
      </motion.div>

      {/* Updated Carousel Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="overflow-hidden mb-8">
            <motion.div
              className="flex"
              animate={{
                x: `${-100 * currentPage}%`,
              }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
            >
              {Array.from({ length: totalPages }).map((_, pageIndex) => (
                <div
                  key={pageIndex}
                  className="w-full flex-shrink-0"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-sm sm:max-w-none mx-auto">
                    {images
                      .slice(
                        pageIndex * itemsPerPage,
                        (pageIndex + 1) * itemsPerPage
                      )
                      .map((image, idx) => (
                        <GridItem
                          key={idx}
                          image={image}
                          index={pageIndex * itemsPerPage + idx}
                        />
                      ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons - Updated for better mobile centering */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-0 mt-8 sm:mt-0 sm:absolute sm:top-1/2 sm:-translate-y-1/2 w-full sm:-mx-12 lg:-mx-16">
            <div className="flex justify-center gap-8 sm:w-full sm:justify-between sm:px-16">
              <button
                onClick={prevPage}
                className="bg-rosa/10 rounded-full p-3 shadow-md hover:bg-rosa/20 transition-colors"
                aria-label="Previous page"
              >
                <IconArrowNarrowLeft className="h-6 w-6 text-rosa" />
              </button>
              <button
                onClick={nextPage}
                className="bg-rosa/10 rounded-full p-3 shadow-md hover:bg-rosa/20 transition-colors"
                aria-label="Next page"
              >
                <IconArrowNarrowRight className="h-6 w-6 text-rosa" />
              </button>
            </div>
          </div>

          {/* Page Indicator - Updated spacing */}
          <div className="flex justify-center mt-4">
            <span className="text-gris font-sans">
              {currentPage + 1} / {totalPages}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
