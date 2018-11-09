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
Switch.defaultProps = {
    size:'md'
}
Switch.propTypes = {
    onChange: PropTypes.func.isRequired,
}
export default Switch