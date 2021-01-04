interface SquareParams{
    readonly width: number;  //required prop
    readonly color: string;  // optional prop
    /* 
        indexable type for extra properties with type 
        --> value : number, key: string
        NOTE: all key-value pairs in interface must match the
        indexable type otherwise error
    */
    // [propname: string] : number

}

interface Square{
    area: number; 
    color: string;
}

interface SearchString{
    (str: string, substr: string): boolean;
}

let createSquare = (config: SquareParams): Square => {
    let newSqaure : Square = { area: 0, color: "white" };
    if(config.width)
        newSqaure.area = config.width ** 2;
    if(config.color)
        newSqaure.color = config.color;

    return newSqaure;
}

// no error
let mySquare : Square = createSquare({ width: 2, color: "red" });
console.log(mySquare);

let square2 : Square = createSquare({ width: 3, color: "blue"});
console.log(square2);


// let square3 : Square = createSquare({ colour: "blue"});
// console.log(square3);

let searcher : SearchString = (str, sub) => {
    return str.search(sub) > -1;
}

console.log(searcher("abc","a"));
console.log(searcher("abc","d"));

