import React, { type FC } from 'react'

import { GallerySection } from 'src/modules/gallery-section/gallery-section'

import styles from './index.module.scss'
import { GameElement } from 'src/components/game-element/game-element'
import { useBreakPoint } from 'src/hooks/useBreakPoint/useBreakPoint'

export const GamesGeneral: FC = () => {
	const breakpoint = useBreakPoint()
	const aboutGamesData = {
		topDesc:
			'<p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos</p>.<p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>.<p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>',
		bottomDesc:
			'<p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos</p>.<p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>.<p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>.<p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos</p>',
		photoGallery: [
			{
				id: '356',
				thumbnail:
					'https://auapi.npotau.ru/uploads/catimages/about_culture_photo/preview/356_1742457834_759324',
				original:
					'https://auapi.npotau.ru/uploads/catimages/about_culture_photo/original/356_1742457834_759324',
				title: 'тест',
				author: '',
			},
			{
				id: '355',
				thumbnail:
					'https://auapi.npotau.ru/uploads/catimages/about_culture_photo/preview/355_1742457825_531849',
				original:
					'https://auapi.npotau.ru/uploads/catimages/about_culture_photo/original/355_1742457825_531849',
				title: 'тест',
				author: '',
			},
			{
				id: '354',
				thumbnail:
					'https://auapi.npotau.ru/uploads/catimages/about_culture_photo/preview/354_1742457814_992188',
				original:
					'https://auapi.npotau.ru/uploads/catimages/about_culture_photo/original/354_1742457814_992188',
				title: 'тест',
				author: '',
			},
			{
				id: '353',
				thumbnail:
					'https://auapi.npotau.ru/uploads/catimages/about_culture_photo/preview/353_1742457798_426077',
				original:
					'https://auapi.npotau.ru/uploads/catimages/about_culture_photo/original/353_1742457798_426077',
				title: 'Еще лоладки',
				author: '',
			},
			{
				id: '352',
				thumbnail:
					'https://auapi.npotau.ru/uploads/catimages/about_culture_photo/preview/352_1742457778_387804',
				original:
					'https://auapi.npotau.ru/uploads/catimages/about_culture_photo/original/352_1742457778_387804',
				title: 'Лошадки куда-то бегут',
				author: 'Не мое',
			},
			{
				id: '310',
				thumbnail:
					'https://auapi.npotau.ru/uploads/catimages/about_culture_photo/preview/310_1742457747_511487',
				original:
					'https://auapi.npotau.ru/uploads/catimages/about_culture_photo/original/310_1742457747_511487',
				title: 'Резные котики',
				author: 'Автор затерян в веках',
			},
		],
		url: 'https://vk.com/video_ext.php?oid=-88678790&id=456239274&hd=2&autoplay=0',
		games: [
			{
				id: '4',
				title: 'Игра 1',
				desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			},
			{
				id: '6',
				title: 'Игра 2',
				desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			},
		],
	}
	if (!aboutGamesData) return null

	return (
		<>
			<div className={styles.inner}>
				{breakpoint === 'S' && <h2>Игры Атманова угла</h2>}
				<div className={styles.gamesDescription}>
					{aboutGamesData?.topDesc && (
						<div dangerouslySetInnerHTML={{ __html: aboutGamesData.topDesc }} />
					)}
				</div>
				<div className={styles.gamesVideo}>
					<iframe
						src={aboutGamesData?.url ?? ''}
						allow='encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;'
						allowFullScreen
					></iframe>
				</div>
				<div className={styles.gamesDescription}>
					{aboutGamesData?.bottomDesc && (
						<div dangerouslySetInnerHTML={{ __html: aboutGamesData.bottomDesc }} />
					)}
				</div>
				<GallerySection images={aboutGamesData?.photoGallery} />
				{aboutGamesData.games?.length && (
					<div className={styles.gamesList}>
						{aboutGamesData.games.map(({ id, desc, title }) => (
							<GameElement key={id} id={id} title={title} desc={desc} />
						))}
					</div>
				)}
			</div>
		</>
	)
}
