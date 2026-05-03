
type CartItem = {
name: string;
price: number;
quantity?: number;
};

//function
const calculateTotal = ({price, quantity = 1}:CartItem):number =>{
    return price * quantity;
}


console.log(calculateTotal({ name: "Pen", price: 10 , quantity:4 }));


// quantity missing → treated as 1 → total = 10
