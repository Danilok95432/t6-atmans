import React, { type FC } from 'react'
import { useParams } from 'react-router-dom'
import { CustomText } from 'src/components/custom-text/custom-text'
import { mainFormatDate } from 'src/helpers/utils'
import { AsideVideos } from 'src/components/aside-videos/aside-videos'
import { useGetObjectNewsVideoByIdQuery } from 'src/store/objects/objects.api'

import styles from './index.module.scss'

export const ObjNewsVideoDetails: FC = () => {
	const { id, vidId } = useParams()
	const { data: videoDetails } = useGetObjectNewsVideoByIdQuery({ objCode: id, videoId: vidId })

	if (!videoDetails) return

	return (
		<div className={styles.videoDetailTab}>
			<h2>{videoDetails?.title}</h2>
			<CustomText $fontSize='16px' $color='#9D9D9D' $margin='0 0 28px 0'>
				{mainFormatDate(videoDetails?.date)}
			</CustomText>
			<div className={styles.videoContentWrapper}>
				<div className={styles.mainVideo}>
					<iframe
						src={videoDetails?.url}
						allow='encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;'
						allowFullScreen
					></iframe>
				</div>
				<AsideVideos videosList={videoDetails.similarVideos} />
			</div>
		</div>
	)
}