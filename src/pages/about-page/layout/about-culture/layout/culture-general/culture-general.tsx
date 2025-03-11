import React, { type FC } from 'react'

import { CultureElement } from 'src/components/culture-element/culture-element'
import { useGetAboutCultureQuery } from 'src/store/about/about.api'
import { GallerySection } from 'src/modules/gallery-section/gallery-section'

import styles from './index.module.scss'

export const CultureGeneral: FC = () => {
	const { data: aboutPageData } = useGetAboutCultureQuery(null)
	if (!aboutPageData) return null

	return (
		<>
			<h2>Материальная культура</h2>

			<div className={styles.inner}>
				<p className={styles.culturesDescription}>{aboutPageData.topDesc}</p>

				<GallerySection images={aboutPageData?.photoGallery} />

				<p>{aboutPageData.bottomDesc}</p>
				{aboutPageData.cultures?.length && (
					<div className={styles.culturesList}>
						<h5>Культурные элементы</h5>
						{aboutPageData.cultures.map(({ id, desc, title }) => (
							<CultureElement key={id} id={id} title={title} desc={desc} />
						))}
					</div>
				)}
			</div>
		</>
	)
}
