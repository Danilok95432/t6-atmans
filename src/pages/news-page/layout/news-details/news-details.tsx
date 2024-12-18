import { Link, useParams } from 'react-router-dom'
import { type RefObject, useEffect, useRef, useState } from 'react'
import { type CardNewsItem } from 'src/types/news'
import cn from 'classnames'
import { SwiperSlide, type SwiperRef, Swiper } from 'swiper/react'

import { useGetNewsByIdQuery, useGetNewsMonthsQuery } from 'src/store/news/news.api'
import { useAdditionalCrumbs } from 'src/hooks/additional-crumbs/additional-crumbs'
import { mainFormatDate } from 'src/helpers/utils'
import { gallerySliderOptions } from './consts'

import { AppRoute } from 'src/routes/main-routes/consts'
import { RenderedArray } from 'src/components/rendered-array/rendered-array'
import { AsideNews } from 'src/components/aside-news/aside-news'
import { Container } from 'src/UI/Container/Container'
import { PageContent } from 'src/components/page-content/page-content'
import { SliderBtns } from 'src/components/slider-btns/slider-btns'

import styles from './index.module.scss'

export const NewsDetails = () => {
	const { id } = useParams()
	const { data: allNews, isSuccess: isSuccessAllNews } = useGetNewsMonthsQuery({
		date: '0',
		category: '0',
	})
	const { data: newsItemData } = useGetNewsByIdQuery(id ?? '')
	const swiperRef: RefObject<SwiperRef> = useRef<SwiperRef>(null)
	console.log(newsItemData)
	useAdditionalCrumbs(newsItemData?.title)

	const [newsArray, setNewsArray] = useState<CardNewsItem[]>([])

	useEffect(() => {
		if (isSuccessAllNews) {
			const flattenedNewsArray = Object.values(allNews).flat() as unknown as CardNewsItem[]
			setNewsArray(flattenedNewsArray)
		}
	}, [isSuccessAllNews, allNews])
	if (!newsItemData) return null

	return (
		<>
			<Container className={styles.newsContainer} $padding='0 90px 0 40px' $paddingAdaptive='0'>
				<div className={styles.newsItemPage}>
					<PageContent className={styles.newsListPage}>
						<div className={styles.newsItemPageContent}>
							<h2>{newsItemData.title}</h2>
							<span className={styles.newsItemDate}>{mainFormatDate(newsItemData?.date)}</span>
							<div className={styles.newsItemMainImg}>
								<img src={newsItemData?.preview} alt={newsItemData?.title} />
							</div>
							<RenderedArray
								className={styles.newsDescs}
								strArray={newsItemData?.textNews}
								asStr='p'
								as='div'
							/>
							<div className={styles.slider}>
								<Swiper {...gallerySliderOptions} ref={swiperRef}>
									{newsItemData.imgGallery?.map((slideItem, idx) => (
										<SwiperSlide key={idx}>
											<div className={styles.slideItem}>
												<div className={styles.slideImg}>
													<img src={slideItem.thumbnail} alt={slideItem.title} />
												</div>
												<h6>{slideItem.title}</h6>
											</div>
										</SwiperSlide>
									))}
								</Swiper>
								<SliderBtns
									className={cn(styles.newsSliderBtns, {
										[styles.noBtns]: newsItemData.imgGallery.length === 0,
									})}
									$topPosition='50%'
									$btnsSpacing='calc(100% + 30px)'
									swiperRef={swiperRef}
								/>
							</div>
							<div className={styles.allNewsBlock}>
								<Link to={`/${AppRoute.News}`}>Все новости</Link>
							</div>
						</div>
					</PageContent>
					<div className={styles.asideNewsDetails}>
						<AsideNews currentNewsId={id ?? ''} newsList={newsArray} />
					</div>
				</div>
			</Container>
		</>
	)
}
