import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from './page.module.scss';
import Card from './modules/Card/card';
import Bubble from './modules/Bubble/bubble';

export default function Home() {
	return (
		<main className={styles.main}>
			<Card title='Lorem Ipsum' subtitle='Infographic' />
		</main>
	);
}
