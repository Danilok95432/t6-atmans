import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useEffect, useState } from 'react'
// import { type CardNewsItem } from 'src/types/news'

import { useGetNewsByIdQuery, useGetNewsMonthsQuery } from 'src/store/news/news.api'
import { useAdditionalCrumbs } from 'src/hooks/additional-crumbs/additional-crumbs'
import { mainFormatDate } from 'src/helpers/utils'
import { useBreakPoint } from 'src/hooks/useBreakPoint/useBreakPoint'

// import { AsideNews } from 'src/components/aside-news/aside-news'
import { Container } from 'src/UI/Container/Container'
import { PageContent } from 'src/components/page-content/page-content'

import styles from './index.module.scss'
import { GalleryImg } from 'src/components/image-gallery/image-gallery'
import { type ImageItemWithText } from 'src/types/photos'

export const NewsDetails = () => {
	const { id } = useParams()
	const { data: allNews, isSuccess: isSuccessAllNews } = useGetNewsMonthsQuery({
		date: '0',
		category: '0',
	})
	const { data: newsItemData } = useGetNewsByIdQuery(id ?? '')
	const [allNewsPagePhoto, setAllNewsPagePhoto] = useState<ImageItemWithText[]>([])
	useAdditionalCrumbs(newsItemData?.title)

	// const [newsArray, setNewsArray] = useState<CardNewsItem[]>([])
	const breakpoint = useBreakPoint()

	useEffect(() => {
		if (isSuccessAllNews) {
			// const flattenedNewsArray = Object.values(allNews).flat() as unknown as CardNewsItem[]
			// setNewsArray(flattenedNewsArray)
		}
	}, [isSuccessAllNews, allNews])
	useEffect(() => {
		if (newsItemData) {
			const images: ImageItemWithText[] = []
			if (newsItemData.mainphoto) {
				images.push(newsItemData.mainphoto[0])
			}
			if (newsItemData.imgGallery && Array.isArray(newsItemData.imgGallery)) {
				images.push(...newsItemData.imgGallery)
			}
			setAllNewsPagePhoto(images)
		}
	}, [newsItemData])
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
							<div className={styles.newsItemInfoContent}>
								<h2>{newsItemData.title}</h2>
								<span className={styles.newsItemDate}>{mainFormatDate(newsItemData?.date)}</span>
								{breakpoint !== 'S' && (
									<div className={newsItemData?.short ? styles.newsDescs : ''}>
										{newsItemData?.short && (
											<div dangerouslySetInnerHTML={{ __html: newsItemData.short }} />
										)}
									</div>
								)}
								<div className={styles.newsItemMainImgText}>
									<GalleryImg images={allNewsPagePhoto} variant='newsMain' />
								</div>
								<div className={styles.newsDescs}>
									{newsItemData?.full && (
										<div dangerouslySetInnerHTML={{ __html: newsItemData.full }} />
									)}
								</div>
							</div>
							<div className={styles.newsItemMainImg}>
								<GalleryImg images={allNewsPagePhoto} variant='newsMain' />
							</div>
						</div>
						<GalleryImg
							images={newsItemData?.imgGallery}
							allPageImages={allNewsPagePhoto}
							variant='slider'
						/>
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
