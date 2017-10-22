import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { SideBar, MainBar } from '../components';

const App = ({ isLoggedIn, children, isOpen }) => (
    <div>
        { isLoggedIn ?  <SideBar /> : '' }
       
        <div className={'content__base ' + (isOpen ? 'content__base--is-maximized ' : '') + (isLoggedIn ? '' : 'content__base--is-maximized')}>
            {children}
        </div>

        { isLoggedIn ?  <MainBar /> : '' }
    </div>
);

App.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    children: PropTypes.element.isRequired,
    isOpen: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
    isLoggedIn: state.appState.isLoggedIn,
    isOpen: state.mainBar.isOpen,
});

export default connect(
    mapStateToProps,
)(App);
