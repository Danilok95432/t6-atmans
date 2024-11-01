import React, { type FC, useState } from 'react'

import { getYear } from 'date-fns'
import { MonthsFilterSlider } from 'src/components/months-filter-slider/months-filter-slider'
import { CategoriesFiltration } from 'src/components/categories-filtration/categories-filtration'
import { VideoCard } from 'src/components/video-card/video-card'

import {
	useGetAllVideosMonthsQuery,
	useGetVideosCategoriesQuery,
	useGetVideosMonthsQuery,
} from 'src/store/videos/videos.api'

import styles from './index.module.scss'
import MobileList from 'src/components/mobile-list/mobile-list'
import { createBreakpoint } from 'react-use'
import { DisplayBreakpoints } from 'src/helpers/consts'

const useBreakPoint = createBreakpoint({ M: DisplayBreakpoints.Md, S: DisplayBreakpoints.Sm })

export const Videos: FC = () => {
	const [activeMonth, setActiveMonth] = useState('')
	const [activeCategory, setActiveCategory] = useState('0')

	const { data: videosMonthsList, isSuccess: isMonthsSuccess } = useGetAllVideosMonthsQuery(null)
	const { data: videosCategories } = useGetVideosCategoriesQuery(null)
	const { data: videosList } = useGetVideosMonthsQuery({
		date: activeMonth,
		category: activeCategory,
	})

	const breakpoint = useBreakPoint()

	const handleChangeActiveMonth = (newMonth: string) => {
		setActiveMonth(newMonth)
	}
	const handleChangeActiveCategory = (newCategory: string) => {
		setActiveCategory(newCategory)
	}
	return (
		<div className={styles.videosPage}>
			<h2>Видеолента {getYear(new Date(activeMonth))}</h2>

			<MonthsFilterSlider
				monthsList={videosMonthsList ?? []}
				changeActiveMonth={handleChangeActiveMonth}
				activeMonth={activeMonth}
				isSuccess={isMonthsSuccess}
			/>
			<CategoriesFiltration
				activeCatId={activeCategory}
				changeActiveCatId={handleChangeActiveCategory}
				categories={videosCategories ?? []}
			/>
			{videosList?.length ? (
				breakpoint == "S" ?
				<MobileList items={videosList} renderItem={VideoCard} classListItems={styles.videosList}/>
				:
				<div className={styles.videosList}>
					{videosList.map((videosEl) => (
						<VideoCard key={videosEl.id} {...videosEl} />
					))}
				</div>
			) : (
				<p className={styles.videosAbsence}>
					В выбранном вами месяце нет ни одного видео. Пожалуйста, выберите другой месяц.
				</p>
			)}
		</div>
	)
}
