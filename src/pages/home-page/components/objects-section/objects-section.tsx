import { type FC, type RefObject, useRef } from 'react'
import { type SwiperRef } from 'swiper/react/swiper-react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { generatePath, Link } from 'react-router-dom'
import cn from 'classnames'

import { Container } from 'src/UI/Container/Container'
import { SliderBtns } from 'src/components/slider-btns/slider-btns'
import { useGetHomeObjectsQuery } from 'src/store/home/home.api'
import { objectsSliderOptions } from 'src/pages/home-page/components/objects-section/consts'

import styles from './index.module.scss'

export const ObjectsSection: FC = () => {
	const { data: objects } = useGetHomeObjectsQuery(null)

	const swiperRef: RefObject<SwiperRef> = useRef<SwiperRef>(null)
	return (
		<section className={cn(styles.objectsSection, '_bordered')}>
			<Container className='slider-with-btns'>
				<Swiper className={styles.objectsSlider} {...objectsSliderOptions} ref={swiperRef}>
					{objects?.map((slideItem, idx) => (
						<SwiperSlide key={idx}>
							<Link
								to={generatePath('objects-list/:id', {
									id: slideItem.id,
								})}
							>
								<figure className={styles.slideItem}>
									<svg className={styles.objectImg}>
										<image xlinkHref={slideItem.icon} width='48' height='48' />
									</svg>
									<figcaption>
										<p className={styles.objectDescription}>{slideItem.title}</p>
									</figcaption>
								</figure>
							</Link>
						</SwiperSlide>
					))}
				</Swiper>
				<SliderBtns
					className={styles.objectsSliderBtns}
					$topPosition='32%'
					$btnsSpacing='96%'
					swiperRef={swiperRef}
				/>
			</Container>
		</section>
	)
}
