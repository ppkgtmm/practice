// funcs that don't have name are anonymous funcs
// e.g. let a = () => ... or a = function() ...

// name one either sides can differ but order and type must be the same
// optional params with no default value provided have to be after required params in arg
let printData : (n: string | undefined, s: string, md?: string) => void = (
    name: string = "Anonymous",
    surname: string,
    middleName?: string): void => {
    console.log(`The person is ` +
       `${name} ${middleName ? middleName : ''} ${surname}`
    ); 
}

printData("Mary", "Brown");
printData("Nick", "Johnan", "Jenes");
printData(undefined, "Wilson");

// rest params ( ... type[] ) must be last param, 
// cannot use more than one rest param per func
let printFriends = (
    name: string,
    ...friends: string[]
    ) : void => {
        console.log(`${name}'s friends are ${friends.join(" ")}`)
}

printFriends("Meme", "Jokes", "Pranks", "Franks", "Fun");

interface Card {
    suit: string;
    card: number;
}
  
let suits = ["hearts", "spades", "clubs", "diamonds"];

// this = owner of statement's owner func (start from most specific)
// if func is arrow func, it is not counted as owner

class Handler {
    info: string;
    constructor(info : string | undefined) {
        this.info = info || "no info";
    }
    onClick = () => {
        console.log(`${this.info} is clicked`);
    };
}
  
let h = new Handler('button1');
h.onClick()

// overloading allow type checking for func call
// should order overloading funcs from most specific to least specific
function pickCard(x: Card[]): number;
function pickCard(x: number): Card;
function pickCard(x: any): any {
  
    //  pick one from user provided deck
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }

    // pick one from system's default deck
    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}

let myDeck = [
    { suit: "diamonds", card: 2 },
    { suit: "spades", card: 10 },
    { suit: "hearts", card: 4 },
];

let pickedCard1 = myDeck[pickCard(myDeck)];
console.log("card: " + pickedCard1.card + " of " + pickedCard1.suit);

let pickedCard2 = pickCard(15);
console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);