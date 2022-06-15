import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { bookRocket, cancelBooking } from '../../redux/rockets';

const ReservationBtn = ({ rocketId, reserved }) => {
  const dispatch = useDispatch();
  const handleBookings = () => dispatch(bookRocket(rocketId));
  const cancelBookings = () => dispatch(cancelBooking(rocketId));
  return (
    <button
      type="button"
      onClick={() => (reserved ? cancelBookings() : handleBookings())}
    >
      {reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
    </button>
  );
};

ReservationBtn.propTypes = {
  reserved: PropTypes.bool.isRequired,
  rocketId: PropTypes.string.isRequired,
};

export default ReservationBtn;
