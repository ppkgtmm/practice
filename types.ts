// boolean
let isReady: boolean = false;
console.log(`ready ? ${isReady ? 'Yes' : 'Not yet'}`)

// number & big int
let binary: number = 0b1001;
let octal: number = 0o1727;
let decimal: number = 1234;
let hex: number = 0x6070;
let bInt: bigint = 26914n;

let sum: number = binary+octal+decimal+hex;

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
let numbers: Array<number> = [1,2,3];
numbers.forEach(number => {
    console.log(number * 2);
});

// tuple
let tuple: [number, string] = [123, "abc"];
console.log(typeof tuple);

// enum
// default start with 0, increment by 1
// if not found in enum result = undefined
enum Size {
    S = 2,
    M = 4,
    L = 8
};
let sizeNumber : number = 8;
let product = Size.M * Size.S;
console.log(`Is ${Size[sizeNumber]} = ${product} ?`);
console.log(`number ${sizeNumber} is of size ${Size[sizeNumber]}`);

// unknown
let a: number = 123;
let b: unknown = 456;
if(typeof b == "number")
    a = b;
console.log(a);

// void
let printEqual: (a : any,b: any) => void = (
    a : any,
    b: any
): void => {
    console.log(a === b);
};

// undefined, null
let u: undefined = undefined;
let n: null = null;
printEqual(u,n);

// never
/* let throwNew = (): never => {
    throw new Error("Some Error Occurred");
};
let d: number = throwNew(); */

// object
let merge: (a: object,b: object) => object  = (
    a: object,
    b: object
): object => {
    return {
        ...a,
        ...b
    }
}

console.log(merge({ a: 109 },{ b: 364 }))
