'use client';

import { ReactNode } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
	superLargeDesktop: {
		breakpoint: { max: 4000, min: 3000 },
		items: 4,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 4,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 3,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 2,
	},
};

export default function MultiCarousel({ children }: { children: ReactNode }) {
	return (
		<Carousel
			responsive={responsive}
			infinite
			autoPlay
			autoPlaySpeed={2000}
			itemClass="m-2"
		>
			{children}
		</Carousel>
	);
}
