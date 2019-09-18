/**
 * Напишите функцию mergeNumbers(number), складывающую
 * все цифры числа number до тех пор, пока не получится
 * однозначный результат.
 *
 * Пример:
 * mergeNumbers(1) === 1
 * mergeNumbers(10001) === 2
 * mergeNumbers(15334232) === 5
 * mergeNumbers(50349814743854) === 2
 *
 * @param number
 */
export function mergeNumbers(number) {
  let neWnumber = number;

  neWnumber = String(neWnumber)
    .split('')
    .reduce((sum, current) => sum + +current, 0);
  return neWnumber > 10 ? mergeNumbers(neWnumber) : neWnumber;
}
