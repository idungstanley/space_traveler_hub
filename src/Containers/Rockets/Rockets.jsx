import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../../Components/Card/Card';
import './rocket.css';

const Rockets = () => {
  const RocketData = useSelector((state) => state.rockets);
  return (
    <section className="container" data-testid="container">
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
    </section>
  );
};

export default Rockets;
