import { type FC } from 'react'

import { useParams } from 'react-router-dom'
import { useBreakPoint } from 'src/hooks/useBreakPoint/useBreakPoint'
import { useGetEventByIdQuery } from 'src/store/events/events.api'

import { RenderedArray } from 'src/components/rendered-array/rendered-array'
import { Placement } from 'src/modules/placement/placement'
import { AccordionItem } from 'src/components/accordion-item/accordion-item'
import { CustomText } from 'src/components/custom-text/custom-text'

import styles from './index.module.scss'

export const EventDetails: FC = () => {
	const { id = '' } = useParams()

	const { data: eventInfo } = useGetEventByIdQuery(id ?? '')
	const breakPoint = useBreakPoint()

	return (
		<div className={styles.eventDetailTab}>
			{!!eventInfo?.descs?.length && (
				<section>
					<h4>Информация</h4>
					<RenderedArray
						className={styles.eventDescs}
						strArray={eventInfo?.descs}
						as='div'
						asStr='p'
					/>
				</section>
			)}

			{eventInfo && (
				<section>
					<h4>Условия участия</h4>
					<RenderedArray
						className={styles.eventDescs}
						strArray={[eventInfo?.conditions ?? '']}
						as='div'
						asStr='p'
					/>
				</section>
			)}

			{eventInfo && (
				<section>
					<h4>Расписание</h4>
					<RenderedArray
						className={styles.eventDescs}
						strArray={[eventInfo?.raspisanie ?? '']}
						as='div'
						asStr='p'
					/>
				</section>
			)}

			<section>
				<Placement placeVariants={eventInfo?.pathways} title='Как добраться' />
			</section>
			<section>
				<Placement placeVariants={eventInfo?.placement} title='Размещение' />
			</section>
			{!!eventInfo?.faq?.length && (
				<section>
					<h4>Часто задаваемые вопросы</h4>
					<div className={styles.faqList}>
						{eventInfo?.faq?.map((faqEl, idx) => (
							<AccordionItem
								className={styles.eventFaqItem}
								key={idx}
								trigger={faqEl.title}
								content={faqEl.content}
							/>
						))}
					</div>
				</section>
			)}
			<CustomText $fontSize={breakPoint === 'S' ? '18px' : '16px'} $margin='0'>
				Возрастной рейтинг: <span className={styles.ageRating}>{eventInfo?.ageRating}+</span>
			</CustomText>
		</div>
	)
}
