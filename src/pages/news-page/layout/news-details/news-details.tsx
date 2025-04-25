import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { type RefObject, useEffect, useRef } from 'react'
// import { type CardNewsItem } from 'src/types/news'
import cn from 'classnames'
import { SwiperSlide, type SwiperRef, Swiper } from 'swiper/react'

import { useGetNewsByIdQuery, useGetNewsMonthsQuery } from 'src/store/news/news.api'
import { useAdditionalCrumbs } from 'src/hooks/additional-crumbs/additional-crumbs'
import { mainFormatDate } from 'src/helpers/utils'
import { gallerySliderOptions } from './consts'
import { useBreakPoint } from 'src/hooks/useBreakPoint/useBreakPoint'

// import { AsideNews } from 'src/components/aside-news/aside-news'
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
	useAdditionalCrumbs(newsItemData?.title)

	// const [newsArray, setNewsArray] = useState<CardNewsItem[]>([])
	const breakpoint = useBreakPoint()

	useEffect(() => {
		if (isSuccessAllNews) {
			// const flattenedNewsArray = Object.values(allNews).flat() as unknown as CardNewsItem[]
			// setNewsArray(flattenedNewsArray)
		}
	}, [isSuccessAllNews, allNews])
	if (!newsItemData) return null

	return (
		<>
			<Helmet>
				<title>{newsItemData?.title}</title>
			</Helmet>
			<div className={styles.newsItemPage}>
				<PageContent className={styles.newsListPage} $minHeight='0'>
					<Container className={styles.newsContainer}>
						<div className={styles.newsItemPageContent}>
							<h2>{newsItemData.title}</h2>
							<span className={styles.newsItemDate}>{mainFormatDate(newsItemData?.date)}</span>
							{breakpoint !== 'S' && (
								<div className={styles.newsDescs}>
									{newsItemData?.short && (
										<div dangerouslySetInnerHTML={{ __html: newsItemData.short }} />
									)}
								</div>
							)}
							<div className={styles.newsItemMainImg}>
								<img src={newsItemData?.mainphoto[0]?.original} alt={newsItemData?.title} />
							</div>
							<div className={styles.newsDescs}>
								{newsItemData?.full && (
									<div dangerouslySetInnerHTML={{ __html: newsItemData.full }} />
								)}
							</div>
							<div className={styles.slider}>
								<Swiper {...gallerySliderOptions} ref={swiperRef}>
									{newsItemData.imgGallery?.map((slideItem, idx) => (
										<SwiperSlide key={idx}>
											<div className={styles.slideItem}>
												<div className={styles.slideImg}>
													<img src={slideItem.thumbnail} alt={slideItem.title} />
												</div>
												{/* <h6 className={styles.slideTitle}>{slideItem.title || 'test'}</h6>
												<span className={styles.slideAuthor}>Автор: {'test'}</span>
												*/}
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
									color='#5C5C5C'
								/>
							</div>
						</div>
					</Container>
				</PageContent>
				{/* <div className={styles.asideNewsDetails}>
					<AsideNews currentNewsId={id ?? ''} newsList={newsArray} />
				</div>
				*/}
			</div>
		</>
	)
}
