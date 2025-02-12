import { type SwiperProps } from 'swiper/react/swiper-react'

import { DisplayBreakpoints } from 'src/helpers/consts'

export const objectsSliderOptions: SwiperProps = {
	slidesPerView: 1,
	slidesPerGroup: 1,
	spaceBetween: 77,
	breakpoints: {
		[DisplayBreakpoints.Sm]: {
			slidesPerView: 2,
		},
		[DisplayBreakpoints.Lg]: {
			slidesPerView: 3,
		},
		[DisplayBreakpoints.Xl]: {
			slidesPerView: 4,
		},
		[DisplayBreakpoints.Xxl]: {
			slidesPerView: 5,
			spaceBetween: 20,
		},
		[DisplayBreakpoints.Fhd]: {
			slidesPerView: 6,
		},
	},
}
