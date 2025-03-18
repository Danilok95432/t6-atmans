import { Link, useParams } from 'react-router-dom'
import cn from 'classnames'

import { useGetEventByIdQuery } from 'src/store/events/events.api'
import { formatDateRange, mainFormatDate } from 'src/helpers/utils'
import { useBreakPoint } from 'src/hooks/useBreakPoint/useBreakPoint'
import { useAdditionalCrumbs } from 'src/hooks/additional-crumbs/additional-crumbs'

import { InfoRow } from 'src/UI/InfoRow/InfoRow'
import { CustomText } from 'src/components/custom-text/custom-text'
import { AppRoute } from 'src/routes/main-routes/consts'
import { FlexRow } from 'src/components/flex-row/flex-row'
import { EventStatus } from 'src/components/event-status/event-status'
import { Container } from 'src/UI/Container/Container'
import { ObjectIconSVG } from 'src/UI/icons/objectIconSVG'
import { PlaceIconSVG } from 'src/UI/icons/placeIconSVG'
import { SiteIconSVG } from 'src/UI/icons/siteIconSVG'
import { PhoneEventIconSVG } from 'src/UI/icons/phoneEventIconSVG'
import { TgEventIconSVG } from 'src/UI/icons/tgEventIconSVG'
import { MailEventIconSVG } from 'src/UI/icons/mailEventIconSVG'

import styles from './index.module.scss'

export const EventInfo = () => {
	const { id } = useParams()
	const { data: eventData } = useGetEventByIdQuery(id ?? '')

	const breakPoint = useBreakPoint()

	useAdditionalCrumbs(eventData?.title)

	return (
		<Container $padding='0' $paddingAdaptive='0' $margin='0'>
			<div className={styles.eventInfoWrapper}>
				<h2>{eventData?.title}</h2>
				<FlexRow className={styles.topLineEvent}>
					<CustomText $fontSize={breakPoint === 'S' ? '18px' : '16px'}>
						{eventData?.date && eventData.date.length > 1
							? formatDateRange(eventData?.date as [Date, Date])
							: mainFormatDate(eventData?.date[0])}
					</CustomText>
					<div className={styles.dot}></div>
					<CustomText $fontSize={breakPoint === 'S' ? '18px' : '16px'}>Фестиваль</CustomText>
					<div className={styles.dot}></div>
					<CustomText $fontSize={breakPoint === 'S' ? '18px' : '16px'}>
						Международное событие
					</CustomText>
					<div className={styles.dot}></div>
					<EventStatus className={styles.status} statusCode={eventData?.status} />
					<div className={cn(styles.dot, styles._red)}></div>
					<CustomText
						className={styles.ageRating}
						$fontSize={breakPoint === 'S' ? '18px' : '16px'}
						$color='#DE0008'
					>
						{eventData?.ageRating}+
					</CustomText>
				</FlexRow>

				<div className={styles.mainInfo}>
					<div className={styles.avatarWrapper}>
						<img src={eventData?.mainphoto[0]?.original} alt={eventData?.title} />
					</div>
					<div className={styles.infoBlock}>
						<CustomText $lineHeight='1.3' $margin='0 0 30px 0' className={styles.infoBlockText}>
							{eventData?.description}
						</CustomText>
						{eventData?.location?.address && (
							<InfoRow
								title='Место проведения:'
								label={<span className={styles.infoBlockText}>{eventData?.location?.address}</span>}
								icon={<PlaceIconSVG />}
								$titleWidth='182px'
								$gap='34px'
							/>
						)}

						{eventData?.object?.title && (
							<InfoRow
								title='Объект:'
								label={
									<Link
										to={`/${AppRoute.Objects}/${eventData?.object.id}`}
										className={styles.infoBlockText}
									>
										{eventData?.object.title}
									</Link>
								}
								icon={<ObjectIconSVG />}
								$titleWidth='182px'
								$gap='34px'
								titleClassname={styles.infoBlockText}
							/>
						)}

						{eventData?.site.link && (
							<InfoRow
								title='Сайт события:'
								label={
									<a href={eventData?.site.link} className={styles.infoBlockText}>
										{eventData?.site.title}
									</a>
								}
								icon={<SiteIconSVG />}
								$titleWidth='182px'
								$gap='34px'
								titleClassname={styles.infoBlockText}
							/>
						)}

						{eventData && (
							<InfoRow
								title='Телефон:'
								label={
									<a href='tel:+74329000000' className={styles.infoBlockText}>
										+7 (432) 900-00-00
									</a>
								}
								icon={<PhoneEventIconSVG />}
								$titleWidth='182px'
								$gap='34px'
								titleClassname={styles.infoBlockText}
							/>
						)}

						{eventData && (
							<InfoRow
								title='Телеграм:'
								label={
									<a href={eventData?.site.link} className={styles.infoBlockText}>
										{'https://t.me/username'}
									</a>
								}
								icon={<TgEventIconSVG />}
								$titleWidth='182px'
								$gap='34px'
								titleClassname={styles.infoBlockText}
							/>
						)}

						{eventData && (
							<InfoRow
								title='Электронная почта:'
								label={
									<a href={eventData?.site.link} className={styles.infoBlockText}>
										{'mail@mail.ru'}
									</a>
								}
								icon={<MailEventIconSVG />}
								$titleWidth='182px'
								$gap='34px'
								titleClassname={styles.infoBlockText}
							/>
						)}
					</div>
				</div>
			</div>
		</Container>
	)
}
