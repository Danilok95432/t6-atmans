import { type FC } from 'react'

import { useGetAboutGeneralQuery } from 'src/store/about/about.api'

import styles from './index.module.scss'

export const AboutLayoutHeader: FC = () => {
	const { data: aboutPageData } = useGetAboutGeneralQuery(null)

	return (
		<div className={styles.aboutLayoutHeaderPageContent}>
			<div className={styles.leftSideHeader}>
				<h2 className={styles.title}>Атманов угол</h2>
				<div className={styles.blockquoteBody}>
					{aboutPageData?.mainDescs && (
						<div
							className={styles.mainDescs}
							dangerouslySetInnerHTML={{ __html: aboutPageData.mainDescs }}
						/>
					)}
					{aboutPageData?.caption && aboutPageData?.caption_show && (
						<span className={styles.blockquoteCaption}>{aboutPageData?.caption}</span>
					)}
				</div>
			</div>
			<img src={aboutPageData?.logo?.original} alt='' />
		</div>
	)
}
