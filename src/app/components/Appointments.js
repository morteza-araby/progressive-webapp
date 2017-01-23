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

export default Appointments

// <div class="appointment media openpetmodal" data-toggle="modal" data-target="#wisdompetmodal">
//                         <div class="media-left media-top">
//                             <img class="media-object appointment-img img-rounded" src="images/pets/{{filename}}_tn.jpg" alt="{{pet}} photo" />
//                         </div>{/*<!-- media-left media-top -->*/}
//                         <div class="media-body">
//                             <h3 class="media-heading appointments-heading">{{pet}}, <span class="appointment-breed">{{breed}}</span></h3>
//                             <div class="appointment-owner"><span class="appointment-owner-title">Owner: </span> <span class="appointment-owner-name">{{owner}}</span></div>
//                             <div class="appointment-reason">{{reason}}</div>
//                         </div>{/*<!-- media-body -->*/}
//                     </div>{/*<!-- appointment media openpetmodal -->*/}