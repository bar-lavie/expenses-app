import React from 'react';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import Layout from "../hoc/Layout";

import Home from "./Home";
import Settings from "./Settings";
import Expenses from "./Expenses";
import Compare from "./Compare";

class App extends React.Component {


    render() {

        let routes = (
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/settings" component={Settings}/>
                <Route path="/expenses" component={Expenses}/>
                <Route path="/compare" component={Compare}/>
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
