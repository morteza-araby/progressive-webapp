import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Loader from 'Loader'

class Adoption extends Component {

    adopt(a, i) {
        var imgSrc = "images/pets/" + a.filename + "_tn.jpg"
        var petName = a.pet + " photo"
        return (
            <div className="col-md-2 col-sm-3 col-xs-4">
                <img className="img-circle" src={imgSrc} alt={petName} key={i} />
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