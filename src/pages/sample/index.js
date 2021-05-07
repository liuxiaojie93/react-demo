import React from "react";
import {withRouter} from "react-router-dom"
class Sample extends React.Component{
    componentDidMount(){
        console.log("Sample DidMount",this.props);
        console.log("@props",this.props)
        console.log("@query",this.props.location.query)
        console.log("@params",this.props.match.params)
        console.log("@state",this.props.location.state)
    }
    render(){
        return (<div>
            sample
        </div>)
    }
}
export default withRouter(Sample)