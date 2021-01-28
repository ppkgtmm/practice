// interfaces help describing an object with properties and also function types

// error due to excess props
// const obj: { a: number } = { a: 123, b: 456 };

interface SquareParams{
    // read only props cannot be reassigned
    readonly width: number;  // required prop
    readonly color?: string;  // optional prop check(if exist) before assigning to other var
    /* 
        indexable type for extra properties with type 
        with value : number, key: string
        NOTE: all key-value pairs in interface must match the
        indexable type otherwise error
    */
    // [propname: string] : number

}

interface Square{
    area: number; 
    color: string;
}

let createSquare = (config: SquareParams): Square => {
    let newSqaure : Square = { area: 0, color: "white" };
    if(config.width)
        newSqaure.area = config.width ** 2;
    if(config.color)
        newSqaure.color = config.color;

    return newSqaure;
}

let mySquare : Square = createSquare({ width: 2, color: "red" });
console.log(mySquare);

// no error
let square2 : Square = createSquare({ width: 3 });
console.log(square2);

// let square3 : Square = createSquare({ colour: "blue"});
// console.log(square3);

// cannot mutate RO array(including its props) or its elements
let arr: ReadonlyArray<number> = [1, 2, 3, 4, 5];
let arr2: Array<number> = [5, 6, 7, 8];

// no error and reassigned
arr = arr2;

// RO array cannot be assigned to mutable type need to cast RO to mutable type
// arr2 = arr;

arr2 = (arr as Array<number>)
console.log(arr);


// declare function type
interface SearchString{
    (str: string, substr: string): boolean;
}


let searcher : SearchString = (str, sub) => {
    return str.search(sub) > -1;
}

console.log(searcher("abc","a"));
console.log(searcher("abc","d"));

// in js array is object with keys as indexes, values as elems
interface MyArray {
    [index: number]: string | number;
}
const myArr: MyArray = ["Bob", "Marry", 1, 2];
console.log(myArr);

// when indexing with a number, JS will convert numeric index to a string type before indexing into an object.

interface Animal {
    name: string;
}
  
interface Dog extends Animal {
    breed: string;
}

// string index must be used for super class
interface Okay {
    [x: number]: Dog;
    [x: string]: Animal;
}
