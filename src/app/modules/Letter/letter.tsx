import React, { FC } from 'react';
import styles from './letter.module.scss';

interface Props {
	letter: string;
}

const Letter: FC<Props> = ({ letter }) => {
	return (
		<>
			<div className={styles.bubble_container}>
				<h2 className={styles.bubble_letter}>{letter}</h2>
			</div>
		</>
	);
};

export default Letter;
