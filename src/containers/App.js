import React from 'react';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import Layout from "../hoc/Layout";

import Expenses from "./Expenses";
import Settings from "./Settings";
import Home from "./Home";

class App extends React.Component {


    render() {

        let routes = (
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/expenses" component={Expenses}/>
                <Route path="/settings" component={Settings}/>
            </Switch>
        );

        return (
            <Layout>
                {routes}
            </Layout>
        );
    }
}

export default App;
