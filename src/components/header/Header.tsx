import { Link } from 'react-router-dom'
import { AppRoute } from 'src/routes/main-routes/consts'
import { Container } from 'src/UI/Container/Container'
import { PersonIconSvg } from 'src/UI/icons/personIconSVG'
import { NavBanner } from '../main-navigation/components/nav-banner/nav-banner'

import mainLogo from 'src/assets/img/main-logo.svg'

import styles from './index.module.scss'

export const Header = () => {
	return (
		<header className={styles.mainNav}>
			<div className={styles.topMainNavWrapper}>
				<Container className={styles.topMainNav}>
					<Link to={AppRoute.Home} className={styles.logoWrapper}>
						<img src={mainLogo} alt='logo' />
					</Link>
					<NavBanner />
					<Link className={styles.personMenu} to='/'>
						<PersonIconSvg />
					</Link>
				</Container>
			</div>
		</header>
	)
}
