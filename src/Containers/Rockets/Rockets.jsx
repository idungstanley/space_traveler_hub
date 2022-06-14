import React from 'react';
import { useSelector } from 'react-redux';
import Card from './Card/Card';

const Rockets = () => {
  const RocketData = useSelector((state) => state.rockets);
  console.log(RocketData);
  return (
    <>
      {RocketData.map((data) => (
        <Card img={data.flickr_images} key={data.id} title="sunday" desc="sna" />
      ))}
    </>
  );
};

export default Rockets;
