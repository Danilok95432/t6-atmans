import { type FC } from 'react'
import { Helmet } from 'react-helmet-async'

import { useGetAboutHistoryQuery } from 'src/store/about/about.api'
import { RenderedArray } from 'src/components/rendered-array/rendered-array'
import { GallerySection } from 'src/modules/gallery-section/gallery-section'

import styles from './index.module.scss'

export const AboutHistory: FC = () => {
	const { data: aboutPageData } = useGetAboutHistoryQuery(null)
	if (!aboutPageData) return null

	return (
		<div className={styles.historyPageContent}>
			<Helmet>
				<title>История Атманова угла</title>
			</Helmet>
			<h2>История Атманова угла</h2>
			<div className={styles.inner}>
				<RenderedArray
					strArray={aboutPageData.topDescs}
					asStr='p'
					as='div'
					className={styles.topDescs}
				/>
				<GallerySection />
				{/* <RenderedArray
					strArray={aboutPageData.bottomDescs}
					asStr='p'
					as='div'
					className={styles.bottomDescs}
				/> */}
			</div>
		</div>
	)
}
