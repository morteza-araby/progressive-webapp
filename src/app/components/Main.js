import React, { Component } from 'react'
import * as actions from 'Actions'
import Loader from 'Loader'
import Header from 'Header'
import Adoption from 'Adoption'
import Appointments from 'Appointments'

class Main extends Component {
    constructor(props, context) {
        super(props, context)
    }

    componentDidMount() {
        $('.loader').fadeOut(1000);
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
