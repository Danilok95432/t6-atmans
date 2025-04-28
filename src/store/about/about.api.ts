import {
	type AboutTraditionPage,
	type AboutContactsPage,
	type AboutGeneralPage,
	type AboutHistoryPage,
	type AboutGamesPage,
} from 'src/types/about'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { MAIN_PROD_URL, ReducerPath } from 'src/helpers/consts'

export const aboutApi = createApi({
	reducerPath: ReducerPath.About,
	tagTypes: ['About'],
	baseQuery: fetchBaseQuery({
		baseUrl: MAIN_PROD_URL,
	}),
	endpoints: (build) => ({
		getAboutGeneral: build.query<AboutGeneralPage, null>({
			query: () => ({
				url: `about/general`,
			}),
		}),
		getAboutHistory: build.query<AboutHistoryPage, null>({
			query: () => ({
				url: `about/history`,
			}),
		}),
		getAboutTraditions: build.query<AboutTraditionPage, null>({
			query: () => ({
				url: `about/tradition`,
			}),
		}),
		getAboutGames: build.query<AboutGamesPage, null>({
			query: () => ({
				url: `about/game`,
			}),
		}),
		getAboutContacts: build.query<AboutContactsPage, null>({
			query: () => ({
				url: `about/contacts`,
			}),
		}),
	}),
})

export const {
	useGetAboutGeneralQuery,
	useGetAboutHistoryQuery,
	useGetAboutTraditionsQuery,
	useGetAboutContactsQuery,
	useGetAboutGamesQuery,
} = aboutApi
