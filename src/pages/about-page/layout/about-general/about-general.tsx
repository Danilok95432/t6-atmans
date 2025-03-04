import { type FC } from 'react'
import { Helmet } from 'react-helmet-async'

import { BlockquoteSection } from 'src/pages/about-page/layout/about-general/components/blockquote-section/blockquote-section'
import { GallerySection } from 'src/modules/gallery-section/gallery-section'
import { DescSection } from 'src/pages/about-page/layout/about-general/components/desc-section/desc-section'
import { CollapsibleText } from 'src/components/collapsible-text/collapsible-text'

import styles from './index.module.scss'

export const AboutGeneral: FC = () => {
	return (
		<div className={styles.aboutGeneralPage}>
			<Helmet>
				<title>Атманов угол</title>
			</Helmet>

			<h2>Атманов угол</h2>
			<div className={styles.inner}>
				<BlockquoteSection />
				<GallerySection />
				<CollapsibleText item={<DescSection />} lineClamp={22} collapsePoint={'S'} />
			</div>
		</div>
	)
}
