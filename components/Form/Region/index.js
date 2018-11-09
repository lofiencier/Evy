import React,{Component} from 'react'
import PropTypes from 'prop-types'
import Select from '../Select';

class Region extends Component{
    constructor(props){
        super(props);
        this.state={
            data:props.data
        }
    }
    render(){
        const province=new Array(20).fill('PROVINCE');
        const city=new Array(10).fill('CITY');
        const area=new Array(10).fill('area');
        return [province,city,area].map((v,i)=>{
            return <Select data={v} key={i}/>
        })
    }

}

Region.defaultProps = {
}
Region.propTypes = {
}
export default Region