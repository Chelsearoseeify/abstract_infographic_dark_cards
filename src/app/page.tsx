import styles from './page.module.scss';
import Card from './modules/Card/card';

export default function Home() {
	return (
		<main>
			<div className={styles.main}>
				<Card title='Lorem Ipsum' subtitle='Infographic' color='pink' />
				<Card title='Lorem Ipsum' subtitle='Infographic' color='blue' />
			</div>
			<div className={styles.main}>
				<Card title='Lorem Ipsum' subtitle='Infographic' color='red' />
				<Card title='Lorem Ipsum' subtitle='Infographic' color='yellow' />
			</div>
		</main>
	);
}
