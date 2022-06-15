import React from 'react';
import PropTypes from 'prop-types';
import ReservationBtn from './Reservation/ReservationBtn';

const Card = ({ img, title, desc }) => (
  <article>
    <img src={img} alt="" />
    <div>
      <h4>{title}</h4>
      <p>{desc}</p>
      <ReservationBtn reserve="reserve" />
    </div>
  </article>
);

Card.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};
export default Card;
