import React, { Component, PropTypes } from 'react';

class MyModal extends Component {
    componentDidUpdate(prevProps, prevState){
        $("#wisdompetmodal").modal('show')  
    }
    render() {
        if($.isEmptyObject(this.props.pet))
        return(<div></div>)
        var imgSrc = "images/pets/" + this.props.pet.filename + "_tn.jpg"
        var petName = this.props.pet.pet + " photo"
        return (
            <div className="modal fade" id="wisdompetmodal" tabIndex="-1" role="dialog" aria-labelledby="petModal">
                <div className="modal-dialog" data-dismiss="modal" aria-label="Close" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" role="document"><span aria-hidden="true">&times;</span></button>
                            <h2 className="modal-title modal-petname">{this.props.pet.pet}</h2>
                            <div className="modal-petbreed">{this.props.pet.breed}</div>
                        </div>{/*<!-- modal header -->*/}
                        <div className="modal-body">
                            <img className="img-responsive modal-petimage" src={imgSrc} alt={petName} />
                            <p className="modal-petinfo">{this.props.pet.description}</p>
                        </div>{/*<!--modal-body-->*/}
                    </div>{/*<!-- modal content -->*/}
                </div>{/*<!-- modal dialog -->*/}
            </div>
        );
    }
}

MyModal.propTypes = {

};

export default MyModal;