// import React,{Component} from 'react';
// import className from 'classnames/bind';
// import PropTypes from 'prop-types'
// import styles from './index.less'

// const cx = className.bind(styles);
// export default class Iiu extends Component{
//   constructor(props){
//     super();
//   }
//   render(){
//     return <span>{message}</span>
//   }
// }

// Iiu.defaultProps = {
//   message: '',
//   isArray: false
// };

// Iiu.propTypes = {
//   /** inverse, success, success-inverse, info, info-inverse, warning, warning-inverse, danger, danger-inverse */
//   message: PropTypes.string,
//   isArray: PropTypes.bool,
//   // list:PropTypes.array
// };
// // const Iiu=({message})=>(<span></span>)

// // export default Iiu

import React from 'react'

const Child = () => (
  <div>Sample</div>
)

class FuncDeclaration extends React.Component{
  render(){
    return <span>12312</span>
  }
}


export default FuncDeclaration