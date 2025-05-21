// // src/components/Calculator/Calculator.jsx
// import React, { useState,useEffect } from 'react';
// import styles from './Calculator.module.css';

// const Calculator = () => {
//   const [expression, setExpression] = useState('');
//   const [result, setResult] = useState('');

//   const handleInput = (value) => {
//     setExpression((prev) => prev + value);
//   };

//   const handleClear = () => {
//     setExpression('');
//     setResult('');
//   };

//   const handleEvaluate = () => {
//     try {
//       setResult(eval(expression));
//     } catch {
//       setResult('Error');
//     }
//   };
    
//   const buttons = ['AC', '%', '<X', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '±', '0', '.', '=',];
//   useEffect(() => {
//   if (expression === '') {
//     setResult('');
//     return;
//   }

//   try {
//     const evalResult = eval(expression);
//     setResult(evalResult);
//   } catch {
//     setResult(' ');
//   }
// }, [expression]);

//   return (
//     <div className={styles.calculator}>
//       <input className={styles.display} type="text" value={expression} readOnly />
//       <input className={styles.result} type="text" value={result} readOnly />
//       <div className={styles.buttons}>
//         {buttons.map((btn, i) => (
//           <button
//             key={i}
//             className={styles.button}
//             onClick={() => (btn === '=' ? handleEvaluate() : handleInput(btn))}
//           >
//             {btn}
//           </button>
//         ))}
//         <button className={styles.clear} onClick={handleClear}>C</button>
//       </div>
//     </div>
//   );
// };

// export default Calculator;

// src/components/Calculator/Calculator.jsx
import React, { useState, useEffect } from 'react';
import mexp from 'math-expression-evaluator';
import styles from './Calculator.module.css';

const Calculator = () => {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  const handleInput = (value) => {
    switch (value) {
      case 'AC':
        handleClear();
        break;
      case '<X':
        setExpression((prev) => prev.slice(0, -1));
        break;
      case '±':
        toggleSign();
        break;
      case '%':
        applyPercentage();
        break;
      case '=':
        handleEvaluate();
        break;
      default:
        setExpression((prev) => prev + value);
        break;
    }
  };

  const handleClear = () => {
    setExpression('');
    setResult('');
  };

  const handleEvaluate = () => {
    try {
      setResult(mexp.eval(expression));
    } catch {
      setResult('Error');
    }
  };

  const toggleSign = () => {
    try {
      if (expression !== '') {
        const value = mexp.eval(expression);
        setExpression((-value).toString());
      }
    } catch {
      setResult('Error');
    }
  };

  const applyPercentage = () => {
    try {
      if (expression !== '') {
        const value = mexp.eval(expression);
        setExpression((value / 100).toString());
      }
    } catch {
      setResult('Error');
    }
  };

  const buttons = ['AC', '%', '<X', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '±', '0', '.', '='];

  useEffect(() => {
    if (expression === '') {
      setResult('');
      return;
    }

    try {
      const evalResult = mexp.eval(expression);
      setResult(evalResult);
    } catch {
      setResult('');
    }
  }, [expression]);

  return (
    <div className={styles.calculator}>
      <input className={styles.display} type="text" value={expression} readOnly />
      <input className={styles.result} type="text" value={result} readOnly />
      <div className={styles.buttons}>
        {buttons.map((btn, i) => (
          <button
            key={i}
            className={styles.button}
            onClick={() => handleInput(btn)}
          >
            {btn}
          </button>
        ))}
        {/* <button className={styles.clear} onClick={handleClear}>C</button> */}
      </div>
    </div>
  );
};

export default Calculator;
