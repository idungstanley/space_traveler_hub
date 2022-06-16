import React from 'react';
import PropTypes from 'prop-types';
import ReservationBtn from '../Reservation/ReservationBtn';
import './card.css';

const Card = ({
  img, title, desc, rocketId, reserved,
}) => (
  <article className="card">
    <img className="image" src={img} alt="" />
    <div className="card-desc">
      <h4 className="title">{title}</h4>
      <p>
        {reserved ? <span className="status">Reserved</span> : ''}
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
