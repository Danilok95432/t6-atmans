import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetCultureByIdQuery } from 'src/store/cultures/cultures.api'

import { GalleryImg } from 'src/components/image-gallery/image-gallery'

import cultureStyles from '../../index.module.scss'
import styles from './index.module.scss'

export const CultureDetails = () => {
	const { id } = useParams()
	const { data: cultureInfo } = useGetCultureByIdQuery(id ?? '0')

	if (!cultureInfo) return <h2>Нет информации о культуре</h2>

	return (
		<div className={styles.cultureDetails}>
			<h2>{cultureInfo.title}</h2>
			<div className={styles.cultureMain}>
				<div className={styles.cultureLogo}>
					<img src={cultureInfo?.mainphoto[0]?.original} alt={cultureInfo.title} />
				</div>
				{cultureInfo.topDesc && <div dangerouslySetInnerHTML={{ __html: cultureInfo.topDesc }} />}
			</div>
			<GalleryImg className={cultureStyles.galleryPhotos} images={cultureInfo.photos} limit={5} />
			{cultureInfo.bottomDesc && (
				<div dangerouslySetInnerHTML={{ __html: cultureInfo.bottomDesc }} />
			)}
		</div>
	)
}
