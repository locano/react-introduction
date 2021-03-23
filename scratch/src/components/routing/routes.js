import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import AboutMe from "./pages/aboutMe";
import Home from "./pages/home";
import Intro from "./pages/intro";
import MyInfo from "./pages/myInfo";
// https://reactrouter.com


class Routes extends React.Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} >
                    </Route>
                    <Route path="/intro" component={Intro}>
                    </Route>
                    <Route path="/myinfo">
                        <MyInfo />
                    </Route>
                    <Route path="/about">
                        <AboutMe />
                    </Route>
                </Switch>
            </Router>
        )
    }

}

export default Routes;
