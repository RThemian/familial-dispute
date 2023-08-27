import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GamePage from './../pages/GamePage';
import LoginPage from './../pages/LoginPage'
import ResultPage from './../pages/ResultPage'


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
