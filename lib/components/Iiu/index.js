import React from 'react';
import className from 'classnames/bind';
import styles from './index.css';
import pepeo from "./other.css"

const cx = className.bind(styles);
const StatelessComponent = ({ message = 'world' }) => (
  <div className={styles.message}>
    <span className={pepeo.other}>Hello {message}, React is awesome !!!</span>
  </div>
);

export default StatelessComponent;
