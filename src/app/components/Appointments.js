import React, { Component, PropTypes } from 'react';

class Appointments extends Component {
    render() {
        return (
            <div className="page" id="appointments">
                <div className="container">
                    <h2 className="page-headline">Appointments</h2>
                    <p>Here's the pets that came in this week for an appointment. Click on a pet's photo for more info.</p>
                </div>
            </div>
        );
    }
}

Appointments.propTypes = {

};

export default Appointments;