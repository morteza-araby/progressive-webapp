import React, { Component, PropTypes } from 'react';

class Navigation extends Component {
    componentDidMount() {
        $('.reload').click(function () {
            window.location.reload()
        })
    }
      
    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <img className="reload reloadbtn-lg" src="images/icons/icon_reload.svg" alt="Reload Button" />
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#slideshow"><h1>Wisdom<span className="subhead">Pet Medicine</span></h1></a>
                    </div>{/*<!-- navbar-header -->*/}
                    <div className="collapse navbar-collapse" id="collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li><img className="reload reloadbtn" src="images/icons/icon_reload.svg" alt="Reload Button" /></li>
                            <li className="active"><a href="#slideshow">Home</a></li>
                            <li><a href="#adoption">Adoption</a></li>
                            <li><a href="#appointments">Appointments</a></li>
                        </ul>
                    </div>{/*<!-- navbar collapse -->*/}
                </div>{/*<!-- navbar container -->*/}
                {/*<!-- nav -->*/}
            </nav>
        );
    }
}

Navigation.propTypes = {

};

export default Navigation;