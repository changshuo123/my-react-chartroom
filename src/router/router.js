import React, { Component } from 'react'
import { BrowserRouter } from "react-router-dom"
import RouterView from "./routerViews"
import routes from "./routerSettings"
class Routers extends Component {
    render() {
        return (
            <BrowserRouter>
                <RouterView routes={ routes }/>
            </BrowserRouter>
        )
    }
}

export default Routes
