import { type FC } from 'react'

import { useParams } from 'react-router-dom'

import { GalleryImg } from 'src/components/image-gallery/image-gallery'

import styles from './index.module.scss'
import { useGetEventByIdQuery } from 'src/store/events/events.api'

export const EventGallery: FC = () => {
	const { id } = useParams()
	const { data: eventInfo } = useGetEventByIdQuery(id ?? '')

	return (
		<div className={styles.eventGallery}>
			<p className={styles.galleryLengthInfo}>Всего фото: {eventInfo?.photos?.length}</p>
			<GalleryImg
				className={styles.eventPhotos}
				images={eventInfo?.photos}
				limit={12}
				limitController
			/>
		</div>
	)
}
