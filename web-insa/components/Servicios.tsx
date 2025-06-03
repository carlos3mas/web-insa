"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel"; // Added Card import

// Define the data
const data = [
	{
		title: "Masaje Terapéutico",
		description:
			"Técnicas especializadas para aliviar tensiones y mejorar la recuperación física.",
		src: "/images/masaje-terapeutico.jpg",
		
		
	},
	{
		title: "Terapia Energética",
		description:
			"Equilibrio energético para tu bienestar físico y emocional.",
		src: "/images/terapia-energetica.jpg",
	
	},
	{
		title: "Equilibrio Interior",
		description: "Encuentra la armonía entre cuerpo, mente y espíritu.",
		src: "/images/equilibrio.jpg",
		
		
	},
];

const ServiceCard = ({ item }) => (
	<div className="bg-beige p-8 rounded-3xl">
		{/* Category and Title */}
		<div className="mb-8">
			<span className="text-sm font-sans text-rosa uppercase tracking-wider">
				{item.category}
			</span>
		</div>

		{/* Video Container */}
		<div className="relative w-full aspect-video mb-6 rounded-lg overflow-hidden bg-gray-100">
			{/* Here you can add your video component */}
			<div className="absolute inset-0 flex items-center justify-center text-gris">
				<span className="font-sans text-sm">Espacio para video</span>
			</div>
		</div>

		{/* Description */}
		<div className="space-y-4">
			<p className="text-gris font-sans leading-relaxed">
				{item.description}
			</p>
			<p className="text-gris/80 font-sans text-sm italic">
				Descubre más sobre{" "}
				{item.title.toLowerCase()}
				y sus beneficios para tu bienestar.
			</p>
		</div>
	</div>
);

export default function Servicios() {
	const [itemsToShow, setItemsToShow] = useState(3);
	const [showNavigation, setShowNavigation] = useState(true);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 768) {
				setItemsToShow(1);
				setShowNavigation(false);
			} else if (window.innerWidth < 1024) {
				setItemsToShow(2);
				setShowNavigation(true);
			} else {
				setItemsToShow(3);
				setShowNavigation(true);
			}
		};

		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const carouselItems = data.map((item, index) => (
		<Card
			key={index}
			card={{
				src: item.src,
				title: item.title,
				category: item.category,
				content: <ServiceCard item={item} />,
			}}
			index={index}
			imageProps={{
				quality: 100,
				sizes: `(max-width: 768px) 100vw, (max-width: 1024px) 50vw, ${100 / itemsToShow}vw`,
				priority: index === 0,
				className: "object-cover w-full h-full",
			}}
		/>
	));

	return (
		<section id="servicios" className="py-24 relative">
			{/* Gradient Background - Bottom position with stronger beige */}
			<div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_120%,#E8D5BD_40%,#fff_70%)]"></div>

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
							SERVICIOS
						</h2>
						<span className="absolute -bottom-2 left-1/2 w-24 h-0.5 bg-rosa transform -translate-x-1/2"></span>
					</div>
				</div>
			</motion.div>

			{/* Updated Carousel section */}
			<motion.div
				initial={{ x: 100, opacity: 0 }}
				whileInView={{ x: 0, opacity: 1 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
				viewport={{ amount: 0.3 }}
				className="px-4 sm:px-6 lg:px-8"
			>
				<Carousel 
					items={carouselItems} 
					options={{
						itemsToShow,
						gap: 16,
						responsive: true,
						showNavigation, // Add this prop to control navigation visibility
					}}
				/>
			</motion.div>
		</section>
	);
}


