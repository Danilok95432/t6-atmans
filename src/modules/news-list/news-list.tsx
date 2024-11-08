import { type NewsItem } from 'src/types/news'
import React, { type FC } from 'react'

import { MainSelect } from 'src/UI/MainSelect/MainSelect'
import { Loader } from 'src/components/loader/loader'
import { DatedItem } from 'src/components/dated-item/dated-item'
import { Pagination } from 'src/components/pagination/pagination'

import styles from './index.module.scss'

type NewsListProps = {
	newsItems: NewsItem[]
	title?: string
	className?: string
	setYearsValue: React.Dispatch<React.SetStateAction<string>>
	yearsValue: string
	setMonthsValue: React.Dispatch<React.SetStateAction<string>>
	monthsValue: string
	isSuccess: boolean
}

export const NewsList: FC<NewsListProps> = ({
	newsItems,
	title,
	className,
	setYearsValue,
	yearsValue,
	setMonthsValue,
	monthsValue,
}) => {
	return (
		<div className={className}>
			<div className={styles.newsTitleBlock}>
				<h2>{title}</h2>
				<MainSelect
					onChange={(e) => setYearsValue(e.target.value)}
					value={yearsValue}
					className={styles.newsSelect}
					items={[
						{ label: 'Все годы', value: '' },
						{ label: '2023', value: '2023' },
						{ label: '2024', value: '2024' },
					]}
				/>
				<MainSelect
					onChange={(e) => setMonthsValue(e.target.value)}
					value={monthsValue}
					className={styles.newsSelect}
					items={[
						{ label: 'Все месяцы', value: '' },
						{ label: 'январь', value: '1' },
						{ label: 'февраль', value: '2' },
						{ label: 'март', value: '3' },
						{ label: 'апрель', value: '4' },
						{ label: 'май', value: '5' },
						{ label: 'июнь', value: '6' },
						{ label: 'июль', value: '7' },
						{ label: 'август', value: '8' },
						{ label: 'сентябрь', value: '9' },
						{ label: 'октябрь', value: '10' },
						{ label: 'ноябрь', value: '11' },
						{ label: 'декабрь', value: '12' },
					]}
				/>
			</div>
			{!newsItems ? (
				<Loader />
			) : (
				<ul className={styles.newsList}>
					{[...newsItems]
						?.reverse()
						.map((newsItem, idx, array) => (
							<DatedItem
								key={newsItem.id}
								id={newsItem.id}
								date={newsItem.date}
								prevDate={array[idx - 1]?.date}
								previewImage={newsItem.preview}
								title={newsItem.title}
								desc={newsItem.desc}
							/>
						))}
				</ul>
			)}
			<Pagination pagesCount={7} activePage={2} />
		</div>
	)
}
