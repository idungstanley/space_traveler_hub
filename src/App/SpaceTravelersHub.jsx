import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../Containers/Navbar/Navbar';
import MyProfile from '../Containers/MyProfile/MyProfile';
import Rockets from '../Containers/Rockets/Rockets';

const SpaceTravelersHub = () => (
  <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<div>Main page</div>} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/rockets" element={<Rockets />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default SpaceTravelersHub;
