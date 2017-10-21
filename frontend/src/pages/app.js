import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { SideBar, MainBar } from '../components';
import { Login } from '../pages';

const App = ({ isLoggedIn, children, isOpen }) => {
    if (!isLoggedIn) {
        return (
            <div className="content__base content__base--is-maximized">
                <Login />
            </div>
        );
    }

    return (
        <div>
            <SideBar />

            <div className={'content__base ' + (isOpen ? 'content__base--is-maximized' : '')}>
                {children}
            </div>

            <MainBar />
        </div>
    );
};

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
