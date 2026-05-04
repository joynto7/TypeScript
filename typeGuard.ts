
type Alphanemuric = number | string;

const add = ( num1:Alphanemuric , num2:Alphanemuric )=> {

    if (typeof num1 === 'number' && typeof num2 === 'number'){
        return num1+num2 ;
    }else{
        num1.toString() + num2.toString();
    }
 };