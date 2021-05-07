import asyncComponent from "../utils/asyncComponent"
const routes = [
    {
        path: '/',
        component:asyncComponent(()=>import("@/pages/homePage")) ,
        name:"home",
        exact:true
    },
    {
       path: '/sample',//默认首加
        component:asyncComponent(()=>import("@/pages/sample"))  ,
        name:"sample"
    },
];

export default routes