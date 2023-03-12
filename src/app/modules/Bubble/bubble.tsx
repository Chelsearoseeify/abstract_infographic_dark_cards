import React, { FC } from 'react';
import styles from './bubble.module.scss';
import classNames from 'classnames';

interface Props {
	type: 'concave' | 'convess';
}

const Bubble: FC<Props> = ({ type }) => {
	return <div className={classNames(styles.bubble, styles[`${type}`])} />;
};

export default Bubble;
