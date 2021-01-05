let printData = (
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

let printFriends = (
    name: string,
    ...firends: string[]
    ) : void => {
        console.log(`${name}'s friends are ${firends.join(" ")}`)
}

printFriends("Meme", "Jokes", "Pranks", "Franks", "Fun");

interface Card {
    suit: string;
    card: number;
}
  
let suits = ["hearts", "spades", "clubs", "diamonds"];

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