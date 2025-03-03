import { type CategoryFilterItem } from 'src/types/global'
import { type ImageItem } from 'src/types/photos'

export type NewsItem = {
	id: string
	title: string
	date: Date
	imgGallery: ImageItem[]
	preview: string
	textNews: string[]
	full: string
}

export type CardNewsItem = {
	id: string
	title: string
	imgUrl: string
	date: Date
	desc: string
	category: CategoryFilterItem
}
