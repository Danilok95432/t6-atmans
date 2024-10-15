import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { breadCrumbsReducer } from 'src/modules/bread-crumbs/store/bread-crumbs.slice'
import { homeApi } from 'src/store/home/home.api'
import { regionsApi } from 'src/store/regions/regions.api'
import { newsApi } from 'src/store/news/news.api'
import { eventsApi } from 'src/store/events/events.api'
import { ethnosportApi } from 'src/store/ethnosport/ethnosport.api'
import { groupsApi } from 'src/store/groups/groups.api'

import { NameSpace } from 'src/helpers/consts'

export const store = configureStore({
	reducer: {
		[NameSpace.BreadCrumbs]: breadCrumbsReducer,
		[regionsApi.reducerPath]: regionsApi.reducer,
		[newsApi.reducerPath]: newsApi.reducer,
		[eventsApi.reducerPath]: eventsApi.reducer,
		[ethnosportApi.reducerPath]: ethnosportApi.reducer,
		[groupsApi.reducerPath]: groupsApi.reducer,
		[homeApi.reducerPath]: homeApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }).concat(
			regionsApi.middleware,
			newsApi.middleware,
			eventsApi.middleware,
			ethnosportApi.middleware,
			homeApi.middleware,
			groupsApi.middleware,
		),
})

setupListeners(store.dispatch)
