import { type FC } from 'react'
import { Helmet } from 'react-helmet-async'

import { ContactsMap } from 'src/components/contacts-map/contacts-map'
import { ContactsInfo } from './components/contacts-info/contacts-info'

import styles from './index.module.scss'
import { useGetAboutContactsQuery } from 'src/store/about/about.api'
import { useBreakPoint } from 'src/hooks/useBreakPoint/useBreakPoint'
import { GallerySection } from 'src/modules/gallery-section/gallery-section'
export const AboutContacts: FC = () => {
	const { data: aboutContactsData } = useGetAboutContactsQuery(null)
	const breakpoint = useBreakPoint()
	return (
		<div className={styles.contactsPageContent}>
			<Helmet>
				<title>Карта и маршруты</title>
			</Helmet>
			{breakpoint === 'S' && <h3 className={styles.titleContacts}>Карта и маршруты</h3>}
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</p>
			<ContactsInfo />
			<ContactsMap className={styles.aboutMap} points={aboutContactsData?.map_coords} zoom={17} />
			<GallerySection images={aboutContactsData?.photos} />
		</div>
	)
}
