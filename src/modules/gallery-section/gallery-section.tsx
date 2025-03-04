import React, { type FC } from 'react'

import classNames from 'classnames'
import { GalleryImg } from 'src/components/image-gallery/image-gallery'
import { useGetAboutGeneralQuery } from 'src/store/about/about.api'

import styles from './index.module.scss'

interface IGallerySectionProps {
	className?: string
}

export const GallerySection: FC<IGallerySectionProps> = (props) => {
	const { className } = props

	const { data: aboutPageData } = useGetAboutGeneralQuery(null)
	if (!aboutPageData) return null

	return (
		<section className={classNames(styles.gallerySection, className)}>
			<h5 className={styles.galleryTitle}>Фотогалерея</h5>
			<GalleryImg images={aboutPageData.photoGallery} variant='slider' />
		</section>
	)
}
