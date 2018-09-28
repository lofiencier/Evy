import React from 'react';
import className from 'classnames/bind';
import PropTypes from 'prop-types'
import styles from './index.less'

const cx = className.bind(styles);
const Iiu = ({message,isArray,list=[]}) => {
 return <div className={styles.message}>
    <span>This is a Message:{message}</span>
    {
      isArray&&
      <span>isArray</span>
    }
    <ul>
      {
        list.map(i=>i.name)
      }
    </ul>
  </div>
};

Iiu.propTypes = {
  /** inverse, success, success-inverse, info, info-inverse, warning, warning-inverse, danger, danger-inverse */
  message: PropTypes.string,
  isArray: PropTypes.bool,
  // list:PropTypes.array
};

export default Iiu;


