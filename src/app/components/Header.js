import React, { Component, PropTypes } from 'react'
import AppLocalBootstrapActions from 'app_local'
import Navigation from 'Navigation'
import SlideShow from 'SlideShow'

class Header extends Component {
    componentDidMount() {
        AppLocalBootstrapActions.setupScrollspy()        
    }
   
    render() {
        return (
            <header>
                <Navigation />
                <SlideShow />
            </header>
        );
    }
}

Header.propTypes = {

};

export default Header;