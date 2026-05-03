interface Developer<T> {
    name: string;
    salary: number;
    device: {
        brand:string;
        model:string;
    },
    smartWatch: T ;
}

const poorDeveloper ={
    name: " Joynto ",
    salary:50,
    Device:{
        brand: 'mac',
        model: 'm1'
    }
}