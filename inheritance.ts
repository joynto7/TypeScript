class Animal {
    name:string;
    sound:string;

    //Constructor
    constructor(name:string, sound:string){
        this.name = name ;
        this.sound =sound ;
    }

    // methods
     makeSound(){
        console.log(`${this.name} is making ${this.sound}`);
     }

}

class indianDog extends Animal{
    bark(){
        console.log(" abe shale ");
    }
}

const dog1 = new indianDog("doggyvai","veow vewo")
console.log(dog1);

