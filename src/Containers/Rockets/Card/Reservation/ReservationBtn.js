import React from 'react';
import PropTypes from 'prop-types';

const ReservationBtn = ({ reserve }) => (
  <button type="button">{reserve}</button>
);

ReservationBtn.propTypes = { reserve: PropTypes.string.isRequired };

export default ReservationBtn;
