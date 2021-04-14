import * as R from 'ramda';

const value = 1;

const newValue = R.inc(value);

const newArray = R.pipe(R.map(R.inc))([value]);

const numbers: number[] = R.range(1, 9 + 1);

// const incNumbers = R.pipe(
//     R.tap(
//         (a) => console.log('before inc:', a),
//         R.map(R.inc),
//         R.tap((a) => console.log('after inc:', a)),
//     ),
// );
//
// const newNumbers = incNumbers(numbers);

// R.add(a: number)(b: number);
// R.subtract(a: number)(b: number);

const inc = (b: number): number => R.add(1)(b);

const indexedMap = R.addIndex(R.map);
