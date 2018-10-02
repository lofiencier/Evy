import React,{Component} from 'react';
import className from 'classnames/bind';
import PropType from 'prop-types'
import styles from './index.less'

const cx = className.bind(styles);


class Iiu extends React.Component{
  constructor(props){
    super()
  }
  render(){
    return <span className={cx}>1</span>
  }
}

Iiu.propTypes = {
  /** here is some description */
  children: PropType.string.isRequired,
  /** 10% building modules 0/1 modules 1 active ...Desktop\Evy\ */
  text:PropType.number,
  /** 20% building modules 0/1 modules 1 active ...Desktop\Evy\ */
  naive:PropType.bool.isRequired
}

export default Iiu