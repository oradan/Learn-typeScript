class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

// function greeter(person : Person) {
//     return "Hello, " + person.firstName + " " + person.lastName;
// }

// let user = new Student("Jane", "M.", "User");

// console.log(greeter(user));
// console.log(user.fullName)

class Animals{
    constructor(public name:string, public type:string, public numberOfLegs:number){}
}

function describeTheAnimal(animal:Animals){
    return "I am a beautiful "+animal.type+" "+animal.name+" and I have all "+animal.numberOfLegs+" legs !!!"
    }



let animal=new Animals("cat","domestic",4)



console.log(describeTheAnimal(animal))
// example of embeding the data in to a string 
function templateString(){
    return `Heloo world I am a beautiful ${animal.name}. I am 
    ${animal.type} but a have a problem, I have only
    ${animal.numberOfLegs-1} legs....oooo I am so sad !!!!`
}
console.log(templateString())

//Array

var myArray:number[]=[1,2,3]
console.log(myArray)
myArray.push(5)
console.log(myArray)

//Tuple type

var tupleArr:[string,number,boolean]
tupleArr=["Olga",7,false]
console.log(tupleArr)
console.log(tupleArr[0]+" "+tupleArr[1].toString())

//enum

enum Color {Red = 1, Green, Blue}
console.log(Color)
var c:Color=Color.Blue
console.log(c)
let colorName:string=Color[2]
console.log(colorName)
colorName=Color[3]
console.log(colorName)



interface SquareConfig {
    color?: string;
    width?: number;
}
interface Square{
    color:string;
    area:any;
    circle:number;
}

function createSquare(config: SquareConfig):void{
    let newSquare = {color: "white", area:"fgfgh",circle:23};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width+""+config.width;
    }
    // return newSquare;
    console.log(`This is a function that does something ,it display the color of the Square,with is: ${newSquare.circle} `)
}
createSquare({color:"black",width:300})

// let mySquare = createSquare({color: "black",width:200});
// console.log(mySquare);

interface SearchFunc {
    (source: string, subString: string):boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    let result = source.search(subString);
    return result >-1;
}

console.log(mySearch("eu merg la mare la ora 7", "7"))

class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");
console.log(greeter.greeting)
console.log("I am saying hello from the meton "+greeter.greet())

// class Animal {
//     move(distanceInMeters: number=0) {
//         console.log(`Animal moved ${distanceInMeters}m.`);
//     }
// }

// class Dog extends Animal {
//     bark() {
//         console.log('Woof! Woof!');
//     }
// }

// const dog = new Dog();
// dog.bark();
// dog.move(100);
// dog.bark();


// class Animal {
//     name: string;
//     constructor(theName: string) { this.name = theName; }
    
//     move(distanceInMeters: number = 0) {
//         console.log(`${this.name} moved ${distanceInMeters}m.`);
//     }
// }

// class Snake extends Animal {
//     constructor(name: string) { super(name); }
//     move(distanceInMeters = 5) {
//         console.log("Slithering...");
//         super.move(distanceInMeters);
//     }
// }

// class Horse extends Animal {
//     constructor(name: string) { super(name); }
//     move(distanceInMeters = 45) {
//         console.log("Galloping...");
//         super.move(distanceInMeters);
//     }
// }

// let sam = new Snake("Sammy the Python");
// let tom: Animal = new Horse("Tommy the Palomino");

//  sam.move();
//  tom.move(34);

 class Animal {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

class Rhino extends Animal {
    constructor() { super("Rhino"); }
}

class Employee {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

let animall = new Animal("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");
console.log(animall)
console.log(rhino)
console.log(employee)
animall = rhino;
//animall = employee;

class Grid {
    static origin = {x: 0, y: 0};
    calculateDistanceFromOrigin(point: {x: number; y: number;}) {
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
    constructor (public scale: number) { }
}

let grid1 = new Grid(1.0);  // 1x scale
let grid2 = new Grid(5.0);  // 5x scale

console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));
