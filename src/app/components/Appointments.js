import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as actions from 'Actions'
import Loader from 'Loader'
import MyModal from 'MyModal'

class Appointments extends Component {

    appoint(a, i) {
        var {dispatch} = this.props
        var imgSrc = "images/pets/" + a.filename + "_tn.jpg"
        var petName = a.pet + " photo"
        return (
            <div key={i}>
                <div className="appointment media openpetmodal" data-toggle="modal" onClick={() => {                    
                    dispatch(actions.setCurrentAppointment(a))                    
                }}>
                    <div className="media-left media-top">
                        <img className="media-object appointment-img img-rounded" src={imgSrc} alt={petName} />
                    </div>{/*<!-- media-left media-top -->*/}
                    <div className="media-body">
                        <h3 className="media-heading appointments-heading">{a.pet}, <span className="appointment-breed">{a.breed}</span></h3>
                        <div className="appointment-owner"><span className="appointment-owner-title">Owner: </span> <span className="appointment-owner-name">{a.owner}</span></div>
                        <div className="appointment-reason">{a.reason}</div>
                    </div>{/*<!-- media-body -->*/}
                </div>{/*<!-- appointment media openpetmodal -->*/}
            </div>

        )
    }
    render() {
        var {appointmentsData} = this.props || []
        var {currentAppointment} = this.props
        if (!appointmentsData || appointmentsData.length < 1) {
            return (<Loader />)
        }
        var appointments = appointmentsData.map((a, i) => {
            return this.appoint(a, i)
        })
        return (
            <div className="page" id="appointments">
                <div className="container">
                    <h2 className="page-headline">Appointments</h2>
                    <p>Here's the pets that came in this week for an appointment. Click on a pet's photo for more info.</p>
                    {appointments}
                    <MyModal pet={currentAppointment} />
                </div>
            </div>
        );
    }
}

Appointments.propTypes = {

};

export default connect(
    (state) => {
        return {
            appointmentsData: state.data.appointments,
            currentAppointment: state.currentAppointment
        }
    }
)(Appointments)

