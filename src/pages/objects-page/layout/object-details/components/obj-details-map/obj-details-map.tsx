import React, { type FC } from 'react'
import { useParams } from 'react-router-dom'

import { useGetObjectByIdQuery } from 'src/store/objects/objects.api'

import styles from './index.module.scss'
// import { ObjPlacement } from 'src/modules/objPlacement/obj-placement'

export const ObjDetailsMap: FC = () => {
	const { id } = useParams()

	const { data: objectData } = useGetObjectByIdQuery(id ?? '')

	if (!objectData?.location) return null

	return (
		<section className={styles.mapSection}>
			<h2>Адрес</h2>
			{/* <div className={styles.objLocation}>
				{objectData?.paths.length > 0 ? (
					<ObjPlacement placeVariants={objectData?.paths} title='Как добраться' />
				) : (
					<iframe src={objectData?.location} width='100%' height='100%' loading='eager'></iframe>
				)}
			</div> */}
			<div className={styles.objLocation}>
				<iframe src={objectData?.location} width='100%' height='100%' loading='eager'></iframe>
			</div>
		</section>
	)
}
