import React, { Fragment } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import PropTypes from 'prop-types';

function Nav_top({ auth: { isAuthenticated, loading }, logout }) {
  const authLinks = (
    <Navbar bg='primary' variant='dark'>
      <Container>
        <Navbar.Brand href='/dashboard'>Dashboard</Navbar.Brand>
        <Nav className='me-auto d-flex justify-content-end'>
          <Nav.Link href='/profiles'>Developers</Nav.Link>
          <Nav.Link href='/posts'>Posts</Nav.Link>
          <Nav.Link onClick={logout}>Logout</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );

  const guestLinks = (
    <Navbar bg='primary' variant='dark'>
      <Container>
        <Navbar.Brand href='/'>Dev Connector</Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link href='/profiles'>Developers</Nav.Link>
          <Nav.Link href='/register'>Register</Nav.Link>
          <Nav.Link href='/login'>Login</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );

  return (
    <Navbar bg='primary' variant='dark'>
      <Container>
        {!loading && (
          <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
        )}
      </Container>
    </Navbar>
  );
}

Nav_top.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Nav_top);
