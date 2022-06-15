import React from 'react';
import { useSelector } from 'react-redux';
import Card from './Card/Card';
// import { bookRocket, cancelBooking } from '../../redux/rockets';

const Rockets = () => {
  const RocketData = useSelector((state) => state.rockets);
  console.log(RocketData);
  return (
    <>
      {RocketData.map((data) => (
        <Card
          img={data.image}
          key={data.rocketId}
          title={data.title}
          desc={data.desc}
          rocketId={data.rocketId}
          reserved={data.reserved}
        />

      ))}
    </>
  );
};

export default Rockets;
