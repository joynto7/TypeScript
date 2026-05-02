

type GenericArray<T> = Array<T>;



//const friends : string[]=["joy","Hoi","Mori",];

const friends : GenericArray<string>=["joy","Hoi","Mori",];
//const rollNumbers : number[]=[12,23,23,];

const rollNumbers : GenericArray<number>=[12,23,23,];

//const isEligiableList: boolean[] = [true,false,true];

const isEligiableList: GenericArray<boolean> = [true,false,true];


console.log(friends,rollNumbers,isEligiableList);


//  using mulitple datatypes on genreics

type Coordinates<X,Y> = [X,Y]

const coordinates1: Coordinates<number,number> = [20,30];
const coordinates2: Coordinates<String,String> = ["20","30"]

//generic for object

const studentList: GenericArray<{name:string;age:number}> = [
    { 
    name: "joy",
    age:23,
    },
    {
        name:"pran",
        age:34
    }
]
console.log(studentList);


