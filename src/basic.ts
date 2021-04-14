import * as R from 'ramda';

console.log(R.range(1, 9 + 1));

const numbers: number[] = R.range(1, 9 + 1);

R.tap((n) => console.log(n))(numbers);

const array: number[] = R.range(1, 10);

R.pipe(R.tap((n) => console.log(n)))(array);

export const dump = <T>(array: T[]): T[] =>
    R.pipe(R.tap((n) => console.log(n)))(array) as T[];

dump(R.range(1, 10));

console.log(R.add(1, 2), R.add(1)(2));

export const sum = (...numbers: number[]): number =>
    numbers.reduce((result: number, sum: number) => result + sum, 0);

export const curriedSum = R.curryN(4, sum);

console.log(
    curriedSum(),
    curriedSum(1),
    curriedSum(1)(2),
    curriedSum(1)(2)(3),
    curriedSum(1)(2)(3)(4),
);

const originalArray: number[] = [1, 2, 3];

const resultArray = R.pipe(R.map(R.add(1)))(originalArray);

console.log(originalArray, resultArray);
