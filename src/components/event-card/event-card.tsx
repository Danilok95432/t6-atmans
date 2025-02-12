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
		<Link to={`/${AppRoute.Events}/${id}`} aria-label='Переход на страницу события' title={title}>
			<figure className={cn(styles.eventItem, className)}>
				<div className='event-item-img'>
					<img src={imgUrl} alt={title} width={415} height={256} loading='lazy' />
					<span>{catTitle}</span>
				</div>
				<figcaption className={cn(styles.eventContent, 'event-card-content')}>
					<h3 className={styles.eventTitle}>{title}</h3>
					<EventStatus className={styles.status} statusCode={status} />
					<p className={styles.eventDate}>
						{mainFormatDate(date)}, {getDayOfWeek(date)}
					</p>
					<p className={styles.eventLocations}>
						<span>
							{locTitle}
							<br />
							{address}
						</span>
					</p>
					{description && <p className={styles.eventDesc}>{description}</p>}
				</figcaption>
			</figure>
		</Link>
	)
}
