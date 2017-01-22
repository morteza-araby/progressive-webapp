import React, { Component, PropTypes } from 'react';

class Loader extends Component {
    render() {
        return (
            <div className="loader" >
                <div className="loader-text">Loading...</div>
                <div className="progress">
                    <div className="progress-bar progress-bar-danger progress-bar-striped active" role="progressbar" style={{width: "100%"}}></div>
                </div>
            </div >
        );
    }
}

Loader.propTypes = {

};

export default Loader;