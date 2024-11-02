import { Route, Routes } from 'react-router-dom'
import { AppRoute } from 'src/routes/main-routes/consts'
import { MainLayout } from 'src/routes/main-layout/main-layout'

import { HomePage } from 'src/pages/home-page/home-page'

import { AboutLayout } from 'src/pages/about-page/about-layout'
import { AboutGeneral } from 'src/pages/about-page/layout/about-general/about-general'
import { AboutHistory } from 'src/pages/about-page/layout/about-history/about-history'
import { AboutContacts } from 'src/pages/about-page/layout/about-contacts/about-contacts'

import { ObjectsLayout } from 'src/pages/objects-page/objects-layout'
import { ObjectsList } from 'src/pages/objects-page/layout/objects-list/objects-list'
import { ObjectDetails } from 'src/pages/objects-page/layout/object-details/object-details'

import { NewsDetails } from 'src/pages/news-page/layout/news-details/news-details'
import { News } from 'src/pages/news-page/layout/news/news'
import { NewsLayout } from 'src/pages/news-page/news-layout'

import { VideosLayout } from 'src/pages/videos-page/layout/videos-layout'
import { Videos } from 'src/pages/videos-page/layout/videos/videos'
import { VideoDetails } from 'src/pages/videos-page/layout/video-details/video-details'

import { EventsLayout } from 'src/pages/events-page/events-layout'
import { EventsListPage } from 'src/pages/events-page/layout/events-list-page/events-list-page'
import { EventDetailsLayout } from 'src/pages/events-page/layout/events-details/layout/event-details-layout'
import { EventGallery } from 'src/pages/events-page/layout/events-details/layout/event-gallery/event-gallery'
import { EventProgramLayout } from 'src/pages/events-page/layout/events-details/layout/event-program/layout/event-program-layout'
import { EventProgramDay } from 'src/pages/events-page/layout/events-details/layout/event-program/layout/event-program-day/event-program-day'
import { EventNews } from 'src/pages/events-page/layout/events-details/layout/event-news/event-news'
import { EventVideos } from 'src/pages/events-page/layout/events-details/layout/event-videos/event-videos'

import { AboutCultureLayout } from 'src/pages/about-page/layout/about-culture/about-culture-layout'
import { CultureGeneral } from 'src/pages/about-page/layout/about-culture/layout/culture-general/culture-general'
import { CultureDetails } from 'src/pages/about-page/layout/about-culture/layout/culture-details/culture-details'

import { SearchPage } from 'src/pages/search-page/search-page'
import { EventDetails } from 'src/pages/events-page/layout/events-details/layout/event-details/event-details'

export const MainRoutes = () => {
	return (
		<Routes>
			<Route path={AppRoute.Home} element={<MainLayout />}>
				<Route path={AppRoute.Home} element={<HomePage />} />
				<Route path={AppRoute.Search} element={<SearchPage />} />

				<Route path={AppRoute.About} element={<AboutLayout />}>
					<Route index element={<AboutGeneral />} />
					<Route path={AppRoute.AboutHistory} element={<AboutHistory />} />
					<Route path={AppRoute.AboutCulture} element={<AboutCultureLayout />}>
						<Route index element={<CultureGeneral />} />
						<Route path=':id' element={<CultureDetails />} />
					</Route>
					<Route path={AppRoute.AboutContacts} element={<AboutContacts />} />
				</Route>

				<Route path={AppRoute.Objects} element={<ObjectsLayout />}>
					<Route index element={<ObjectsList />} />
					<Route path=':id' element={<ObjectDetails />} />
				</Route>

				<Route path={AppRoute.News} element={<NewsLayout />}>
					<Route index element={<News />} />
					<Route path=':id' element={<NewsDetails />} />
				</Route>

				<Route path={AppRoute.Videos} element={<VideosLayout />}>
					<Route index element={<Videos />} />
					<Route path=':id' element={<VideoDetails />} />
				</Route>

				<Route path={AppRoute.Events} element={<EventsLayout />}>
					<Route index element={<EventsListPage />} />
					<Route path=':id' element={<EventDetailsLayout />}>
						<Route index element={<EventDetails />} />
						<Route path={AppRoute.EventNews} element={<EventNews />} />
						<Route path={`${AppRoute.EventProgram}`} element={<EventProgramLayout />}>
							<Route path=':dayId' element={<EventProgramDay />} />
						</Route>
						<Route path={AppRoute.EventGallery} element={<EventGallery />} />
						<Route path={AppRoute.EventVideos} element={<EventVideos />} />
					</Route>
				</Route>
			</Route>
		</Routes>
	)
}
