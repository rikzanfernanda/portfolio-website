import React from "react";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Home from "./Pages/home";
import AppLayout from "./Layouts/AppLayout";
import Web from "./Pages/web";
import Graphic_design from "./Pages/graphic_design";
import Nopage from "./Pages/nopage";

const Routes = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <AppLayout content={<Home/>}/>
                    </Route>
                    <Route path="/web" exact>
                        <AppLayout content={<Web/>}/>
                    </Route>
                    <Route path="/graphic-design" exact>
                        <AppLayout content={<Graphic_design/>}/>
                    </Route>
                    <Route exact component={Nopage}/>
                </Switch>
            </Router>
        </>
    )
}

export default Routes;