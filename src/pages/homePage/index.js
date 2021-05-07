import React from "react";
import {withRouter} from "react-router-dom"
class Home extends React.Component{
    componentDidMount(){
        console.log("Home DidMount",this.props);

    }
    goNext(){
        const {history} = this.props;
        // 跳转方式-query (参数地址栏显示)
        // <Route path='/sample' component={sample}></Route> 
        // history.push({
        //     pathname:"/sample",
        //     query:{
        //         type:1
        //     }
        // })

        // 跳转方式-params (参数地址栏不显示，刷新地址栏，参数丢失)
        // <Route path='/sample/:type' component={sample}></Route> 
        // history.push("/sample/1")

        // 跳转方式-state (参数地址栏不显示，刷新地址栏，参数不丢失)
        // <Route path='/sample' component={sample}></Route> 
        // history.push({
        //     pathname:"/sample",
        //     state:{
        //         type:"abc"
        //     }
        // })

        // 跳转方式 - 无参数跳转
        // history.push("/sample")
    }
    render(){
        return (<div>
            homePage
            <button onClick={this.goNext.bind(this)}> go sample </button>
        </div>)
    }
}
export default withRouter(Home)