// Define the interface
interface User {
  id: number;
  name: string;
  email: string;
  age?: number; // optional
}
// Use it
const user: User = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  age: 25,
};

console.log(user.name); // Alice

