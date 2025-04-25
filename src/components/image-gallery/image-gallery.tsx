import React, { type FC, type RefObject, useRef, useState } from 'react'
import { type ImageItem } from 'src/types/photos'
import ImageGallery from 'react-image-gallery'
import cn from 'classnames'

import { mainFormatDate } from 'src/helpers/utils'
import { CustomFullscreenIcon } from 'src/UI/icons/customFullscreenIcon'

import { LimitArrowTop } from 'src/UI/icons/limitArrowTop'
import { LimitArrowDown } from 'src/UI/icons/limitArrowDown'
import { Swiper, type SwiperRef, SwiperSlide } from 'swiper/react'
import { SliderBtns } from 'src/components/slider-btns/slider-btns'
import { gallerySliderOptions } from 'src/components/image-gallery/consts'

import 'react-image-gallery/styles/css/image-gallery.css'
import styles from './index.module.scss'

type ImageGalleryProps = {
	className?: string
	listClassName?: string
	images?: ImageItem[]
	limit?: number
	limitController?: boolean
	variant?: 'list' | 'slider'
}

export const GalleryImg: FC<ImageGalleryProps> = ({
	className,
	listClassName,
	images,
	limit,
	limitController,
	variant = 'list',
}) => {
	const [expandedGallery, setExpandedGallery] = useState<boolean>(false)

	const [isFullscreenHidden, setIsFullscreenHidden] = useState<boolean>(true)
	const galleryRef = useRef<ImageGallery>(null)

	const openFullscreen = (index: number) => {
		if (galleryRef.current) {
			galleryRef.current.slideToIndex(index)
			galleryRef.current.fullScreen()
			setIsFullscreenHidden(false)
		}
	}

	const renderFullscreenButton = (
		onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
	) => (
		<button
			type='button'
			className={cn('image-gallery-fullscreen-button', styles.customFsBtn)}
			onClick={onClick}
			aria-label='Fullscreen'
		>
			<CustomFullscreenIcon />
		</button>
	)

	const swiperRef: RefObject<SwiperRef> = useRef<SwiperRef>(null)

	if (!images?.length) return null

	return (
		<div className={className}>
			{variant === 'slider' ? (
				<div className={styles.gallerySliderWrapper}>
					<Swiper {...gallerySliderOptions} ref={swiperRef}>
						{images?.map((slideItem, idx) => (
							<SwiperSlide
								className={styles.gallerySlide}
								key={idx}
								onClick={() => openFullscreen(idx)}
							>
								<div className={styles.slideItem}>
									<div className={styles.slideImg}>
										<img src={slideItem.thumbnail} alt={slideItem.title} />
									</div>
									<h6>{slideItem.title}</h6>
									{<span className={styles.author}>Автор: {slideItem.author}</span>}
								</div>
							</SwiperSlide>
						))}
					</Swiper>

					<SliderBtns
						className={styles.galleryBtns}
						$btnsSpacing='calc(100% + 60px)'
						$variant='gallery'
						swiperRef={swiperRef}
						color='#5C5C5C'
					/>
				</div>
			) : (
				<ul className={cn(styles.gridGallery, listClassName)}>
					{images.slice(0, expandedGallery ? images.length : limit).map((img, idx) => (
						<li key={img.id} onClick={() => openFullscreen(idx)}>
							<div className={styles.gridImgWrapper}>
								<img src={img.thumbnail} alt={`image ${idx + 1}`} />
							</div>
							{img.title && <h6>{img.title}</h6>}
							{<span className={styles.author}>Автор: {img.author}</span>}
							{img.date && <span className={styles.imgDate}>{mainFormatDate(img.date)}</span>}
						</li>
					))}
				</ul>
			)}
			<ImageGallery
				ref={galleryRef}
				renderFullscreenButton={renderFullscreenButton}
				showFullscreenButton={true}
				showPlayButton={false}
				additionalClass={cn(styles.imageGallery, { [styles.fullscreenHidden]: isFullscreenHidden })}
				items={images}
				onScreenChange={(isFullscreen) => !isFullscreen && setIsFullscreenHidden(true)}
			/>
			{limitController && limit && limit < images.length && (
				<button
					className={styles.limitController}
					type='button'
					onClick={() => setExpandedGallery(!expandedGallery)}
				>
					{expandedGallery ? (
						<>
							Скрыть
							<LimitArrowTop />
						</>
					) : (
						<>
							Показать еще {images.length - limit} фото
							<LimitArrowDown />
						</>
					)}
				</button>
			)}
		</div>
	)
}
