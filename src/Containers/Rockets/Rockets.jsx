import React from 'react';
import { useSelector } from 'react-redux';
import Card from './Card/Card';

const Rockets = () => {
  const RocketData = useSelector((state) => state.rockets);
  return (
    <>
      {RocketData.map((data) => (
        <Card
          img={data.flickr_images}
          key={data.id}
          title={data.rocket_name}
          desc={data.description}
        />

      ))}
    </>
  );
};

export default Rockets;
