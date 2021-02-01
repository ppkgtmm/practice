// cannot be instantiated directly
abstract class Animal{
    // private name: string; // not accessible in child classes
    // protected readonly name: string; // acessible in child classes
    static owner: string = 'me';
    constructor(protected readonly name: string) {
        // this.name = name;        
    }
    greet() {
        console.log(`I'm ${this.name}`);
    }
}

class Dog extends Animal{
    constructor(name : string) {
        super(name);
    }
    bark() {
        console.log(`${this.name} is BARKING`);
    }

}
class Cat extends Animal{
    // error bc same name, but not same access modifier as superclass(Animal)
    // private name: string;
    constructor(name : string) {
        super(name);
        // this.name = name;
    }
    meow = () => console.log(`${this.name} is MEOWING`)

}

const myCat = new Cat('Elle');
myCat.meow();

// error for readonly reassignment & access out-side class
// myCat.name = 'Laura';

const myPet: Animal = new Dog('Doggy');
myPet.greet();
// myPet has type of Animal not Dog
// myPet.bark(); // error

// changed value of static var
Animal.owner = 'someone else';
console.log(Dog.owner);