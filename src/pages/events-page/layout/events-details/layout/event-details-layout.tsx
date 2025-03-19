import { type FC } from 'react'

import { Link, Outlet, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

import { PageContent } from 'src/components/page-content/page-content'
import { TabNav } from 'src/components/tab-nav/tab-nav'
import { EventInfoNavItems } from 'src/pages/events-page/layout/events-details/layout/consts'
import { EventInfo } from 'src/pages/events-page/layout/events-details/components/event-info/event-info'
import { DetailedAside } from 'src/modules/detailedAside/detailedAside'
import { useGetEventByIdQuery } from 'src/store/events/events.api'
import { AppRoute } from 'src/routes/main-routes/consts'

import styles from './index.module.scss'
import { Container } from 'src/UI/Container/Container'

export const EventDetailsLayout: FC = () => {
	const { id } = useParams()

	const { data: eventInfo } = useGetEventByIdQuery(id ?? '')
	return (
		<Container $paddingAdaptive='0'>
			<div className={styles.eventDetailsWrapper}>
				<PageContent
					className={styles.eventDetailsContent}
					$padding='42px 35px 35px 50px'
					$minHeight='auto'
				>
					<Helmet>
						<title>Информация о событии</title>
					</Helmet>
					<EventInfo />
					<TabNav className={styles.eventTabs} navItems={EventInfoNavItems} />
					<Outlet />
					<Link className={styles.allEventsLink} to={`/${AppRoute.Events}`}>
						На страницу списка событий
					</Link>
				</PageContent>
				<Container $padding='0' $margin='0'>
					<DetailedAside
						brandImg={eventInfo?.brandImg}
						genPartnerImg={eventInfo?.partnerImg}
						partners={eventInfo?.partners}
						organizers={eventInfo?.organizerLinks}
						documents={eventInfo?.documents}
						links={eventInfo?.relatedLinks}
					/>
				</Container>
			</div>
		</Container>
	)
}
