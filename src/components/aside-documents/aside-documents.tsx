import { type FC } from 'react'
import { type EventDocumentItem } from 'src/types/events'
import cn from 'classnames'

import styles from './index.module.scss'

type AsideDocumentsProps = {
	documents: EventDocumentItem[] | undefined
	className?: string
}

export const AsideDocuments: FC<AsideDocumentsProps> = ({ documents, className }) => {
	if (!documents?.length) return null
	return (
		<ul className={cn(styles.documents, className)}>
			{documents?.map((item) => (
				<li key={item.id}>
					<a className={styles.documentLink} href='#' download>
						{item.name}
					</a>

					<p className={styles.documentInfo}>
						{item.url.split('.')[item.url.split('.').length - 1]}-файл
					</p>
				</li>
			))}
		</ul>
	)
}
