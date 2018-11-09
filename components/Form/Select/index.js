import React,{Component} from 'react'
import PropTypes from 'prop-types'
import className from 'classnames'
import styles from './index.less'
const cx = className.bind(styles);
class Select extends Component{
    constructor(props){
        super(props);
        this.state={
            data:props.data,
            show:props.show,
            focus:false,
            blur:false
        };
        if(!!props.value){
            this.state.curIndex=this.state.data.findIndex(x=>x==props.value);
            props.onChange&&props.onChange(props.value);
        }
    }
    componentDidMount(){
        document.addEventListener('click',this.close.bind(this));
    }
    close(e){
        e=e||window.event;
        if(!e.target.className.includes('select')){
            this.setState({show:false,focus:false});
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.data!=this.state.data){
            this.setState({data:nextProps.data});
        }
        if(nextProps.show!=this.state.show){
            this.setState({show:nextProps.show});
        }
    }
    setIndex(e){
        e=e||window.event;
        if(e && e.keyCode==38 ){//上
            console.log('up');
        }
        if(e && e.keyCode==40){//下
            console.log('down');
        }
    }
    componentWillUnmount(){
        document.removeEventListener('click',this.close.bind(this));
    }
    toggle(){
        this.setState({show:!this.state.show});
    }
    onChange(index){
        this.setState({curIndex:index,show:false},()=>this.props.onChange&&this.props.onChange(this.props.data[index]));
    }
    focusHandler(){
        this.setState({focus:true});
    }
    render(){
        const {show,focus,blur,curIndex,data} =this.state;
        return <div className={cx('wsf-select')} onFocus={this.focusHandler.bind(this)}>
            <ul className={cx('select-ul',{active:show,focus:focus})}>
            <li className='select-li'><a className='select-head' href="javascript:void(0)" onClick={this.toggle.bind(this)}>{data[curIndex]||'default'}</a></li>
            <li><a href="javascript:void(0)" className='select-holder'>placeholder</a></li>
            {
                this.state.data.map((v,i)=><li key={i}><a className={cx('select-a')} href="javascript:void(0)" onClick={this.onChange.bind(this,i)}>{v}</a></li>)
            }
            </ul>
        </div>
    }

}

Select.defaultProps = {
    data:new Array(20).fill('PROVINCE').map((v,i)=>v+i),
    value:"PROVINCE10",
    show:true
}
Select.propTypes = {

}
export default Select