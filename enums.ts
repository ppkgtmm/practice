function shiftLeft(num:number) {
    return 2 << num;
}
// Numeric enums can be mixed in computed and constant members.
// enums without initializers either need to be first, or have to come after numeric enum
//initialized with numeric constants or other constant enum members
enum E {
    A = shiftLeft(3),
    B = shiftLeft(4),
    // C //error
    C = B * 2,
    D = A | B // bitwise or
}

console.log(E);

// heterogenous enums
enum yORn {
    No = 0,
    Yes = 'YES'
}
console.log(yORn);

let getResponse: (options: { No: number, Yes: string }) => number | string = (options) => {
    let rand = Math.floor(Math.random() * 2)
    let response: number | string;
    switch (rand) {
        case 0:
            response = yORn[rand];
            break;
        default:
            response = yORn.Yes;
            break;
    }
    return response;
}
console.log(getResponse(yORn));

enum select{
    A = 1,
    B, // same value as c
    C = 2
}
console.log(select, select[2]); // select[2] = C because clearly defined

type NUM = keyof typeof select;
// let abc: NUM = 'D'; // error, not one of enum select keys
let def: NUM = 'A';
console.log(def);