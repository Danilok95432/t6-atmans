import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetTraditionByIdQuery } from 'src/store/cultures/cultures.api'

import { GalleryImg } from 'src/components/image-gallery/image-gallery'

import cultureStyles from '../../index.module.scss'
import styles from './index.module.scss'
import { useAdditionalCrumbs } from 'src/hooks/additional-crumbs/additional-crumbs'

export const CultureDetails = () => {
	const { id } = useParams()
	const { data: traditionInfo } = useGetTraditionByIdQuery(id ?? '0')
	useAdditionalCrumbs(traditionInfo?.title)
	if (!traditionInfo) return <h2>Нет информации о традиции</h2>

	return (
		<div className={styles.cultureDetails}>
			<div className={styles.cultureDetailsInfo}>
				<div className={styles.cultureMain}>
					<h2>{traditionInfo.title}</h2>
					{traditionInfo.topDesc && (
						<div dangerouslySetInnerHTML={{ __html: traditionInfo.topDesc }} />
					)}
				</div>
				<div className={styles.cultureLogo}>
					<img src={traditionInfo?.mainphoto[0]?.original} alt={traditionInfo.title} />
				</div>
			</div>
			<GalleryImg className={cultureStyles.galleryPhotos} images={traditionInfo.photos} limit={5} />
			{traditionInfo.bottomDesc && (
				<div dangerouslySetInnerHTML={{ __html: traditionInfo.bottomDesc }} />
			)}
		</div>
	)
}
