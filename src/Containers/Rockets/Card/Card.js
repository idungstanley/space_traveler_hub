import React from 'react';
import PropTypes from 'prop-types';
import ReservationBtn from './Reservation/ReservationBtn';

const Card = ({
  img, title, desc, rocketId, reserved,
}) => (
  <article>
    <img src={img} alt="" />
    <div>
      <h4>{title}</h4>
      <p>
        <span>{reserved ? 'Reserved' : ''}</span>
        {desc}
      </p>
      <ReservationBtn rocketId={rocketId} reserved={reserved} />
    </div>
  </article>
);

Card.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  rocketId: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};
export default Card;
