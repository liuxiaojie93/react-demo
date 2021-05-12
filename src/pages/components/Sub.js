import React from "react"
import {Consumer} from "./context"
import PropTypes from "prop-types";
import Sub2 from "./Sub2"
class Sub extends React.Component{
    
    constructor(){
        super()
        console.log("Sub constructor");
    }
    static contextTypes = {
        count: PropTypes.number
    };

    getChildContext(){
        return {
            mes:"hello"
        }
    }

    static childContextTypes={
        mes:PropTypes.string
    }

    render() {
        console.log("Sub render");
        console.log("context",this.context);
        return (
            // <Consumer>
            //    {
            //         (v)=>{
            //             console.log("v",v);
            //             return  (<div>
            //                 value:{v.count}
            //             </div>)
            //         }
                    
                   
            //    }
            // </Consumer>
            <Sub2></Sub2>
        )
    }
}

export default Sub