import { type FC, type RefObject, useRef } from 'react'
import { Swiper, type SwiperRef, SwiperSlide } from 'swiper/react'

import { SliderBtns } from 'src/components/slider-btns/slider-btns'
import { useGetHomePostersQuery } from 'src/store/home/home.api'
import { posterSliderOptions } from './consts'
import { mainFormatDate } from 'src/helpers/utils'

import styles from './index.module.scss'

export const EventPoster: FC = () => {
	const { data: posterData } = useGetHomePostersQuery(null)

	const swiperRef: RefObject<SwiperRef> = useRef<SwiperRef>(null)

	return (
		<div className={styles.eventsPosterSlider}>
			<Swiper {...posterSliderOptions} ref={swiperRef}>
				{posterData?.map((slideItem, idx) => (
					<SwiperSlide key={idx}>
						<div className={styles.slideItem}>
							<div className={styles.slideItemImg}>
								<img
									src={slideItem.mainphoto[0]?.original}
									alt={slideItem.title}
									width={1840}
									height={555}
									loading='lazy'
								/>
							</div>
							<div className={styles.slideInfo}>
								<div className={styles.slideInfoInner}>
									<h5 className={styles.slideInfoTitle}>{slideItem.title}</h5>
									<ul className={styles.sliderInfoList}>
										{slideItem?.date && (
											<li className={styles.sliderInfoItem}>
												{mainFormatDate(slideItem.date, "d MMMM yyyy 'года' в HH:mm")}
											</li>
										)}
										{slideItem?.location && (
											<li className={styles.sliderInfoItem}>{slideItem.location}</li>
										)}
									</ul>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			<SliderBtns
				className={styles.posterSliderBtns}
				$topPosition='50%'
				$btnsSpacing='95%'
				swiperRef={swiperRef}
			/>
		</div>
	)
}
