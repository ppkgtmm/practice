interface Person{
    name: string;
    surname: string;
}

function isPerson(object: any) : object is Person {
    return 'name' in object && 'surname' in object;
    
}
function greet(thing: string | Person) {
    if(typeof thing === "string"){
        console.log(`Hello ${thing}`);
        return
    }
    else if(isPerson(thing)){
        console.log(`Hello ${thing.name} ${thing.surname}`);
        return;
    }
}

let p1 : Person = {name: "Janet", surname: "Mars"};
greet("Jane");
greet(p1);