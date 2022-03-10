// const bar = {
//   a: 100,
//   b: 2000,
//   c: {
//     d: 788,
//   },
// };

// const foo = { ...bar };
// foo.c.d = 200;
// console.log(foo.c.d);

const a = Array.from({ length: 5 }, (v, k) => k + 1);
console.log(a);
