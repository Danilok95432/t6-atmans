import { type FC } from 'react'
import { Helmet } from 'react-helmet-async'

import { useGetAboutGeneralQuery } from 'src/store/about/about.api'

import { GallerySection } from 'src/modules/gallery-section/gallery-section'
import { DescSection } from 'src/pages/about-page/layout/about-general/components/desc-section/desc-section'
import { CollapsibleText } from 'src/components/collapsible-text/collapsible-text'

import styles from './index.module.scss'
import { useBreakPoint } from 'src/hooks/useBreakPoint/useBreakPoint'

export const AboutGeneral: FC = () => {
	const { data: aboutPageData } = useGetAboutGeneralQuery(null)
	const breakpoint = useBreakPoint()
	return (
		<div className={styles.aboutGeneralPage}>
			<Helmet>
				<title>Атманов угол</title>
			</Helmet>

			<div className={styles.inner}>
				{breakpoint === 'S' && <h2>Атманов угол</h2>}
				<GallerySection images={aboutPageData?.photoGallery} />
				<CollapsibleText item={<DescSection />} lineClamp={22} collapsePoint={'S'} />
			</div>
		</div>
	)
}
