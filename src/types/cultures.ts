import { type ImageItemWithText, type ImageItem } from 'src/types/photos'

export type CultureItem = {
	id: string
	title: string
	mainphoto: ImageItemWithText[]
	desc: string
	topDesc: string
	bottomDesc: string
	photos: ImageItem[]
}
