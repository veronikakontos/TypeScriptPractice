// console.log('Hello World');

// let age: number = 20;
// if(age < 50)
//     age += 10;
// console.log(age);


//! BUILD IN TYPES
// let sales = 123_456_789;
// let course = 'TypeScript';
// let is_published = true;
// let level;

//! ANY TYPES
// function render(document: any) {
//     console.log(document);
// }

//! ARRAYS
// let numbers: number[] = [];
// numbers.forEach(n => n.toFixed)

//! TUPLES 
// 1, 'Veronika'
// let user: [number, string] = [1, 'Veronika'];
// user.push(1);

//! ENUMS
// const small = 1;
// const medium = 2;
// const large = 3;

// const enum Size { Small = 1, Medium = 2, Large };
// let mySize: Size = Size.Large;
// console.log(mySize);

//! FUNCTIONS
// if we return void if the value doesnt have a number

// function calculateTax(income: number, taxYear = 2022): number {
//     if (taxYear < 2022) 
//     return income * 1.2;
//     return income * 1.3;
// }

// calculateTax(10_000);

//! with function always enable from tsconfig.json 3 parameters
//! "noUnusedLocals": true,                          
//! "noUnusedParameters": true,  
//! "noImplicitReturns": true,   


//! OBJECTS and Type Alies (DRY) do not repeat yourself

type Employee = {
    //  readonly id: number,
    //  name: string,
    //  retire: (date: Date) => void

}
// let employee: Employee = {

// } = { 
//     id: 1, 
//     name: 'Veronika', 
//     retire: (date: Date)  => {
//         console.log(date);
//     }
// };

//! UNION TYPES
// function kgToLbs(weight: number | string): number {
//    //Narrowing
//     if (typeof weight === 'number') 
//        return weight * 2.2;
//     else 
//     return parseInt(weight) * 2.2;
    
// }

// kgToLbs(10);
// kgToLbs('10kg');

//! INTERSECTIONS
// type Draggable = {
//     drag: () => void
// };

// type Resizable = {
//     resize: () => void
// };

// type UIWidget = Draggable & Resizable;

// let textBox: UIWidget = {
//     drag: () => {},
//     resize: () => {}
// };

//! LITERAL TYPES (exact or specifuc value)
// type Quantity = 50 | 100;
// let quantity: Quantity =  100;

// type Metric = 'cm' | 'inch';


//! NULLABLE TYPES
// function greet(name: string | null) {
//     if ( name )
//     console.log(name.toLocaleUpperCase());
//     else 
//     console.log('Hello!!!')
// }
// greet(null);

// to be able to pass undefined we need pass undefined in the function as | undefined

//! OPTIONAL CHAINING

type Customer = {
    birthday?: Date
};

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(1);
//optional property acces operator thats where we use ?
// getCustomer (1) will show birthday and zero will undefined
// to check type in terminal: tsc && node dist/index.js

console.log(customer?.birthday?.getFullYear());
console.log(customer?.birthday);

















