import { type FC } from 'react'
import { Link } from 'react-router-dom'

import { Container } from 'src/UI/Container/Container'
import footerLogo from 'src/assets/img/footer-logo.svg'
import { AppRoute } from 'src/routes/main-routes/consts'
import { FlexRow } from 'src/components/flex-row/flex-row'

import styles from './index.module.scss'

export const Footer: FC = () => {
	return (
		<footer className={styles.footer}>
			<Container>
				<FlexRow
					className={styles.footerTop}
					$gap='40px'
					$alignItems='center'
					$justifyContent='space-between'
					$margin='0 0 45px 0'
				>
					<span></span>
					<img className={styles.footerLogo} src={footerLogo} alt='Логотип' />
					<FlexRow className={styles.footerTopLinks} $gap='50px'>
						<Link to={AppRoute.Events}>События</Link>
						<Link to={AppRoute.Events}>Обратная связь</Link>
					</FlexRow>
				</FlexRow>
				{/* <div className={styles.footerContent}> */}
				{/* 	<div className={styles.footerContentItem}> */}
				{/* 		<h6>Телефон</h6> */}
				{/* 		<p>8 (999) 999-99-99</p> */}
				{/* 	</div> */}
				{/* 	<div className={styles.footerContentItem}> */}
				{/* 		<h6>Электронная почта</h6> */}
				{/* 		<p>npotau@npotau.ru</p> */}
				{/* 	</div> */}
				{/* 	<div className={styles.footerContentItem}> */}
				{/* 		<h6>Адрес</h6> */}
				{/* 		<p>392003, г. Тамбов, б-р Энтузиастов, д. 2А, этаж 4</p> */}
				{/* 	</div> */}
				{/* 	<SocialLinks className={styles.footerSocials} /> */}
				{/* </div> */}
				<p className={styles.footerDesc}>© Атманов угол, 2024</p>
				<p className={styles.footerCertificate}>
					<span>Разработано и построено в НПО ТАУ. Платформа Т-6.</span>
				</p>
			</Container>
		</footer>
	)
}
