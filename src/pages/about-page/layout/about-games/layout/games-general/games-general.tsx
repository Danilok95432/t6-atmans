import React, { type FC } from 'react'

import { GallerySection } from 'src/modules/gallery-section/gallery-section'

import styles from './index.module.scss'
import { GameElement } from 'src/components/game-element/game-element'
import { useBreakPoint } from 'src/hooks/useBreakPoint/useBreakPoint'
import { useGetAboutGamesQuery } from 'src/store/about/about.api'

export const GamesGeneral: FC = () => {
	const { data: aboutGamesData } = useGetAboutGamesQuery(null)
	const breakpoint = useBreakPoint()
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
