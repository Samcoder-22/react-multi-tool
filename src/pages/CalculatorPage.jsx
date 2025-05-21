// src/pages/CalculatorPage.jsx
import React from 'react';
import Calculator from '../components/Calculator/Calculator';

const CalculatorPage = () => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-md p-6 rounded-lg">
      <h1 className="text-3xl font-semibold mb-4">Simple Calculator</h1>
      <Calculator />
    </div>
  );
};

export default CalculatorPage;
