import { type FC } from 'react'
import { Helmet } from 'react-helmet-async'

import { useGetAboutHistoryQuery } from 'src/store/about/about.api'
import { RenderedArray } from 'src/components/rendered-array/rendered-array'
import { GallerySection } from 'src/modules/gallery-section/gallery-section'

import styles from './index.module.scss'
import { useBreakPoint } from 'src/hooks/useBreakPoint/useBreakPoint'

export const AboutNature: FC = () => {
	const { data: aboutPageData } = useGetAboutHistoryQuery(null)
	const breakpoint = useBreakPoint()
	if (!aboutPageData) return null

	return (
		<div className={styles.naturePageContent}>
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
				<RenderedArray
					strArray={aboutPageData.bottomDescs}
					asStr='p'
					as='div'
					className={styles.bottomDescs}
				/>
			</div>
		</div>
	)
}
