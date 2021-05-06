import Home from "@/pages/homePage"
import asyncComponent from "../utils/asyncComponent"
const routes = [
    {
        path: '/',
        component:asyncComponent(()=>import("@/pages/homePage")) ,
        name:"home",
    },
    // {
    //    path: '/sample',//默认首加
    //     component:TestRef ,
    //     name:"sample"
    // },
];

export default routes