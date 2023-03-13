import React, { FC } from 'react';
import styles from './bubble.module.scss';
import classNames from 'classnames';

interface Props {
	type: 'concave' | 'convess';
	color: 'pink' | 'yellow' | 'blue' | 'red';
}

const Bubble: FC<Props> = ({ type, color }) => {
	return <div className={classNames(styles.bubble, styles[`bubble--${type}`], color)} />;
};

export default Bubble;
