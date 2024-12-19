import { type FC } from 'react'
import { type CardEventItem } from 'src/types/events'

import cn from 'classnames'
import { Link } from 'react-router-dom'
import { AppRoute } from 'src/routes/main-routes/consts'

import { getDayOfWeek, mainFormatDate } from 'src/helpers/utils'

import styles from './index.module.scss'
import { EventStatus } from '../event-status/event-status'

type EventItemProps = {
	className?: string
} & CardEventItem

export const EventCard: FC<EventItemProps> = ({
	id,
	category: { title: catTitle },
	location: { title: locTitle, address },
	title,
	date,
	status,
	imgUrl,
	description,
	className,
}) => {
	return (
		<div className={cn(styles.eventItem, className)}>
			<Link to={`/${AppRoute.Events}/${id}`}>
				<div className='event-item-img'>
					<img src={imgUrl} alt={title} />
					<span>{catTitle}</span>
				</div>
				<div className={cn(styles.eventContent, 'event-card-content')}>
					<h6>{title}</h6>
					<EventStatus className={styles.status} statusCode={status} />
					<p className={styles.eventDate}>
						{mainFormatDate(date)}, {getDayOfWeek(date)}
					</p>
					<p className={styles.eventLocations}>
						<span>{locTitle}</span>
						<span>{address}</span>
					</p>
					{description && <p className={styles.eventDesc}>{description}</p>}
				</div>
			</Link>
		</div>
	)
}
