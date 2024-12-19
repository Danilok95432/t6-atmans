import { type FC, type RefObject, useRef } from 'react'
import { type SwiperRef } from 'swiper/react/swiper-react'

import cn from 'classnames'
import { Swiper, SwiperSlide } from 'swiper/react'

import { homeVideosSliderOptions } from 'src/pages/home-page/components/videotape-section/consts'
import { Container } from 'src/UI/Container/Container'
import { AppRoute } from 'src/routes/main-routes/consts'
import { useGetHomeVideosQuery } from 'src/store/home/home.api'
import { FlexRow } from 'src/components/flex-row/flex-row'
import { MainButton } from 'src/UI/MainButton/MainButton'
import { VideoCard } from 'src/components/video-card/video-card'

import { SliderBtns } from 'src/components/slider-btns/slider-btns'

import styles from './index.module.scss'

export const VideotapeSection: FC = () => {
	const { data: videos } = useGetHomeVideosQuery(null)
	const swiperRef: RefObject<SwiperRef> = useRef<SwiperRef>(null)
	return (
		<section className={cn(styles.videotapeSection, '_bordered')}>
			<Container className={styles.videotapeTop}>
				<FlexRow $margin='0 0 25px 0' $alignItems='center' $justifyContent='space-between'>
					<h4>Видеолента</h4>
					<MainButton as='route' to={AppRoute.Videos}>
						Все видео
					</MainButton>
				</FlexRow>
				<div className='slider-with-btns'>
					<Swiper {...homeVideosSliderOptions} ref={swiperRef}>
						{videos?.map((slideItem, idx) => (
							<SwiperSlide key={idx}>
								<VideoCard key={slideItem.id} {...slideItem} />
							</SwiperSlide>
						))}
					</Swiper>
					<SliderBtns
						className={styles.videoSliderBtns}
						$topPosition='40%'
						$btnsSpacing='calc(100% + 40px)'
						swiperRef={swiperRef}
					/>
				</div>
			</Container>
		</section>
	)
}
