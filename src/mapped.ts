const arrayOfNum : number[] =[1,4,6]; 
const arrayOfstring: string[]= ["1","4","5"];

const arrayofStringUsingmap : string[] = arrayOfNum.map((num)=>num.toString());
console.log(arrayofStringUsingmap);


// map types

type AreaOfNum ={
    height:number;
    width:number;
};

type AreaOfString ={

    height:string;
    width:string;

}