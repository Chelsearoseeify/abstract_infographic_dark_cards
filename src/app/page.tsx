import styles from './page.module.scss';
import Card from './modules/Card/card';

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.flexbox}>
				<Card title='Lorem Ipsum' subtitle='Infographic' color='pink' />
				<Card title='Lorem Ipsum' subtitle='Infographic' color='blue' />
			</div>
			<div className={styles.flexbox}>
				<Card title='Lorem Ipsum' subtitle='Infographic' color='red' />
				<Card title='Lorem Ipsum' subtitle='Infographic' color='yellow' />
			</div>
		</main>
	);
}
