import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Landing.css';



const Alert = ({ alerts }) =>{

  return (alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    <div key={alert.id} className={alert.alertType==='danger'?`alert_danger`:`alert_success`}>
      {alert.msg}
    </div>
  ))
  ) 
}

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};
const mapStateToProps = (state) => {
  return {
    alerts: state.alerts,
  };
};

export default connect(mapStateToProps)(Alert);
