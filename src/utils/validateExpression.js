// utils/validateExpression.js
export function isValidExpr(expr) {
  // 1. No trailing operator
  if (/[+\-*/.]$/.test(expr)) return false;
  // 2. No consecutive dots
  if (/\.\./.test(expr)) return false;
  // 3. Non-empty
  if (expr.trim() === '') return false;
  return true;
}
