import { type FC, type RefObject, useRef } from 'react'
import { Swiper, type SwiperRef, SwiperSlide } from 'swiper/react'
import cn from 'classnames'

import { SliderBtns } from 'src/components/slider-btns/slider-btns'
import { Container } from 'src/UI/Container/Container'
import { useGetHomePostersQuery } from 'src/store/home/home.api'
import { posterSliderOptions } from './consts'
import { mainFormatDate } from 'src/helpers/utils'
import { ToggleLink } from 'src/components/toggle-link/toggle-link'

import styles from './index.module.scss'

export const PosterSection: FC = () => {
	const { data: posterData } = useGetHomePostersQuery(null)

	const swiperRef: RefObject<SwiperRef> = useRef<SwiperRef>(null)

	return (
		<Container $padding='0'>
			<section className={cn(styles.posterSection, 'slider-with-btns')}>
				<Swiper className={styles.posterSlider} {...posterSliderOptions} ref={swiperRef}>
					{posterData?.map((slideItem, idx) => (
						<SwiperSlide key={idx}>
							<ToggleLink
								className={styles.slideItem}
								isExternal={slideItem.isExternal}
								link={slideItem.itemLink}
							>
								<div className={styles.slideItemImg}>
									<img src={slideItem.imgUrl} alt={slideItem.title} />
								</div>
								<div className={styles.slideInfo}>
									<div className={styles.slideInfoTitle}>
										<ul>
											{slideItem?.date && (
												<li>{mainFormatDate(slideItem.date, "d MMMM yyyy 'года' в HH:mm")}</li>
											)}
											{slideItem?.location && <li>{slideItem.location}</li>}
										</ul>
										<h5>{slideItem.title}</h5>
									</div>
								</div>
							</ToggleLink>
						</SwiperSlide>
					))}
				</Swiper>
				<SliderBtns
					className={styles.posterSliderBtns}
					$topPosition='47%'
					$btnsSpacing='96%'
					swiperRef={swiperRef}
				/>
			</section>
		</Container>
	)
}
