const numbers: number[] = [10, 20, 30];

const [a, b, c] = numbers;

console.log(a); // 10

type User = {
  name: string;
  age: number;
};
// object desturicing 
const user: User = {
  name: "Alice",
  age: 25
};

const { name, age } = user;
const arr: number[] = [10, 20, 30];

const [a, b, c] = arr;

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30