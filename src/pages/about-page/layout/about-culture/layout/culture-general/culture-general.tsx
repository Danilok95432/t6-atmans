import React, { type FC } from 'react'

import { CultureElement } from 'src/components/culture-element/culture-element'
import { useGetAboutCultureQuery } from 'src/store/about/about.api'
import { GallerySection } from 'src/modules/gallery-section/gallery-section'

import styles from './index.module.scss'
import { useBreakPoint } from 'src/hooks/useBreakPoint/useBreakPoint'

export const CultureGeneral: FC = () => {
	const { data: aboutPageData } = useGetAboutCultureQuery(null)
	const breakpoint = useBreakPoint()
	if (!aboutPageData) return null

	return (
		<>
			<div className={styles.inner}>
				{breakpoint === 'S' && <h2>Традиции Атманова угла</h2>}
				<div className={styles.culturesDescription}>
					{aboutPageData?.topDesc && (
						<div dangerouslySetInnerHTML={{ __html: aboutPageData.topDesc }} />
					)}
				</div>
				<GallerySection images={aboutPageData?.photoGallery} />
				{aboutPageData.bottomDesc !== 'null' ? <p>{aboutPageData.bottomDesc}</p> : null}
				{aboutPageData.cultures?.length && (
					<div className={styles.culturesList}>
						{aboutPageData.cultures.map(({ id, desc, title }) => (
							<CultureElement key={id} id={id} title={title} desc={desc} />
						))}
					</div>
				)}
			</div>
		</>
	)
}
