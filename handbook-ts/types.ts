// primitives types in ts starts with lower case

// boolean
let isReady: boolean = false;
console.log(`ready ? ${isReady ? 'Yes' : 'Not yet'}`)

// number & big int
let binary: number = 0b1001; // start with 0b
let octal: number = 0o1727; // start with 0o
let decimal: number = 1234; 
let hex: number = 0x6070; // start with 0x
let bInt: bigint = 26914n; // end with n

let sum: number = binary + octal + decimal + hex; // base 10 result

console.log(`sum = ${sum}, bigInt = ${bInt}`);

if(sum > bInt)
    console.log(`sum is larger than bigInt`);
else if(sum < bInt)
    console.log(`sum is less than bigInt`);
else
    console.log(`sum is equal to bigInt`);

// string
let color: string = "pink";
console.log(color, color);

// array
let numbers: Array<number> = [1, 2, 3];
let nums: number[] = [4,5,6]
numbers.forEach((number,index) => {
    console.log(number * nums[index]);
});

// tuple, allow to express an array with a fixed number of elements whose types need not be the same
let tuple: [number, string, string] = [123, "abc", "def"];
console.log(typeof tuple);
console.log(tuple[2]);
// console.log(tuple[3]); elem not found

// enum, used to give more friendly names to sets of numeric values.
// default start with 0, increment by 1
// if not found in enum, result = undefined
// access enum by key, we will get value e.g. Size.M --> 3
// access enum by value, we will get key e.g. Size[3] --> M
enum Size {
    S = 2,
    M,
    L = 5
};
let sizeNumber : number = 5;
let product = Size.M * Size.S;

// get key by value, get value by key
console.log(Size[3], Size.M);
console.log(`Is ${Size[sizeNumber]} = ${product} ?`);
console.log(`number ${sizeNumber} is of size ${Size[sizeNumber]}`);

// not found
console.log(Size[9]); // undefined
// console.log(Size.XS); // error key not found



// unknown (for unknown types of variables when we are writing application)
let a: number = 123;
let b: unknown = 456;
// check type of unkown before assigning to variable with other type
if(typeof b == "number")
    a = b;
console.log(a);
b = a
console.log(b, typeof b); // type of b changed to more specific type i.e. number

// ts does not check type of variable with type any

// when using the --strictNullChecks flag, null and undefined are only assignable to 
// unknown, any and their respective types. Also, undefined is assignable to void. 

// void, used for return type of func with no return value
let printEqual: (a : any, b: any) => void = (
    a : any,
    b: any
): void => {
    console.log(a === b);
};

// undefined, null are not equal
let u: undefined = undefined;
let n: null = null;
printEqual(u,n);

// never represents the type of values that never occur. 
// e.g. return type for a function that always throws an exception 
// or one that never returns. The never type is assignable to,
// every type; however, no type is assignable to, never(except never itself)

/* let throwNew = (): never => {
    throw new Error("Some Error Occurred");
};
let d: number = throwNew(); */

// error
// let test: never = 123;


// object
let merge: (a: object,b: object) => object  = (
    a: object,
    b: object
): object => {
    return {
        ...a,
        ...b
    };
}

console.log(merge({ a: 109 }, { b: 364 }));

// type assertion is like a type cast, use it when sure about type of variable
// to be casted
let str: unknown = "this is a string";

let strLen: number = (str as string).length;

let len: number = (<string>str).length;
