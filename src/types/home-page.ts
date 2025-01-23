export type HomePoster = {
	id: string
	title: string
	date: Date
	location: string
	imgUrl: string
	isExternal: boolean
	itemLink: string
}

export type HomePartnerItem = {
	id: string
	imgUrl: string
	link: string
}

export type HomeFaq = {
	id: string
	title: string
	content: string
}

export type HomeObject = {
	id: string
	title: string
	logo: string
	icon: string
}
export type HomePreviewObject = {
	id: string
	title: string
	logo: string
	icon: string
	mainDesc: string
	address: string
	location: string
}
