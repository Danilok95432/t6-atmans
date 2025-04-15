import { type FC, type RefObject, useRef } from 'react'

import cn from 'classnames'
import { type SwiperRef } from 'swiper/react/swiper-react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Container } from 'src/UI/Container/Container'
import { AppRoute } from 'src/routes/main-routes/consts'
import { FlexRow } from 'src/components/flex-row/flex-row'
import { MainButton } from 'src/UI/MainButton/MainButton'
import { useGetHomeNewsQuery } from 'src/store/home/home.api'
import { newsSliderOptions } from 'src/pages/home-page/components/news-section/newsSliderOptions'
import { SliderBtns } from 'src/components/slider-btns/slider-btns'
import { NewsCard } from 'src/components/news-card/news-card'

import styles from './index.module.scss'

export const NewsSection: FC = () => {
	const { data: newsList } = useGetHomeNewsQuery(null)
	const swiperRef: RefObject<SwiperRef> = useRef<SwiperRef>(null)

	return (
		<section className={cn(styles.newsSection, '_bordered')}>
			<Container>
				<FlexRow className={styles.newsSectionRow}>
					<h2>Новости</h2>
					<MainButton as='route' to={AppRoute.News}>
						Все новости
					</MainButton>
				</FlexRow>
				{newsList?.length && (
					<div className='slider-with-btns'>
						<Swiper {...newsSliderOptions} ref={swiperRef}>
							{newsList.map((newsEl, idx) => (
								<SwiperSlide className={styles.newsSlide} key={idx}>
									<NewsCard key={newsEl.id} {...newsEl} />
								</SwiperSlide>
							))}
						</Swiper>
						<SliderBtns
							className={styles.newsSliderBtns}
							$topPosition='54%'
							$btnsSpacing='100%'
							swiperRef={swiperRef}
						/>
					</div>
				)}
			</Container>
		</section>
	)
}
