import React from 'react';
import className from 'classnames/bind';
import PropTypes from 'prop-types'
import styles from './index.less'
 const cx = className.bind(styles);
 class XXX extends React.Component{
  constructor(props){
    super()
  }
  render(){
    return <div className={cx('message')}>
      <p>title</p>
      <span>22222</span>
    </div>
  }
}
XXX.defaultProps={
  whatever:'whatever'
}
XXX.propTypes={
  /** jsjsjsjsajdoiajsoj  */
  whatever:PropTypes.string.isRequired,
  /** finalllllllly 啊，you mother fucker */
  motherFucker:PropTypes.bool
}
 export default XXX 