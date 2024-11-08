import { type ReactNode } from 'react'

export type LinkItem = {
	id: string
	link: string
	titleLink: string
	type?: 'doc' | 'pdf'
	label?: ReactNode | ReactNode[]
}

export type SimpleLinkType = {
	title: string
	link: string
}

export type SourceLink = {
	id: string
	title: string
	link: string
	date: string
	source: string
}

export type CategoryItem = {
	id: string
	title: string
}
