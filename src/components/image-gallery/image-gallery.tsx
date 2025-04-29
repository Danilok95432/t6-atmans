import React, { type FC, type RefObject, useRef, useState, useCallback } from 'react'
import { type ImageItem } from 'src/types/photos'
import cn from 'classnames'

import { mainFormatDate } from 'src/helpers/utils'
import { LimitArrowTop } from 'src/UI/icons/limitArrowTop'
import { LimitArrowDown } from 'src/UI/icons/limitArrowDown'
import { Swiper, SwiperSlide, type SwiperRef } from 'swiper/react'
import { SliderBtns } from 'src/components/slider-btns/slider-btns'
import {
	galleryFullScreenSliderOptions,
	gallerySliderOptions,
} from 'src/components/image-gallery/consts'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import 'swiper/swiper-bundle.css'

import styles from './index.module.scss'
import { useBreakPoint } from 'src/hooks/useBreakPoint/useBreakPoint'
import { CloseSvg } from 'src/UI/icons/closeSVG'

SwiperCore.use([Navigation, Pagination])

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
	const [overlayVisible, setOverlayVisible] = useState<boolean>(false)
	const [initialSlide, setInitialSlide] = useState<number>(0)
	const overlaySwiperRef: RefObject<SwiperRef> = useRef<SwiperRef>(null)
	const swiperRef: RefObject<SwiperRef> = useRef<SwiperRef>(null)
	const breakpoint = useBreakPoint()

	const openOverlay = useCallback((index: number) => {
		setInitialSlide(index)
		setOverlayVisible(true)
		document.body.classList.add(styles.noScroll)
	}, [])

	const closeOverlay = useCallback(() => {
		setOverlayVisible(false)
		document.body.classList.remove(styles.noScroll)
	}, [])

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
								onClick={() => openOverlay(idx)}
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
						$btnsSpacing={breakpoint === 'S' ? '80%' : 'calc(100% + 60px)'}
						$variant='gallery'
						swiperRef={swiperRef}
						color={breakpoint === 'S' ? '#FFF' : '#5C5C5C'}
					/>
				</div>
			) : (
				<ul className={cn(styles.gridGallery, listClassName)}>
					{images.slice(0, expandedGallery ? images.length : limit).map((img, idx) => (
						<li key={img.id} onClick={() => openOverlay(idx)}>
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

			{overlayVisible && (
				<div className={styles.imageOverlay} onClick={closeOverlay}>
					<div className={styles.overlayContent} onClick={(e) => e.stopPropagation()}>
						<button className={styles.closeButton} onClick={closeOverlay}>
							<CloseSvg />
						</button>
						<Swiper
							{...galleryFullScreenSliderOptions}
							ref={overlaySwiperRef}
							initialSlide={initialSlide}
							pagination={{ clickable: true }}
							className={styles.overlaySwiper}
						>
							{images.map((image, index) => (
								<SwiperSlide key={image.id}>
									<img src={image.thumbnail} alt={image.title} className={styles.overlayImage} />
								</SwiperSlide>
							))}
						</Swiper>
						<SliderBtns
							className={styles.fullScreenSliderBtns}
							$topPosition='50%'
							$btnsSpacing={breakpoint === 'sliderBtnsPoint' ? '897px' : '90%'}
							swiperRef={overlaySwiperRef}
							color={breakpoint === 'Xs' ? '#FFF' : '#FFFFFFB5'}
						/>
					</div>
				</div>
			)}
		</div>
	)
}
