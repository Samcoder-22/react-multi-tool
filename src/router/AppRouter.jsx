// src/router/AppRouter.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import CalculatorPage from '../pages/CalculatorPage';
// import AspectRatioPage from '../pages/AspectRatioPage';
// import ColorExplorerPage from '../pages/ColorExplorerPage';
// import QuizPage from '../pages/QuizPage';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/calculator" />} />
      <Route path="/calculator" element={<CalculatorPage />} />
      {/* Future routes below */}
      {/* <Route path="/aspect-ratio" element={<AspectRatioPage />} /> */}
      {/* <Route path="/color-explorer" element={<ColorExplorerPage />} /> */}
      {/* <Route path="/quiz" element={<QuizPage />} /> */}
    </Routes>
  );
};

export default AppRouter;
