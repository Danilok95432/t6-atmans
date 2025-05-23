import { type FC } from 'react'
import { Helmet } from 'react-helmet-async'

import { useGetAboutHistoryQuery } from 'src/store/about/about.api'
import { GallerySection } from 'src/modules/gallery-section/gallery-section'

import styles from './index.module.scss'
import { useBreakPoint } from 'src/hooks/useBreakPoint/useBreakPoint'

export const AboutHistory: FC = () => {
	const { data: aboutPageData } = useGetAboutHistoryQuery(null)
	const breakpoint = useBreakPoint()
	if (!aboutPageData) return null

	return (
		<div className={styles.historyPageContent}>
			<Helmet>
				<title>История Атманова угла</title>
			</Helmet>
			<div className={styles.inner}>
				{breakpoint === 'S' && <h2>История Атманова угла</h2>}
				{aboutPageData?.topDescs && (
					<div
						className={styles.topDescs}
						dangerouslySetInnerHTML={{ __html: aboutPageData.topDescs }}
					/>
				)}
				<GallerySection images={aboutPageData?.photos} />
				{aboutPageData?.bottomDescs && (
					<div
						className={styles.bottomDesc}
						dangerouslySetInnerHTML={{ __html: aboutPageData.bottomDescs }}
					/>
				)}
			</div>
		</div>
	)
}
