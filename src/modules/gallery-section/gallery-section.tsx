import React, { type FC } from 'react'

import classNames from 'classnames'
import { GalleryImg } from 'src/components/image-gallery/image-gallery'

import styles from './index.module.scss'
import { type ImageItemWithText } from 'src/types/photos'

interface IGallerySectionProps {
	className?: string
	images?: ImageItemWithText[]
}

export const GallerySection: FC<IGallerySectionProps> = ({ className, images }) => {
	if (!images) return null

	return (
		<section className={classNames(styles.gallerySection, className)}>
			<h5 className={styles.galleryTitle}>Фотогалерея</h5>
			<GalleryImg images={images} variant='slider' />
		</section>
	)
}
