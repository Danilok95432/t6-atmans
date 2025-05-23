import { type FC } from 'react'
import { Helmet } from 'react-helmet-async'

import { useGetAboutNatureQuery } from 'src/store/about/about.api'
import { GallerySection } from 'src/modules/gallery-section/gallery-section'

import styles from './index.module.scss'
import { useBreakPoint } from 'src/hooks/useBreakPoint/useBreakPoint'

export const AboutNature: FC = () => {
	const { data: aboutPageData } = useGetAboutNatureQuery(null)
	const breakpoint = useBreakPoint()
	if (!aboutPageData) return null

	return (
		<div className={styles.naturePageContent}>
			<Helmet>
				<title>Природа Атманова угла</title>
			</Helmet>
			<div className={styles.inner}>
				{breakpoint === 'S' && <h2>Природа Атманова угла</h2>}
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
