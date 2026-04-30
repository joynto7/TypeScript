//Functions

//nomral Functions

function add(num1:number, num2:number):number
{
  return num1 + num2;
}

//Array Functions
const addArrow = (num1:number,num2:number):
number => num1 + num2;

addArrow(2,2);

// method

const poor = {
    name: "Joynto",
    balance: 10,
    addBalance(value: number): void {
        this.balance = this.balance + value; // updates the object
    },
};

poor.addBalance(12000);
console.log(poor);
// { name: 'Joynto', balance: 12010 } ✅

//CallBack Function

//basic map

const numbers: number[] = [1, 2, 3, 4, 5];

const doubled = numbers.map((num: number): number => {
    return num * 2;
});

console.log(doubled); // [2, 4, 6, 8, 10]




