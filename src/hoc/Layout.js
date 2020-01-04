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
                {this.props.isAuthenticated &&
                <Navigation/>
                }
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

export default connect(mapStateToProps)(Layout);