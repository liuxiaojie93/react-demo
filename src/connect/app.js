import React from "react";
import {BrowserRouter as Router,Route} from "react-router-dom"
import routers from "@/connect/routers"
class App extends React.PureComponent{
    render(){
        return (
            <Router>
                {routers.map((route)=>{
                    return  <Route key={route.name} path={route.path} component={route.component}> </Route>
                })}
            </Router>
        )
    }
}
export default App