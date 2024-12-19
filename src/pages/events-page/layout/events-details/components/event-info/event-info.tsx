import { Link, useParams } from 'react-router-dom'

import { useGetEventByIdQuery } from 'src/store/events/events.api'
import { formatDateRange, mainFormatDate, statusEventByDate } from 'src/helpers/utils'
import { useBreakPoint } from 'src/hooks/useBreakPoint/useBreakPoint'
import { useAdditionalCrumbs } from 'src/hooks/additional-crumbs/additional-crumbs'

import { InfoRow } from 'src/UI/InfoRow/InfoRow'
import { CustomText } from 'src/components/custom-text/custom-text'
import { AppRoute } from 'src/routes/main-routes/consts'
import { FlexRow } from 'src/components/flex-row/flex-row'
import { EventStatus } from 'src/components/event-status/event-status'
import { Container } from 'src/UI/Container/Container'

import styles from './index.module.scss'

export const EventInfo = () => {
	const { id } = useParams()
	const { data: eventData } = useGetEventByIdQuery(id ?? '')

	const breakPoint = useBreakPoint()

	useAdditionalCrumbs(eventData?.title)

	return (
		<Container $padding='0' $paddingAdaptive='0'>
			<div className={styles.eventInfoWrapper}>
				<h2>{eventData?.title}</h2>
				<FlexRow className={styles.topLineEvent}>
					<CustomText
						$fontSize={breakPoint === 'S' ? '18px' : '16px'}
						$margin={breakPoint === 'S' ? '0 22px 28px 0' : '0 15px 28px 0'}
					>
						{eventData?.date && eventData.date.length > 1
							? formatDateRange(eventData?.date as [Date, Date])
							: mainFormatDate(eventData?.date[0])}
					</CustomText>
					{breakPoint !== 'S' && (
						<EventStatus
							className={styles.status}
							statusCode={statusEventByDate(eventData?.date)}
						/>
					)}
					<CustomText
						className={styles.ageRating}
						$fontSize={breakPoint === 'S' ? '18px' : '16px'}
						$margin='0 0 28px 0'
						$color='#DE0008'
					>
						{eventData?.ageRating}+
					</CustomText>
				</FlexRow>

				<div className={styles.mainInfo}>
					<div className={styles.avatarWrapper}>
						<img src={eventData?.imgUrl} alt={eventData?.title} />
					</div>
					<div className={styles.infoBlock}>
						<CustomText $fontSize='20px' $lineHeight='1.3' $margin='0 0 30px 0'>
							{eventData?.description}
						</CustomText>
						{eventData?.location?.address && (
							<InfoRow
								title='Место проведения:'
								label={eventData?.location?.address}
								$titleWidth='180px'
								$gap='34px'
							/>
						)}

						{eventData?.object?.title && (
							<InfoRow
								title='Объект:'
								label={
									<Link to={`/${AppRoute.Objects}/${eventData?.object.id}`}>
										{eventData?.object.title}
									</Link>
								}
								$titleWidth='180px'
								$gap='34px'
							/>
						)}

						{eventData?.site.link && (
							<InfoRow
								title='Сайт события:'
								label={<a href={eventData?.site.link}>{eventData?.site.title}</a>}
								$titleWidth='180px'
								$gap='34px'
							/>
						)}
					</div>
				</div>
			</div>
		</Container>
	)
}
