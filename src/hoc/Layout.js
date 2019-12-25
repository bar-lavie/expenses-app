import React, {Component} from 'react';
import {connect} from 'react-redux';
import Navigation from "../components/Navigation";


class Layout extends Component {
    render() {
        return (
            <>
                <main>
                    {this.props.children}
                </main>
                <Navigation/>
            </>
        )
    }
}

export default Layout;