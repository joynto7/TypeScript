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

// Rest Operator

const sendInvite = ( ...friends:string[]) => 
    {
       friends.forEach((friend: string) => 
        console.log(`send Invitation to ${friend}`)
    );
    }
    sendInvite("Maria","Ahona","Rupak","tonmy","Aziz","haha");
    

