import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../Containers/Navbar/Navbar';
import MyProfile from '../Containers/MyProfile/MyProfile';
import Rockets from '../Containers/Rockets/Rockets';
import { readRocketData } from '../redux/rockets';
import Missions from '../Containers/Missions/Missions';

const SpaceTravelersHub = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(readRocketData());
  });

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<div>Main page</div>} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/rockets" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default SpaceTravelersHub;
