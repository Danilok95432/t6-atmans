export enum ReducerPath {
	Home = 'home/api',
	Objects = 'objects/api',
	News = 'news/api',
	Events = 'events/api',
	Cultures = 'cultures/api',
	Videos = 'videos/api',
	Search = 'search/api',
}

export const ImagesFormat = ['png', 'jpeg', 'jpg', 'webp', 'gif']
export enum NameSpace {
	BreadCrumbs = 'BREAD_CRUMBS',
}

export enum DisplayBreakpoints {
	Xs = 400,
	Sm = 576,
	Md = 768,
	Lg = 1024,
	Xl = 1280,
	Xxl = 1440,
	Fhd = 1920,
}

export const BASE_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:4020/api/v1'
export const HOME_URL = 'https://t6api.npotau.ru/home'
