import { type ImageItem } from 'src/types/photos'

export type AboutGeneralPage = {
	logo: string
	caption: string
	mainDescs: string[]
	descs: string[]
	photoGallery: ImageItem[]
}
export type AboutHistoryPage = {
	topDescs: string[]
	mainPhoto: {
		original: string
		title: string
	}
	bottomDescs: string[]
}

type ShortCultureElement = {
	id: string
	title: string
	desc: string
}

export type AboutCulturePage = {
	topDesc: string
	bottomDesc: string
	photoGallery: ImageItem[]
	cultures: ShortCultureElement[]
}

export type PhoneContacts = {
	contact: string
	phoneNumber: {
		formatNumber: string
		number: string
	}
}

export type EmailContacts = {
	contact: string
	email: string
}

export type AboutContactsPage = {
	map_coords: [number, number]
	mailAddress: string
	phone: PhoneContacts[]
	emails: EmailContacts[]
}
