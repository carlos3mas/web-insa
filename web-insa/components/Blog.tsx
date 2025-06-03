"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";

// Update the images array to include Instagram links
const images = [
	{
		src: "/images/meditacion.jpg",
		location: "Onda (Castellón) España",
    caption: "MEDITACION",
		date: "5 de mayo de 2024",
		rotation: "-3deg",
		marginTop: "0px",
		instagramUrl: "https://www.instagram.com/p/C6mFpQ_IM5Z/?img_index=1", 
	},
	{
		src: "/images/insomnio.jpg",
    caption: "INSOMNIO",
		location: "Onda (Castellón) España",
		date: "19 de mayo de 2024",
		rotation: "2deg",
		marginTop: "-7px",
		instagramUrl: "https://www.instagram.com/p/C7KNMnDIIhk/?img_index=1",
	},
	{
		src: "/images/adicciones.png",
    caption: "ADICCIONES",
		location: "Onda (Castellón) España",
		date: "26 de mayo de 2024",
		rotation: "-2deg",
		marginTop: "-7px",
		instagramUrl: "https://www.instagram.com/p/C7cYztVoovn/?img_index=1",
	},
	{
		src: "/images/equilibrio.jpg",
		caption: "Vintage car parked on colorful street",
		location: "Havana, Cuba",
		date: "May 2023",
		rotation: "3deg",
		marginTop: "0px",
		instagramUrl: "https://www.instagram.com/p/yourPostId4/",
	},
	{
		src: "/images/equilibrio.jpg",
		caption: "Vintage car parked on colorful street",
		location: "Havana, Cuba",
		date: "May 2023",
		rotation: "3deg",
		marginTop: "0px",
		instagramUrl: "https://www.instagram.com/p/yourPostId5/",
	},
	{
		src: "/images/equilibrio.jpg",
		caption: "Vintage car parked on colorful street",
		location: "Havana, Cuba",
		date: "May 2023",
		rotation: "3deg",
		marginTop: "0px",
		instagramUrl: "https://www.instagram.com/p/yourPostId6/",
	},
	{
		src: "/images/equilibrio.jpg",
		caption: "Vintage car parked on colorful street",
		location: "Havana, Cuba",
		date: "May 2023",
		rotation: "3deg",
		marginTop: "0px",
		instagramUrl: "https://www.instagram.com/p/yourPostId7/",
	},
	{
		src: "/images/equilibrio.jpg",
		caption: "Vintage car parked on colorful street",
		location: "Havana, Cuba",
		date: "May 2023",
		rotation: "3deg",
		marginTop: "0px",
		instagramUrl: "https://www.instagram.com/p/yourPostId8/",
	},
	
];

const GridItem = ({ image, index }) => (
	<a
		href={image.instagramUrl}
		target="_blank"
		rel="noopener noreferrer"
		className="group relative cursor-pointer block transform transition-transform duration-300 hover:-translate-y-1"
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
				{/* Instagram icon overlay */}
				<div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/30 transition-all duration-300">
					<svg
						className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
						viewBox="0 0 24 24"
						fill="currentColor"
					>
						<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
					</svg>
				</div>
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
	</a>
);

export default function Blog() {
	const [currentPage, setCurrentPage] = useState(0);
	const [itemsPerPage, setItemsPerPage] = useState(3);

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
		<section className="py-24 relative">
			{/* Gradient Background - Top position with beige */}
			<div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_-20%,#E8D5BD_40%,#fff_70%)]"></div>

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
					<div className="overflow-hidden">
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
								<div key={pageIndex} className="w-full flex-shrink-0">
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

					{/* Navigation Controls - Moved to bottom */}
					<div className="mt-8 flex flex-col items-center gap-4">
						{/* Page Indicator */}
						<span className="text-gris font-sans">
							{currentPage + 1} / {totalPages}
						</span>

						{/* Navigation Buttons */}
						<div className="flex justify-center gap-4">
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
				</div>
			</div>
		</section>
	);
}
