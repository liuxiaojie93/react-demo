import React from "react";
import {HashRouter as Router,Route,Switch} from "react-router-dom"
import routers from "@/connect/routers"
class App extends React.PureComponent{
    render(){
        return (
            <Router>
                <Switch>
                    {routers.map((route)=>{
                        return  <Route key={route.name} path={route.path} component={route.component} exact={route.exact}></Route>
                    })}
                </Switch>
            </Router>
        )
    }
}
export default App