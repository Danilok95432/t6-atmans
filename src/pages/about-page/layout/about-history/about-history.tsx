import { type FC } from 'react'
import { Helmet } from 'react-helmet-async'

import styles from './index.module.scss'
import foundersImage from 'src/assets/img/history-founders.jpg'
import { PageContent } from 'src/components/page-content/page-content'

export const AboutHistory: FC = () => {
	return (
		<PageContent className={styles.historyPageContent}>
			<Helmet>
				<title>История Атманова угла</title>
			</Helmet>

			<h2>История Атманова угла</h2>
			<p>
				Инициаторами создания ВООПИиК выступили заместитель председателя Совета министров РСФСР
				Вячеслав Иванович Кочемасов, ставший первым председателем ВООПИиК, писатель Леонид
				Максимович Леонов, художники Илья Сергеевич Глазунов, Павел Дмитриевич Корин и Николай
				Аркадьевич Пластов, композитор Георгий Васильевич Свиридов, директор Эрмитажа Борис
				Борисович Пиотровский, академики АН СССР Игорь Васильевич Петрянов-Соколов и Борис
				Александрович Рыбаков.
			</p>
			<p>
				<b>23 июля 1965 года</b> было принято Постановление Совета Министров РСФСР об организации
				Всероссийского общества охраны памятников истории и культуры (ВООПИиК) в целях привлечения
				широкой общественности к активному участию в охране памятников.
			</p>
			<p>
				<b>8-9 июня 1966 года</b> в Москве состоялся Первый учредительный съезд ВООПИиК, который
				возглавили Павел Корин, Леонид Леонов, Петр Барановский, Николай Воронин и другие
				авторитетные и известные деятели культуры.
			</p>
			<figure className={styles.image}>
				<img src={foundersImage} alt='Основатели ВООПИиК' />
				<figcaption>
					Основатели ВООПИиК (на фото справа налево): писатель <b>Леонов&nbsp;Л.М.</b>, заместитель
					председателя Совета министров РСФСР <b>Кочемасов&nbsp;В.И.</b>, историк{' '}
					<b>Иванов&nbsp;В.Н.</b>, заместитель министра культуры РСФСР <b>Серегин</b>.
				</figcaption>
			</figure>
			<p>
				При отделениях ВООПИиК были созданы секции: архитектурная, историческая, пропаганды,
				памятников музыкальной культуры и хореографического искусства, памятников науки и техники,
				краеведения и другие. В них работали: Андроников&nbsp;И. А., Белявский&nbsp;М. Т.,
				Юрлов&nbsp;А. А., Захарченко&nbsp;В. Д., Тряпкин&nbsp;К.Ф. Исаев&nbsp;Е. А.,
				Солоухин&nbsp;В. А., Руднева&nbsp;А. В., Келдыш&nbsp;Ю. В., Чижова&nbsp;А. Э.,
				Надеждина&nbsp;Н. С., Жюрайтис&nbsp;A. M., Карпов&nbsp;Б. Л., Русанов&nbsp;П. В.,
				Иванова&nbsp;Л. В., Князев&nbsp;К. Ф., Тельтевский&nbsp;П. А., Космолинский&nbsp;П. Ф.,
				Флоренский&nbsp;К. П., Алфёрова Г. В., Агальцова В. А., Семёнова А. И., Сытина Т. Н.,
				Харламова&nbsp;A. M., Волынский&nbsp;М. Л., Выполов&nbsp;B. C., Каиров&nbsp;Л. А.,
				Кудрявцев&nbsp;М. П., Ревякин&nbsp;П. П., Велихов&nbsp;Е. П., Щукина&nbsp;Е. П.
			</p>
			<p>
				В период расцвета Общества в 70-80-е годы XX века оно являлось одной из самых массовых
				организаций и насчитывало в своих рядах более 10 млн. человек. В эти десятилетия благодаря
				усилиям Общества защищено от сноса и отреставрировано, в т. ч. за счёт его средств более
				3000 памятников, выделено на реставрацию, консервацию и ремонт свыше 60 млн. рублей.
			</p>
			<p>
				Общество принимало непосредственное участие в создании музеев-заповедников. Выделялись
				средства, в том числе на литературно-мемориальные музеи-заповедники «Спасское-Лутовиново»,
				«Константиново», музеи деревянного зодчества в с.&nbsp;Хохловка Пермской области, «Малые
				Корелы» в Архангельске, «Витославлицы» в Великом Новгороде, Суздале. Особое внимание
				уделялось восстановлению храмов, часовен и монастырей Русской Православной Церкви и
				культовых объектов других конфессий.
			</p>
			<p>
				Выделялись средства на памятники военной истории: Государственный военно-исторический и
				природный музей-заповедник «Куликово поле» Тульской области, Государственный
				военно-исторический музей-заповедник «Прохоровское поле» в Белгородской области,
				Государственный военно-исторический музей-заповедник Сталинградской битвы на Мамаевом
				кургане в Волгограде, Музей-заповедник партизанской славы в Кистнянском лесу Брянской
				области, благоустройство воинских захоронений.
			</p>
		</PageContent>
	)
}
