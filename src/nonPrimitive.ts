// array

let marketList : string[] = ["Orange","Apple","Bannana"]
marketList.push("Egg")
 
console.log(marketList)

// object
let user: object = { name: "Alice", age: 25 };

// Better approach with type shape:
let person: { name: string; age: number } = {
  name: "Alice",
  age: 25
};
console.log(person)

//mix array in TS
let mixedArr:(string | number)[] = ["Eggs","Milk",1,"sugar",76];
console.log(mixedArr);

// tuple

let coordinates : [number,number] = [ 20, 30];
let couple : [string, String ] = ["Mahi","Mohona"];
let mix : [number, String ] = [100,"Mohona"];
let distination : [ String, String, number ] = ["Dhaka","Mohona", 2];
 
