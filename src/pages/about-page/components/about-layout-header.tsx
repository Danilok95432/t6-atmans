import { type FC } from 'react'

import { useGetAboutGeneralQuery } from 'src/store/about/about.api'
import { RenderedArray } from 'src/components/rendered-array/rendered-array'

import styles from './index.module.scss'

export const AboutLayoutHeader: FC = () => {
	const { data: aboutPageData } = useGetAboutGeneralQuery(null)

	return (
		<div className={styles.aboutLayoutHeaderPageContent}>
			<div className={styles.leftSideHeader}>
				<h2 className={styles.title}>Атманов угол</h2>
				<div className={styles.blockquoteBody}>
					<RenderedArray
						className={styles.mainDescs}
						strArray={aboutPageData?.mainDescs}
						asStr='p'
						as='blockquote'
					/>
					{aboutPageData?.caption && (
						<span className={styles.blockquoteCaption}>{aboutPageData?.caption}</span>
					)}
				</div>
			</div>
			<img src={aboutPageData?.photoGallery[0].original} alt='' />
		</div>
	)
}
