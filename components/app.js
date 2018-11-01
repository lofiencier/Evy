import React, {Component, Fragment, PureComponent, createElement} from 'react';
import {render} from 'react-dom';
import {Route, BrowserRouter as Router,Link, Switch} from "react-router-dom"
import '../config/app.less'
import SwitchCpt from './Form/Switch'

class App extends Component{
    constructor(props){
        super(props);
        this.state={
            activeIndex:{}
        }
    }
    onColorChange(bol){
        if(bol){
            document.documentElement.style.backgroundColor="#282a36";
        }else{
            document.documentElement.style.backgroundColor="#eee";
        }
    }
    toggle(index){
        this.setState(prev=>{
            const {activeIndex={}}=prev;
            let bol=!!!activeIndex[index];
            activeIndex[index]=bol;
            return Object.assign({},{...prev,activeIndex});
        })
    }
    render(){
        const req = require.context('./', true, /index\.js$/);
        let paths={};
        let routers = req.keys().filter(i => i !== './index.js').map((key, index) => {
            const Cpt = req(key).default;
            let path = key.replace('/index.js', '').split('/').reverse()[0];
            let dir = key.replace('./', '').split('/')[0];
            if(!Array.isArray(paths[dir])){
                paths[dir]=[];
            }
            paths[dir].push({Cpt,path});
            return <Route key={index} path={`/${path.toLowerCase()}`} exact render={() =>< Cpt />}/>
        });
        let list=Object.keys(paths).map((v,i)=>{
            let cpts=paths[v].map((v1,i1)=>{
                const {path}=v1;
                return <li key={i1}><Link to={`/${path.toLowerCase()}`}>{path}</Link></li>
            })
            return <ul className={`cpt-container ${!!this.state.activeIndex[i]&&'active'}`} key={i}>
                <li>
                    <a href="javascript:void(0)" onClick={this.toggle.bind(this,i)}>
                        <small>{!!this.state.activeIndex[i]?'- ':'+ '}</small>
                        {v}
                    </a>
                </li>
                {cpts}
            </ul>
        })
    return <Router>
        <div className="app-content">
            <div className="list-content">
                <div className="ul-list">
                    {list}
                </div>
            </div>
            <div className="router-content">
                <Switch>
                    {routers}
                    {/* <Route path='/' component={IndexPage}/> */}
                </Switch>
            </div>
            <SwitchCpt className="switch-color" onChange={this.onColorChange.bind(this)}/>
        </div>
    </Router>
    }
}

class AppN extends PureComponent {
    render() {
        return <App/>
    }
}

let viewElement = document.getElementById('app');

render(<AppN/>, viewElement);


