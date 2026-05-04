class Animal{
    name:string
    species:string
    sound:string

     constructor(name:string,species:string,sound:string){
        this.name = name 
        this.species =species 
        this.sound = sound 

     }
}

const dog = new Animal("dogvai","dog","Ghew Ghwe")
const cat = new Animal("catvai","cat","mew mew")

console.log(dog.sound);
console.log(cat.sound);


