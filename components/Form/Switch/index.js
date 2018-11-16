import React from 'react';
import className from 'classnames/bind';
import PropTypes from 'prop-types'
import styles from './index.less'
const cx = className.bind(styles);

class Switch extends React.Component {
    constructor(props) {
        super();
        this.state={
            active:false
        }
        this.size={
            'sm':0.5,
            'md':0.8,
            'lg':1
        }
    }
    switchHandler(){
       this.setState({active:!this.state.active},()=>{
           this.props.onChange&&this.props.onChange(this.state.active);
       });
    }
    render() {
        const {active=false}=this.state;
        return <div className={cx('switch-root',{
            [`${this.props.size}`]:!!this.props.size,
            [`${this.props.className}`]:!!this.props.className
        })} style={this.props.style}>
            <a href="javascript:void(0)" className={cx('switch-box',{active:active})} onClick={this.switchHandler.bind(this)}>
                <i></i>
            </a>
        </div>
    }
}
// Switch.defaultProps = {
//     size:'md'
// }
Switch.propTypes = {
    /** 组件的大小选择 */
    size: PropTypes.oneOf(['sm','md','lg']).isRequired,
    /** 组件点击事件的回调( true||false )*/ 
    onChange: PropTypes.func.isRequired,
    /** 组件的开启状态 */
    value:PropTypes.string.isRequired,
}
export default Switch