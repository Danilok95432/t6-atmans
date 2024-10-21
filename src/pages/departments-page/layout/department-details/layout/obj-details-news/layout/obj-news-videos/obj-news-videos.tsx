import React, { type FC, useState } from 'react'

import { MainSelect } from 'src/UI/MainSelect/MainSelect'
import { VideoGallery } from 'src/components/video-gallery/video-gallery'

import { useParams } from 'react-router-dom'
import { Pagination } from 'src/components/pagination/pagination'
import { useGetObjectNewsVideosQuery } from 'src/store/objects/objects.api'

import styles from './index.module.scss'

export const ObjNewsVideos: FC = () => {
	const { id } = useParams()

	const [yearsSelectValue, setYearsSelectValue] = useState<string>('')
	const { data: newsVideosList } = useGetObjectNewsVideosQuery(id ?? '')

	return (
		<div>
			<div className={styles.groupTabNewsVideos}>
				<div className={styles.videosTitleBlock}>
					<h2>Видеозаписи объекта</h2>
					<MainSelect
						onChange={(e) => setYearsSelectValue(e.target.value)}
						value={yearsSelectValue}
						className={styles.newsDateSelect}
						items={[{ label: 'Все годы', value: '' }]}
					/>
					<MainSelect
						onChange={(e) => setYearsSelectValue(e.target.value)}
						value={yearsSelectValue}
						className={styles.newsDateSelect}
						items={[{ label: 'Все месяцы', value: '' }]}
					/>
				</div>
				<VideoGallery videos={newsVideosList} />
				<Pagination className={styles.newsVideosPagination} pagesCount={7} activePage={2} />
			</div>
		</div>
	)
}