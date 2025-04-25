import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetCultureByIdQuery } from 'src/store/cultures/cultures.api'

import { GalleryImg } from 'src/components/image-gallery/image-gallery'

import cultureStyles from '../../index.module.scss'
import styles from './index.module.scss'
import { useAdditionalCrumbs } from 'src/hooks/additional-crumbs/additional-crumbs'

export const CultureDetails = () => {
	const { id } = useParams()
	const { data: cultureInfo } = useGetCultureByIdQuery(id ?? '0')
	useAdditionalCrumbs(cultureInfo?.title)
	if (!cultureInfo) return <h2>Нет информации о культуре</h2>

	return (
		<div className={styles.cultureDetails}>
			<div className={styles.cultureDetailsInfo}>
				<div className={styles.cultureMain}>
					<h2>{cultureInfo.title}</h2>
					{cultureInfo.topDesc && <div dangerouslySetInnerHTML={{ __html: cultureInfo.topDesc }} />}
				</div>
				<div className={styles.cultureLogo}>
					<img src={cultureInfo?.mainphoto[0]?.original} alt={cultureInfo.title} />
				</div>
			</div>
			<GalleryImg className={cultureStyles.galleryPhotos} images={cultureInfo.photos} limit={5} />
			{cultureInfo.bottomDesc && (
				<div dangerouslySetInnerHTML={{ __html: cultureInfo.bottomDesc }} />
			)}
		</div>
	)
}
