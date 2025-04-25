import { type FC } from 'react'
import { Helmet } from 'react-helmet-async'

import { ContactsMap } from 'src/components/contacts-map/contacts-map'
import { ContactsInfo } from './components/contacts-info/contacts-info'

import styles from './index.module.scss'
import { useGetAboutContactsQuery } from 'src/store/about/about.api'
import { useBreakPoint } from 'src/hooks/useBreakPoint/useBreakPoint'
export const AboutContacts: FC = () => {
	const { data: aboutContactsData } = useGetAboutContactsQuery(null)
	const breakpoint = useBreakPoint()
	return (
		<div className={styles.contactsPageContent}>
			<Helmet>
				<title>Карта и маршруты</title>
			</Helmet>
			{breakpoint === 'S' && <h3 className={styles.titleContacts}>Карта и маршруты</h3>}
			<ContactsMap className={styles.aboutMap} points={aboutContactsData?.map_coords} zoom={17} />
			<ContactsInfo />
		</div>
	)
}
