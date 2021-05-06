import React from "react"

export default function asyncComponent(importComponent){
    return class asyncComponent extends React.Component{
        constructor(){
            super();
            this.state={
                component:null
            }
        }
        componentDidMount(){
            importComponent().then((component)=>{
                this.setState({
                    component
                })
            })
        }
        render(h) {
            const {
                component:C
            } = this.state;
           return  C?<C >  </C>:null
        }
    }

    
}