import React from "react"
import reactDom from "react-dom"
import { Provider } from 'react-redux'
import store from '@/connect/store'
import App from "@/connect/app"
reactDom.render(
    <Provider store={store}>
        <App store={store} />
    </Provider>,
    document.getElementById("react-root")
)