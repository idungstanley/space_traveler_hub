import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ img, title, desc }) => (
  <div>
    <img src={img} alt="" />
    <article>
      <h4>{title}</h4>
      <p>{desc}</p>
    </article>
  </div>
);

Card.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};
export default Card;
