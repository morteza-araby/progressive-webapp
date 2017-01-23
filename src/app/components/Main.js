import React, { Component } from 'react'
import * as actions from 'Actions'
import AppLocalBootstrapActions from 'app_local'
import Loader from 'Loader'
import Header from 'Header'
import Adoption from 'Adoption'
import Appointments from 'Appointments'

class Main extends Component {
    constructor(props, context) {
        super(props, context)
    }
    componentDidMount() {
        //AppLocalBootstrapActions.initLoader()
    }
    render() {
        return (
            <div className="container">
            <Loader />
            <Header />
            <Adoption />
            <Appointments />
            </div>
        );
    }
}

export default Main
