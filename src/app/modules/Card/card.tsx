import React, { FC } from 'react';
import Bubble from '../Bubble/bubble';
import Letter from '../Letter/letter';
import styles from './card.module.scss';
import clsx from 'clsx';

interface Props {
	title: string;
	subtitle: string;
	color: 'pink' | 'yellow' | 'blue' | 'red';
	text?: string;
}

const Card: FC<Props> = ({ title, subtitle, text, color }) => {
	console.log(styles[`letter_bubble--${color}`]);
	console.log(color);
	return (
		<div className={styles.main_container}>
			<Letter letter='A' />
			<Bubble type='convess' color={color} />
			<div className={styles.pseudo_card}>
				<div className={clsx(styles.letter_bubble, color)} />
			</div>
			<div className={styles.card}>
				<h2 className={clsx(styles.card_title, color)}>{title}</h2>
				<h5 className={styles.card_subtitle}>{subtitle}</h5>
				<p className={styles.card_text}>
					{!text &&
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
				</p>
			</div>
			<Bubble type='concave' color={color} />
		</div>
	);
};

export default Card;
