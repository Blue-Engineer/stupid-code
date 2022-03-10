// let calc2 = (z) => z * 10;

// let calc1 = (x, y) => {
//   return x + y + calc2(x);
// };

// console.log(calc1(2, 3));
// // console.log(calc1.call(2, 4));
// let values = [2, 4];
// console.log(calc1.apply(this, values));
// console.log(calc1.call(this, 2, 3));

// const greet = () => {
//   var msg = ["Hello", this.name, "welcome to ", this.location].join(" ");
//   console.log(msg);
// };

// const person = { name: "Bolu", location: "Lagos City" };
// greet.call(person);

// class Shape {
//   constructor(name) {
//     this.name = name;
//   }

//   static display(shape) {
//     console.log(shape);
//   }
// }

// const s1 = new Shape("square");
// Shape.display(s1);

const names = ["jane", "doe", "wu", "shang"];
const [name1, name2] = names;
console.log(name1);
