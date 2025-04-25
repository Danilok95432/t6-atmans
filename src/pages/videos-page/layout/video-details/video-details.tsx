import React, { type FC } from 'react'
import { Helmet } from 'react-helmet-async'

import { useParams } from 'react-router-dom'

import { CustomText } from 'src/components/custom-text/custom-text'
import { AsideVideos } from 'src/components/aside-videos/aside-videos'

import { useGetVideoByIdQuery } from 'src/store/videos/videos.api'
import { mainFormatDate } from 'src/helpers/utils'
import { useAdditionalCrumbs } from 'src/hooks/additional-crumbs/additional-crumbs'

import styles from './index.module.scss'

export const VideoDetails: FC = () => {
	const { id } = useParams()
	const { data: videoDetails } = useGetVideoByIdQuery(id ?? '')

	useAdditionalCrumbs(videoDetails?.title)

	if (!videoDetails) return

	return (
		<>
			<Helmet>
				<title>{videoDetails?.title}</title>
			</Helmet>
			<div className={styles.videoDetailPage}>
				<h2>{videoDetails?.title}</h2>
				<CustomText $fontSize='18px' $color='#DE0008' $margin='0 0 30px 0'>
					{mainFormatDate(videoDetails?.date)}
				</CustomText>
				<div className={styles.mainVideo}>
					<iframe
						src={videoDetails.url ?? ''}
						allow='encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;'
						allowFullScreen
					></iframe>
				</div>
				<div className={styles.descVideo}>
					<p className={styles.descVideoText}>
						23 августа в Правительстве Тамбовской области состоялось выездное заседание рабочей
						группы «Развитие национальных видов спорта в Российской Федерации» при Комитете
						Государственной Думы России по физической культуре и спорту под председательством
						руководителя рабочей группы Романа Терюшкова и губернатора Тамбовской области Максима
						Егорова.
					</p>
				</div>
				<AsideVideos
					videosList={videoDetails?.similarVideos}
					title='Похожие видео'
					previewCount={4}
					orient='horizontal'
				/>
			</div>
		</>
	)
}
