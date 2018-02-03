import React from 'react';
import { Link } from 'react-router';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { toggleMainBar } from '../../actions/mainBar';
import { logOutUser } from '../../actions/login';

const MainBar = ({ isOpen, toggleMainBar, logOutUser }) => (
    <div className={'mainbar__base ' + (isOpen ? 'mainbar__base--is-minimized ' : '')}>

        <div className="mainbar__container">

            <div className="mainbar__topBar">
                <ul>
                    <li className="mainbar__actionBtn">
                        <button onClick={() => toggleMainBar()}>
                            <i className="fa fa-bars" />
                            <span>{isOpen ? 'Maximize' : 'Minimize'}</span>
                        </button>
                    </li>
                    <li className="mainbar__actionBtn">
                        <Link to="/settings">
                            <i className="fa fa-cog" />
                            <span>Settings</span>
                        </Link>
                    </li>
                    <li className="mainbar__actionBtn">
                        <button onClick={() => logOutUser()}>
                            <i className="fa fa-sign-out" />
                            <span>Log Out</span>
                        </button>
                    </li>
                </ul>
            </div>

            <div className="mainbar__content">
                <div className="mainbar__profileImage">
                    <img src="http://placehold.it/250x250" alt="" />
                </div>

                <div className="mainbar__profileName">Petar Milutinovic</div>
            </div>
        </div>
    </div>
);

MainBar.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggleMainBar: PropTypes.func.isRequired,
    logOutUser: PropTypes.func.isRequired,
};

export default connect(
    state => ({ isOpen: state.mainBar.isOpen }),
    { toggleMainBar, logOutUser },
)(MainBar);
