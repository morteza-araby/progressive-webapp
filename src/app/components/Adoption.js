import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Loader from 'Loader'

class Adoption extends Component {
    constructor(props) {
        super(props)
        
    }

    adopt(a, i) {
        var imgSrc = "images/pets/" + a.filename + "_tn.jpg"
        var petName = a.pet + " photo"
        //var dataTarget = '"#adoption' + a.filename +'"'
        var targetId = "adoption" + a.filename 
        var dataTarget="#adoption" + a.filename
        return (
            <div key={i}>
                <div className="col-md-2 col-sm-3 col-xs-4 openpetmodal" data-toggle="modal" onClick={() => {
                    console.log("button click: ", dataTarget)
                    $(dataTarget).modal('show')                    
                }}>
                    <img className="img-circle" src={imgSrc} alt={petName}/>
                </div>{/*column*/}
                <div className="modal fade" id={targetId} tabIndex="-1" role="dialog" aria-labelledby="petModal">
                    <div className="modal-dialog" data-dismiss="modal" aria-label="Close" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal"  role="document"><span aria-hidden="true">&times;</span></button>
                                <h2 className="modal-title modal-petname">{a.pet}</h2>
                                <div className="modal-petbreed">{a.breed}</div>
                            </div>{/*<!-- modal header -->*/}
                            <div className="modal-body">
                                <img className="img-responsive modal-petimage" src={imgSrc} alt={petName} />
                                <p className="modal-petinfo">{a.description}</p>
                            </div>{/*<!--modal-body-->*/}
                        </div>{/*<!-- modal content -->*/}
                    </div>{/*<!-- modal dialog -->*/}
                </div>{/*<!-- modal fade -->*/}
            </div>

        )
    }
    render() {
        var {adoptionData} = this.props || []
        if (!adoptionData || adoptionData.length < 1) {
            return (<Loader />)
        }
        var adoptions = adoptionData.map((a, i) => {
            return this.adopt(a, i)
        })
        return (
            <div className="page" id="adoption">
                <div className="container">
                    <h2 className="page-headline">Adoptions</h2>
                    <p>These loving and deserving pets need a home. Please help us find a place for them. Click on their photo for more information.</p>
                    {adoptions}
                </div>
            </div>
        );
    }
}

Adoption.propTypes = {

};

export default connect(
    (state) => {
        return {
            adoptionData: state.data.adoption
        }
    }
)(Adoption)