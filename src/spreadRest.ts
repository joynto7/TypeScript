//Spread Operator in Array

const friends = ["op","Suchi"];
const schoolfriends = ["Mon","OVi"];
const collegeFriends = ["mahin","Doha"];

friends.push(...schoolfriends)
friends.push(...collegeFriends)

console.log(friends);

// Objects

const usr =
 { 
    name: "Sui", 
    PhoneNo:"01759191945"
}
const otherInfo = 
{
     name: "Sui", 
     PhoneNo:"01759191945"
}

const usrInfo = { ...usr, ...otherInfo}
console.log(usrInfo);



