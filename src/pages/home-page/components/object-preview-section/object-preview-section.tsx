import { type RefObject, useRef } from 'react'
import { type SwiperRef } from 'swiper/react/swiper-react'

import cn from 'classnames'
import { useGetHomePreviewObjectQuery } from 'src/store/home/home.api'
import { homeObjectsSliderOptions } from './homeObjectsSliderOptions'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Container } from 'src/UI/Container/Container'
import { SliderBtns } from 'src/components/slider-btns/slider-btns'

import styles from './index.module.scss'

export const ObjectPreviewSection = () => {
	const { data: objects } = useGetHomePreviewObjectQuery(null)
	const swiperRef: RefObject<SwiperRef> = useRef<SwiperRef>(null)

	if (!objects) return
	return (
		<section className={cn(styles.objectPreviewSection, '_bordered')}>
			<Container>
				{objects?.length && (
					<div className='relative-wrapper'>
						<Swiper {...homeObjectsSliderOptions} ref={swiperRef}>
							{objects.map((object, idx) => (
								<SwiperSlide className={styles.objectSlide} key={idx}>
									<div className={styles.objPreview}>
										<div className={styles.objLocation}>
											<iframe
												src={object?.location}
												width='100%'
												height='100%'
												loading='eager'
											></iframe>
										</div>
										<div className={styles.objInfo}>
											<svg className={styles.objLogo}>
												<image xlinkHref={object?.icon} width='48' height='48' />
											</svg>
											<h3>{object?.title}</h3>
											<p className={styles.objAddress}>
												<span>{object?.title}</span>
												<span>{object?.address}</span>
											</p>
											<p className={styles.objDesc}>{object?.mainDesc}</p>
										</div>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
						<SliderBtns
							className={styles.objectSliderBtns}
							$topPosition='50%'
							$btnsSpacing='100%'
							swiperRef={swiperRef}
						/>
					</div>
				)}
			</Container>
		</section>
	)
}
