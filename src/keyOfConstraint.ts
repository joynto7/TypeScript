

type RichPeopleVehicle={
    car:string; //key value pair
    bike:string;
    cng:string;
}

type MyVehicle = "bike" | "car" | "cng";
type MyVehicle2 = keyof(RichPeopleVehicle);

const myVehicle:MyVehicle2 = "bike"

// key of constraint

const user = {
    id:123, //key-value pair
    name:"joy",
    address:{
        city:"dhaka",
    },
};

//const myID = user.id
const myID = user["id"];
const myname = user["name"];
const address =user["address"];

console.log(myID,myname,address);

type User = {
    id:number;
    name:string;
    address: string;
}





const getPropertyFromObj= <X> (obj:X,key:keyof X) =>{
    return obj[key];
}

const result = getPropertyFromObj(user,"name");
console.log(result);

const prodcut = {
    brand:"HP",
};


const result2 = getPropertyFromObj(prodcut,"brand");
console.log(result2);


