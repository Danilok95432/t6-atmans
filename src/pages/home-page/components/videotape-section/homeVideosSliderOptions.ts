import { type SwiperProps } from 'swiper/react/swiper-react'

import { DisplayBreakpoints } from 'src/helpers/consts'

export const homeVideosSliderOptions: SwiperProps = {
	// slidesPerView: 1,
	slidesPerGroup: 1,
	spaceBetween: 25,
	grabCursor: true,
	breakpoints: {
		[DisplayBreakpoints.Xs]: {
			slidesPerView: 2,
		},
		[DisplayBreakpoints.Lg]: {
			slidesPerView: 4,
		},
		[DisplayBreakpoints.Xxl]: {
			slidesPerView: 5,
		},
	},
}
