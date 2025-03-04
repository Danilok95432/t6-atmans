import { type FC } from 'react'

import { useParams } from 'react-router-dom'

import { useAdditionalCrumbs } from 'src/hooks/additional-crumbs/additional-crumbs'

import { InfoRow } from 'src/UI/InfoRow/InfoRow'
import { SimpleLink } from 'src/components/simple-link/simple-link'

import { CustomText } from 'src/components/custom-text/custom-text'
import { useGetObjectByIdQuery } from 'src/store/objects/objects.api'

import styles from './index.module.scss'

export const ObjectHeader: FC = () => {
	const { id } = useParams()

	const { data: objectData } = useGetObjectByIdQuery(id ?? '')

	useAdditionalCrumbs(objectData?.title)

	return (
		<section className={styles.objectHeader}>
			{objectData?.title && <h2>{objectData?.title}</h2>}
			<div className={styles.objectInfoWrapper}>
				{objectData?.logo && (
					<div className={styles.logoContainer}>
						<img src={objectData?.logo} alt={objectData?.title} />
					</div>
				)}
				<div className={styles.objectMainInfo}>
					<CustomText
						// $fontSize='20px'
						$margin='0 0 30px 0'
						$lineHeight='1.2'
						className={styles.objectMainDesc}
					>
						{objectData?.mainDesc}
					</CustomText>
					{objectData?.phone && (
						<InfoRow
							titleClassname={styles.phoneTitle}
							title='Телефон:'
							label={objectData?.phone}
						/>
					)}
					{objectData?.email && (
						<InfoRow
							titleClassname={styles.mailTitle}
							title='Электронная почта:'
							label={<SimpleLink title={objectData?.email} link={objectData?.email} isEmail />}
						/>
					)}

					{objectData?.address && (
						<InfoRow
							wrapperClassname={styles.objectMainDesc}
							titleClassname={styles.addressTitle}
							title='Адрес объекта:'
							label={objectData?.address}
						/>
					)}

					{objectData?.tgSoc && (
						<InfoRow
							titleClassname={styles.tgTitle}
							title='Телеграм:'
							label={<SimpleLink title={objectData?.tgSoc} link={objectData?.tgSoc} />}
						/>
					)}

					{objectData?.vkSoc && (
						<InfoRow
							titleClassname={styles.vkTitle}
							title='Вконтакте:'
							label={<SimpleLink title={objectData?.vkSoc} link={objectData?.vkSoc} />}
							$margin='0'
						/>
					)}
				</div>
			</div>
		</section>
	)
}
