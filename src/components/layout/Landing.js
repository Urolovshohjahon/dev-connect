import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Landing.css';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

function Landing({isAuthenticated}) {

    if(isAuthenticated){
        return <Redirect to='/dashboard' />
    }


    return (
        <div className="Landing d-flex flex-column justify-content-around align-items-center">
           <h1>Developer Connector</h1>
           <p>Create a developer profile/portfolio share posts and get help from other developers.</p>
           <form className="d-flex">
               <Link to="/register" className="btn btn-primary" >Sign Up</Link>
               <Link to="/login" className="btn btn-light" >Log In</Link>
           </form>
        </div>
    )
}

Landing.propTypes = {
    isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state =>({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(Landing)
