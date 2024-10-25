import { type SwiperProps } from 'swiper/react/swiper-react'

import { DisplayBreakpoints } from 'src/helpers/consts'

export const newsSliderOptions: SwiperProps = {
	slidesPerView: 1,
	slidesPerGroup: 1,
	spaceBetween: 15,
	breakpoints: {
		[DisplayBreakpoints.Xs]: {
			slidesPerView: 2,
		},
		[DisplayBreakpoints.Lg]: {
			slidesPerView: 4,
		},
		[DisplayBreakpoints.Xxl]: {
			slidesPerView: 6,
		},
	},
}